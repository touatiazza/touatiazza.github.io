/* ==========================================================================
   AZZA TOUATI PORTFOLIO - SKILLS MATRIX MODULE
   ========================================================================== */

export const skillsData = [
  // PROGRAMMING
  { name: 'Python', category: 'programming', level: 'Advanced', context: 'Primary language for Machine Learning, Deep Learning, Pandas data wrangling & Flask APIs.' },
  { name: 'R', category: 'programming', level: 'Proficient', context: 'Applied in time-series forecasting, econometrics, and statistical data modeling.' },
  { name: 'JavaScript', category: 'programming', level: 'Proficient', context: 'Used for web frontends, interactive UI visualizers, DOM logic & web scripting.' },
  { name: 'HTML5', category: 'programming', level: 'Advanced', context: 'Semantic structural web development, accessible UI layouts & web applications.' },
  { name: 'CSS3', category: 'programming', level: 'Advanced', context: 'Modern layouts (Flexbox/Grid), responsive design systems, dark mode glassmorphism.' },

  // DATA & DATABASES
  { name: 'SQL', category: 'data', level: 'Advanced', context: 'Complex queries, schema optimization, aggregation, joins & database operations.' },
  { name: 'SSMS', category: 'data', level: 'Advanced', context: 'SQL Server Management Studio administration, stored procedures & query tuning.' },
  { name: 'SSIS', category: 'data', level: 'Proficient', context: 'SQL Server Integration Services for building automated ETL data pipelines.' },
  { name: 'Data Warehousing', category: 'data', level: 'Proficient', context: 'Star/Snowflake schema design, dimensional modeling & OLAP structures.' },
  { name: 'ETL Pipelines', category: 'data', level: 'Advanced', context: 'Extracting, transforming & loading enterprise data for BI and predictive analytics.' },

  // DATA VISUALIZATION & BI
  { name: 'Power BI', category: 'bi', level: 'Advanced', context: 'DAX expressions, interactive executive dashboards, data modeling & reporting.' },
  { name: 'Tableau', category: 'bi', level: 'Proficient', context: 'Visual storyboarding, custom chart dashboards & exploratory data analysis.' },
  { name: 'Excel', category: 'bi', level: 'Advanced', context: 'Advanced formulas, pivot tables, VBA macro automation & financial/business modeling.' },

  // AI & MACHINE LEARNING
  { name: 'Machine Learning', category: 'ai', level: 'Advanced', context: 'Supervised/unsupervised algorithms, scikit-learn, classification & regression.' },
  { name: 'Deep Learning', category: 'ai', level: 'Advanced', context: 'Convolutional & Recurrent Neural Networks (CNNs/RNNs) for pattern recognition.' },
  { name: 'TensorFlow', category: 'ai', level: 'Advanced', context: 'Building and training custom deep learning neural network architectures.' },
  { name: 'Keras', category: 'ai', level: 'Advanced', context: 'High-level neural network API development, model prototyping & fine-tuning.' },
  { name: 'Data Preprocessing', category: 'ai', level: 'Advanced', context: 'Feature scaling, missing value imputation, encoding & data augmentation.' },
  { name: 'Predictive Modeling', category: 'ai', level: 'Advanced', context: 'Model validation, hyperparameter tuning, metrics evaluation & deployment.' },

  // BACKEND & APIS
  { name: 'Flask', category: 'backend', level: 'Proficient', context: 'Building lightweight Python web microservices, RESTful backends & ML model APIs.' },
  { name: 'REST APIs', category: 'backend', level: 'Proficient', context: 'Designing JSON API endpoints for seamless frontend-backend integration.' },

  // TOOLS & METHODOLOGIES
  { name: 'Agile Frameworks', category: 'tools', level: 'Proficient', context: 'Iterative development, sprint planning, standups & collaborative delivery.' },
  { name: 'Scrum Methodology', category: 'tools', level: 'Proficient', context: 'Agile sprint execution, user stories, backlog grooming & continuous delivery.' }
];

export function initSkillsMatrix() {
  const container = document.getElementById('skills-grid');
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const searchInput = document.getElementById('skills-search');

  if (!container) return;

  let currentCategory = 'all';
  let searchQuery = '';

  function renderSkills() {
    const filtered = skillsData.filter(skill => {
      const matchCategory = currentCategory === 'all' || skill.category === currentCategory;
      const matchSearch = skill.name.toLowerCase().includes(searchQuery) || 
                          skill.context.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No skills found matching "${searchQuery}"</p>
          <span style="font-size: 0.85rem;">Try selecting another category or clear your search term.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(skill => `
      <div class="skill-card card-fade-in">
        <div>
          <div class="skill-header">
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-level-badge">${skill.level}</span>
          </div>
          <div class="skill-category-tag">
            <i class="fa-solid fa-code" style="font-size: 0.75rem; margin-right: 4px;"></i> 
            ${getCategoryName(skill.category)}
          </div>
        </div>
        <p class="skill-context">${skill.context}</p>
      </div>
    `).join('');
  }

  function getCategoryName(catKey) {
    const map = {
      programming: 'Programming',
      data: 'Data & Databases',
      bi: 'Data Viz & BI',
      ai: 'AI & Machine Learning',
      backend: 'Backend & APIs',
      tools: 'Tools & Methodologies'
    };
    return map[catKey] || 'General';
  }

  // Filter Button Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;
      renderSkills();
    });
  });

  // Search Input Listener
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderSkills();
    });
  }

  renderSkills();
}
