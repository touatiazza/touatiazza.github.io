/* ==========================================================================
   AZZA TOUATI PORTFOLIO - UI INTERACTIONS & SCROLL UTILITIES
   ========================================================================== */

export function initInteractions() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const cursorGlow = document.getElementById('cursor-glow');

  // 1. Navbar Sticky & Scrollspy
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scrollspy
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

  // 2. Scroll Reveal Animations via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal-init').forEach(el => observer.observe(el));

  // Re-observe dynamically added reveal items
  window.reobserveReveal = function() {
    document.querySelectorAll('.reveal-init:not(.revealed)').forEach(el => observer.observe(el));
  };

  // 3. Ambient Cursor Glow Follower
  if (cursorGlow && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    });
  }

  // 4. Copy Email & Toast Notification
  const copyBtn = document.getElementById('copy-email-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'touatiazza4@gmail.com'; // Profile email from CV
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard: touatiazza4@gmail.com');
      }).catch(() => {
        showToast('Contact Azza at: touatiazza4@gmail.com');
      });
    });
  }

  // 5. Contact Form Validator
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill in all fields before sending.', 'warning');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        showToast('Thank you! Your message has been sent successfully.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
}

export function showToast(message, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;

  const icon = type === 'warning' ? '<i class="fa-solid fa-triangle-exclamation" style="color: #f43f5e;"></i>' : '<i class="fa-solid fa-circle-check" style="color: #38bdf8;"></i>';
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 3500);
}
