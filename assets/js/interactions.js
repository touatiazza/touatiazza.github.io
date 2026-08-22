/* ==========================================================================
   AZZA TOUATI PORTFOLIO - UI INTERACTIONS, MAGNETIC BUTTONS & CUSTOM CURSOR
   ========================================================================== */

export function initInteractions() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 1. Sticky Navbar & Scrollspy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const isOpen = navMenu.classList.contains('active');
      navToggle.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      });
    });
  }

  // 2. Custom Dual Reactive Cursor
  const cursorDot = document.getElementById('custom-cursor-dot');
  const cursorRing = document.getElementById('custom-cursor-ring');

  if (cursorDot && cursorRing && window.innerWidth > 768) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover elements expand ring cursor
    const hoverables = document.querySelectorAll('a, button, .project-card, .pillar-card, .stat-card-cyber, .contact-card-sleek');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
    });
  }

  // 3. Magnetic Buttons Effect
  const magneticBtns = document.querySelectorAll('.btn-primary, .btn-secondary, .contact-card-sleek');
  if (window.innerWidth > 768) {
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
      });
    });
  }

  // 4. Scroll Reveal Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));

  // 5. One-Click Copy Email & Toast Notification
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'touatiazza4@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard: touatiazza4@gmail.com');
      }).catch(() => {
        showToast('Contact Azza at: touatiazza4@gmail.com');
      });
    });
  }

  // 6. Experience 3D Carousel Logic
  const carouselWrapper = document.querySelector('.experience-3d-wrapper');
  const cards = document.querySelectorAll('.carousel-card');
  const btnPrev = document.getElementById('carousel-prev');
  const btnNext = document.getElementById('carousel-next');

  if (carouselWrapper && cards.length > 0) {
    let currentIndex = 0;

    const updateCarousel = () => {
      cards.forEach((card, index) => {
        card.className = 'carousel-card'; // reset classes
        if (index === currentIndex) {
          card.classList.add('active');
        } else if (index === currentIndex - 1 || (currentIndex === 0 && index === cards.length - 1)) {
          card.classList.add('prev');
        } else if (index === currentIndex + 1 || (currentIndex === cards.length - 1 && index === 0)) {
          card.classList.add('next');
        }
      });
    };

    const goNext = () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    };

    const goPrev = () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    };

    if (btnNext) btnNext.addEventListener('click', goNext);
    if (btnPrev) btnPrev.addEventListener('click', goPrev);

    // Allow clicking on prev/next cards to navigate
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        if (card.classList.contains('prev')) goPrev();
        if (card.classList.contains('next')) goNext();
      });
    });

    // Touch Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    carouselWrapper.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    carouselWrapper.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 40) goNext(); // swipe left
      if (touchEndX > touchStartX + 40) goPrev(); // swipe right
    }, {passive: true});

    // Initialize
    updateCarousel();
  }
}

export function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const icon = '<i class="fa-solid fa-circle-check" style="color: #38bdf8;"></i>';
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}
