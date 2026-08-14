/* ==========================================================================
   AZZA TOUATI PORTFOLIO - SKILLS MATRIX MODULE (CV ALIGNED)
   ========================================================================== */

export const skillsData = [
  // TECHNOLOGIES & FRAMEWORKS
  { name: 'Python', category: 'tech', level: 'Advanced', context: 'Primary language for Machine Learning, Deep Learning, Data Analytics, Pandas & Flask backends.' },
  { name: 'Flask', category: 'tech', level: 'Proficient', context: 'Web framework for building REST APIs, ML model backends, and predictive web tools.' },
  { name: 'R', category: 'tech', level: 'Proficient', context: 'Used for time-series analysis, econometrics, macro forecasting & statistical modeling.' },
  { name: 'JavaScript', category: 'tech', level: 'Proficient', context: 'Frontend DOM scripting, interactive data dashboards, and dynamic UI visualizers.' },
  { name: 'HTML5', category: 'tech', level: 'Advanced', context: 'Semantic structural web development, accessible UI layouts & web applications.' },
  { name: 'CSS3', category: 'tech', level: 'Advanced', context: 'Modern layouts (Flexbox/Grid), responsive design systems, dark mode glassmorphism.' },

  // DATA VISUALIZATION & BI
  { name: 'Power BI', category: 'bi', level: 'Advanced', context: '365 Data Science certified. Executive dashboards, DAX queries & business reporting.' },
  { name: 'Tableau', category: 'bi', level: 'Proficient', context: 'Visual storyboarding, exploratory data analysis & interactive chart creation.' },
  { name: 'Excel', category: 'bi', level: 'Advanced', context: 'Advanced formulas, pivot tables, financial analysis & business data modeling.' },

  // DATABASES
  { name: 'SQL', category: 'databases', level: 'Advanced', context: 'Complex queries, aggregations, joins, stored procedures & database management.' },

  // APIS
  { name: 'REST APIs', category: 'apis', level: 'Proficient', context: 'Designing and consuming JSON endpoints for seamless frontend-backend integration.' },

  // ETL & DATA TOOLS
  { name: 'SSMS (SQL Server)', category: 'etl', level: 'Advanced', context: 'SQL Server Management Studio administration, reporting queries & data operations.' },
  { name: 'SSIS (Integration Services)', category: 'etl', level: 'Proficient', context: 'Building automated ETL data pipelines, transformations & data warehouse loading.' },

  // METHODOLOGIES
  { name: 'Agile', category: 'methodologies', level: 'Proficient', context: 'Iterative project management, sprint planning, and adaptive team delivery.' },
  { name: 'Scrum', category: 'methodologies', level: 'Proficient', context: 'Scrum framework execution, user stories, backlog grooming & sprint cycles.' }
];

export function initSkillsMatrix() {
  const container = document.getElementById('skills-grid');
  const filterBtns = document.querySelectorAll('.skills-filter-btn');

  if (!container) return;

  let currentCategory = 'all';

  function renderSkills() {
    const filtered = skillsData.filter(skill => {
      return currentCategory === 'all' || skill.category === currentCategory;
    });

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
      tech: 'Technologies & Frameworks',
      bi: 'Data Viz & BI',
      databases: 'Databases',
      apis: 'APIs',
      etl: 'ETL & Data Tools',
      methodologies: 'Methodologies'
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

  renderSkills();
}
