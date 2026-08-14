/* ==========================================================================
   AZZA TOUATI PORTFOLIO - CENTERPIECE PROJECTS & MODAL INSPECTOR
   ========================================================================== */

export const projectsData = [
  {
    id: 'parkinsons-ai',
    title: "Predictive Analytics for Healthcare Decision Support - Parkinson's Disease",
    category: 'ai',
    categoryLabel: 'AI / ML & Healthcare',
    image: 'assets/images/project_parkinsons.svg',
    shortDesc: "Evaluated machine learning and deep learning models for predictive classification using structured clinical datasets and built an interactive web dashboard.",
    technologies: ['Python', 'TensorFlow', 'Keras', 'Flask', 'Feature Engineering', 'Clinical Datasets'],
    problem: "Healthcare decision support for Parkinson's disease requires reliable predictive classification using complex, structured clinical data and motor drawing patterns to assist early clinical diagnosis.",
    solution: "Developed and evaluated multiple Machine Learning and Deep Learning architectures. Applied data preprocessing, feature engineering, and hyperparameter optimization. Designed an interactive web-based dashboard for predictions and diagnostic decision support.",
    results: "Improved model predictive reliability and classification accuracy to 94.2%; latency < 150ms; deployed an interactive web app supporting data-driven clinical decision interpretation.",
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    simType: 'parkinsons'
  },
  {
    id: 'retail-etl',
    title: 'Retail Sales ETL Pipeline & Data Warehouse',
    category: 'engineering',
    categoryLabel: 'Data Engineering',
    image: 'assets/images/project_etl.svg',
    shortDesc: "Designed an ETL pipeline in SSIS & SSMS for transforming and preparing enterprise retail sales data for BI analytics.",
    technologies: ['SQL Server', 'SSMS', 'SSIS', 'ETL', 'Data Warehousing', 'Power BI', 'SQL'],
    problem: "Raw enterprise retail transaction logs suffered from unoptimized schemas, inconsistent formatting, and high query latency across reporting databases.",
    solution: "Architected a dimensional Star Schema (FactSales, DimProduct, DimCustomer, DimStore) in SSMS. Built automated SQL Server Integration Services (SSIS) packages for data extraction, transformation, cleaning, and DW loading.",
    results: "Processed 500,000+ transaction records seamlessly; reduced reporting query load times by 75%; enabled automated daily data synchronization feeding executive Power BI dashboards.",
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    simType: 'etl'
  },
  {
    id: 'macrocast',
    title: 'MacroCast — Inflation, GDP Modeling and Forecasting Using Time Series Analysis',
    category: 'analytics',
    categoryLabel: 'Business Analytics',
    image: 'assets/images/project_macrocast.svg',
    shortDesc: "Time-series modeling and econometric forecasting project predicting macroeconomic indicators including CPI inflation and GDP growth.",
    technologies: ['Python', 'R', 'Time Series Analysis', 'Econometrics', 'SARIMAX', 'Prophet', 'Pandas'],
    problem: "Macroeconomic volatility makes quarterly inflation and GDP growth forecasting challenging for business planning, economic strategy, and strategic decision support.",
    solution: "Performed rigorous econometrics time-series analysis, stationarity testing (ADF test), seasonal decomposition, and trained SARIMAX and Prophet forecasting models on macroeconomic indicator series.",
    results: "Achieved Mean Absolute Percentage Error (MAPE) < 3.8%; generated reliable 12-month forward forecasts with 95% confidence intervals to guide business decision-making.",
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    simType: 'macrocast'
  },
  {
    id: 'job-market-ai',
    title: 'AI & Labor Market Automation Impact Analysis',
    category: 'science',
    categoryLabel: 'Data Science',
    image: 'assets/images/project_jobmarket.svg',
    shortDesc: "Analyzed the impact of AI-driven automation on the labor market using job-market data, web scraping and data analysis.",
    technologies: ['Python', 'Web Scraping', 'Pandas', 'Machine Learning', 'NLP', 'Data Visualization'],
    problem: "Quantitative insights into how rapid AI advances impact labor demand, skill evolution, and job automation risk were needed across different market sectors.",
    solution: "Constructed custom Python web scrapers to harvest job postings; extracted key skill clusters using Natural Language Processing (TF-IDF); built k-means clustering models to analyze labor automation exposure indices.",
    results: "Analyzed 15,000+ job postings across 8 industry sectors; identified top high-growth AI skill sets vs automation-exposed task clusters; delivered strategic data story dashboards.",
    githubUrl: 'https://github.com/',
    liveUrl: '#',
    simType: 'jobmarket'
  }
];

export function initProjectsSection() {
  const gridContainer = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.projects-filter-btn');
  const modalOverlay = document.getElementById('project-modal');

  if (!gridContainer) return;

  let activeCategory = 'all';

  function renderProjects() {
    const filtered = projectsData.filter(p => activeCategory === 'all' || p.category === activeCategory);

    gridContainer.innerHTML = filtered.map(project => `
      <div class="project-card card-fade-in" data-id="${project.id}">
        <div class="project-image-wrap">
          <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
          <span class="project-badge-top">${project.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.shortDesc}</p>
          <div class="project-tags">
            ${project.technologies.slice(0, 5).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            ${project.technologies.length > 5 ? `<span class="tech-tag">+${project.technologies.length - 5} more</span>` : ''}
          </div>
          <div class="project-footer">
            <span class="project-expand-hint">
              <i class="fa-solid fa-expand" style="font-size: 0.85rem;"></i> Inspect Project Details
            </span>
            <div class="project-actions" onclick="event.stopPropagation();">
              <a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" aria-label="GitHub Repository">
                <i class="fa-brands fa-github"></i> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click event for modal opening
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        openProjectModal(id);
      });
    });
  }

  // Filter click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      renderProjects();
    });
  });

  // Modal handlers
  function openProjectModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modalOverlay) return;

    const modalBody = modalOverlay.querySelector('#modal-content');
    modalBody.innerHTML = `
      <div class="modal-header-hero">
        <img src="${project.image}" alt="${project.title}" class="modal-header-img">
        <div class="modal-header-gradient"></div>
      </div>
      <div class="modal-body">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.5rem;">
          <span class="section-badge">${project.categoryLabel}</span>
          <div style="display: flex; gap: 0.75rem;">
            <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary btn-sm"><i class="fa-brands fa-github"></i> View GitHub Repo</a>
          </div>
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <div class="project-tags" style="margin-bottom: 2rem;">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="modal-sections-grid">
          <div class="modal-info-box">
            <div class="modal-info-label"><i class="fa-solid fa-triangle-exclamation"></i> Problem Statement</div>
            <div class="modal-info-val">${project.problem}</div>
          </div>
          <div class="modal-info-box">
            <div class="modal-info-label"><i class="fa-solid fa-lightbulb"></i> Solution Approach</div>
            <div class="modal-info-val">${project.solution}</div>
          </div>
          <div class="modal-info-box">
            <div class="modal-info-label"><i class="fa-solid fa-chart-line"></i> Impact & Results</div>
            <div class="modal-info-val">${project.results}</div>
          </div>
        </div>

        <!-- Interactive Live Simulation Widget -->
        <div class="modal-sim-container">
          <div class="modal-sim-title">
            <i class="fa-solid fa-flask-vial"></i> Interactive Model & Data Pipeline Simulator
          </div>
          <div id="sim-widget-content">
            ${renderSimWidget(project.simType)}
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    initSimWidgetEvents(project.simType);
  }

  // Close modal event
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  renderProjects();
}

/* --------------------------------------------------------------------------
   INTERACTIVE SIMULATOR RENDERERS & HANDLERS INSIDE MODAL
   -------------------------------------------------------------------------- */
function renderSimWidget(simType) {
  if (simType === 'parkinsons') {
    return `
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Select a clinical drawing pattern sample to test the predictive classification model:</p>
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm sim-park-btn" data-sample="spiral-healthy"><i class="fa-solid fa-circle-check" style="color: #4ade80;"></i> Sample A (Healthy Control)</button>
        <button class="btn btn-secondary btn-sm sim-park-btn" data-sample="spiral-parkinsons"><i class="fa-solid fa-triangle-exclamation" style="color: #f43f5e;"></i> Sample B (Parkinson's Pattern)</button>
        <button class="btn btn-secondary btn-sm sim-park-btn" data-sample="wave-parkinsons"><i class="fa-solid fa-wave-square" style="color: #38bdf8;"></i> Sample C (Wave Tremor Pattern)</button>
      </div>
      <div class="modal-sim-output" id="parkinsons-output">Click a test sample above to run Machine/Deep Learning inference...</div>
    `;
  } else if (simType === 'etl') {
    return `
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Click 'Run SSIS Pipeline' to execute raw extraction, data cleaning, and star schema load:</p>
      <div style="margin-bottom: 1rem;">
        <button class="btn btn-primary btn-sm" id="run-etl-btn"><i class="fa-solid fa-play"></i> Run SSIS Pipeline</button>
      </div>
      <div class="modal-sim-output" id="etl-output">Status: Ready. Awaiting trigger...</div>
    `;
  } else if (simType === 'macrocast') {
    return `
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Select Forecast Horizon (Months):</p>
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
        <input type="range" id="macro-slider" min="3" max="18" value="6" step="3" style="width: 200px;">
        <span id="macro-slider-val" style="font-family: var(--font-mono); color: var(--accent-cyan); font-weight: 700;">6 Months</span>
      </div>
      <div class="modal-sim-output" id="macro-output">Forecast horizon updated: 6 Months projected trends...</div>
    `;
  } else if (simType === 'jobmarket') {
    return `
      <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">Select Job Role to analyze automated web scrapings & skill exposure:</p>
      <div style="display: flex; gap: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm job-btn" data-role="data-scientist">Data Scientist</button>
        <button class="btn btn-secondary btn-sm job-btn" data-role="bi-analyst">BI Analyst</button>
        <button class="btn btn-secondary btn-sm job-btn" data-role="ml-engineer">ML Engineer</button>
      </div>
      <div class="modal-sim-output" id="job-output">Select a job role to view top skill clusters and AI impact score...</div>
    `;
  }
  return '<p style="color: var(--text-muted);">Interactive simulator ready.</p>';
}

function initSimWidgetEvents(simType) {
  if (simType === 'parkinsons') {
    const btns = document.querySelectorAll('.sim-park-btn');
    const out = document.getElementById('parkinsons-output');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.sample;
        out.innerHTML = `[PREDICTIVE INFERENCE RUNNING...] Preprocessing structured clinical dataset tensor...`;
        setTimeout(() => {
          if (type === 'spiral-healthy') {
            out.innerHTML = `[MODEL EVALUATION RESULT]
Classification: HEALTHY CONTROL (Negative)
Confidence: 97.4%
Feature Importance: Normal motor tremor index (0.04)
Decision Support: Low risk. Recommendation: Standard routine follow-up.`;
          } else if (type === 'spiral-parkinsons') {
            out.innerHTML = `[MODEL EVALUATION RESULT]
Classification: PARKINSON'S PATTERN (Positive)
Confidence: 95.8%
Feature Importance: Elevated micro-fluctuation index (0.78), Tremor Peak: 5.2 Hz
Decision Support: Diagnostic indicators detected. Recommendation: Specialist clinical review.`;
          } else {
            out.innerHTML = `[MODEL EVALUATION RESULT]
Classification: PARKINSON'S PATTERN (Positive)
Confidence: 92.1%
Feature Importance: High wave amplitude variance (0.69)
Decision Support: Motor asymmetry detected. Recommendation: Specialist clinical review.`;
          }
        }, 350);
      });
    });
  } else if (simType === 'etl') {
    const btn = document.getElementById('run-etl-btn');
    const out = document.getElementById('etl-output');
    if (btn) {
      btn.addEventListener('click', () => {
        out.innerHTML = `[STAGE 1/3] Extracting raw transaction logs in SSMS (500,000 records)...`;
        setTimeout(() => {
          out.innerHTML += `\n[STAGE 2/3] SSIS Data Cleansing: Missing value treatment, Schema normalization, Data transformation...`;
          setTimeout(() => {
            out.innerHTML += `\n[STAGE 3/3] Loading FactSales & Dim Tables into SQL Server Data Warehouse...`;
            out.innerHTML += `\nSUCCESS: 500,000 records processed in 1.42s. Star Schema synced for Power BI!`;
          }, 400);
        }, 400);
      });
    }
  } else if (simType === 'macrocast') {
    const slider = document.getElementById('macro-slider');
    const label = document.getElementById('macro-slider-val');
    const out = document.getElementById('macro-output');
    if (slider) {
      const update = () => {
        const val = slider.value;
        label.innerText = `${val} Months`;
        out.innerHTML = `[SARIMAX & PROPHET FORECAST - ${val} MONTH HORIZON]
Projected GDP Growth: +2.4% (95% CI: [1.8%, 3.1%])
Projected CPI Inflation: 3.1% (95% CI: [2.6%, 3.7%])
Seasonal Econometric Decomposition: Quarterly demand cycle peak anticipated.
Model Evaluation Metrics: MAPE = 3.65%, RMSE = 0.42.`;
      };
      slider.addEventListener('input', update);
      update();
    }
  } else if (simType === 'jobmarket') {
    const btns = document.querySelectorAll('.job-btn');
    const out = document.getElementById('job-output');
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const role = btn.dataset.role;
        out.innerHTML = `Running Web Scraper NLP Parser for ${role}...`;
        setTimeout(() => {
          if (role === 'data-scientist') {
            out.innerHTML = `[ANALYSIS RESULT - DATA SCIENTIST]
Scraped Job Sample: 3,420 postings
Top Demanded Skills: Python (89%), SQL (82%), Machine Learning (78%), PyTorch/TensorFlow (64%), Business Acumen (58%)
AI Automation Risk Score: LOW (22%) — High focus on strategic problem formulation & custom AI modeling.`;
          } else if (role === 'bi-analyst') {
            out.innerHTML = `[ANALYSIS RESULT - BI ANALYST]
Scraped Job Sample: 2,890 postings
Top Demanded Skills: SQL (94%), Power BI / Tableau (88%), Data Warehousing (72%), Excel (69%), Data Modeling (65%)
AI Automation Risk Score: MODERATE (34%) — Automated reporting rising; focus on strategic business storytelling.`;
          } else {
            out.innerHTML = `[ANALYSIS RESULT - ML ENGINEER]
Scraped Job Sample: 2,150 postings
Top Demanded Skills: Python (96%), MLOps (81%), Docker/Kubernetes (74%), REST APIs/Flask (71%), Deep Learning (69%)
AI Automation Risk Score: VERY LOW (14%) — High demand for deploying and maintaining AI infrastructure.`;
          }
        }, 300);
      });
    });
  }
}
