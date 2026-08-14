/* ==========================================================================
   AZZA TOUATI PORTFOLIO - INTERACTIVE TECHNOLOGY CONSTELLATION MODULE
   ========================================================================== */

export const skillsData = [
  // AI
  { id: 'python', name: 'Python', category: 'DEVELOPMENT', color: '#38bdf8', connections: ['ml', 'dl', 'tf', 'keras', 'flask', 'time-series', 'data-viz', 'scraping'], desc: 'Primary core programming language for AI modeling, ML pipelines, Data Science & web backends.' },
  { id: 'ml', name: 'Machine Learning', category: 'AI', color: '#a855f7', connections: ['python', 'dl', 'predictive', 'data-analysis', 'keras', 'r'], desc: 'Supervised/unsupervised learning, scikit-learn, classification, regression & clustering models.' },
  { id: 'dl', name: 'Deep Learning', category: 'AI', color: '#ec4899', connections: ['python', 'tf', 'keras', 'ml', 'parkinsons-ai'], desc: 'Neural network architectures (CNNs, RNNs) for clinical pattern recognition and predictive healthcare models.' },
  { id: 'tf', name: 'TensorFlow', category: 'AI', color: '#f97316', connections: ['dl', 'keras', 'python', 'ml'], desc: 'End-to-end open-source machine learning framework for training deep neural network tensors.' },
  { id: 'keras', name: 'Keras', category: 'AI', color: '#ef4444', connections: ['tf', 'dl', 'python'], desc: 'High-level neural network API for rapid prototyping and deep learning model construction.' },
  { id: 'data-analysis', name: 'Data Analysis', category: 'DATA', color: '#38bdf8', connections: ['python', 'r', 'excel', 'powerbi', 'sql', 'tableau'], desc: 'Exploratory data analysis (EDA), data cleaning, statistical hypotheses, and actionable insight extraction.' },
  { id: 'predictive', name: 'Predictive Modeling', category: 'AI', color: '#8b5cf6', connections: ['ml', 'time-series', 'python', 'r'], desc: 'Building data-driven algorithms to forecast future trends and clinical probabilities.' },
  { id: 'time-series', name: 'Time Series', category: 'DATA', color: '#06b6d4', connections: ['python', 'r', 'predictive', 'macrocast'], desc: 'Econometric forecasting, CPI inflation, GDP modeling, SARIMAX, Prophet and trend decomposition.' },
  { id: 'data-viz', name: 'Data Visualization', category: 'DATA', color: '#10b981', connections: ['powerbi', 'tableau', 'python', 'r', 'excel'], desc: 'Transforming complex quantitative data into intuitive interactive charts, graphs, and executive dashboards.' },

  // DEVELOPMENT
  { id: 'r', name: 'R', category: 'DEVELOPMENT', color: '#2563eb', connections: ['time-series', 'predictive', 'data-analysis', 'data-viz'], desc: 'Statistical programming language used for econometric modeling, time-series, and quantitative research.' },
  { id: 'html', name: 'HTML5', category: 'DEVELOPMENT', color: '#f97316', connections: ['css', 'js', 'flask'], desc: 'Semantic, accessible structural web markup for modern web apps and interactive dashboards.' },
  { id: 'css', name: 'CSS3', category: 'DEVELOPMENT', color: '#38bdf8', connections: ['html', 'js'], desc: 'Modern responsive styling, CSS Grid, Flexbox, custom design systems, and glassmorphic aesthetics.' },
  { id: 'js', name: 'JavaScript', category: 'DEVELOPMENT', color: '#eab308', connections: ['html', 'css', 'rest-api'], desc: 'Vanilla JS DOM scripting, HTML5 Canvas 2D visualization engines, and client-side interactions.' },
  { id: 'flask', name: 'Flask', category: 'DEVELOPMENT', color: '#64748b', connections: ['python', 'rest-api', 'ml', 'dl'], desc: 'Lightweight Python web framework for exposing Machine Learning models via REST APIs and web interfaces.' },

  // DATA & BI
  { id: 'sql', name: 'SQL', category: 'BI', color: '#6366f1', connections: ['ssms', 'ssis', 'etl', 'dw', 'bigquery', 'powerbi'], desc: 'Complex relational database queries, joins, aggregations, views, and stored procedure optimization.' },
  { id: 'powerbi', name: 'Power BI', category: 'BI', color: '#f59e0b', connections: ['sql', 'excel', 'tableau', 'data-viz', 'dw'], desc: '365 Data Science Certified. Designing interactive executive business intelligence dashboards & DAX analytics.' },
  { id: 'excel', name: 'Excel', category: 'BI', color: '#16a34a', connections: ['powerbi', 'sql', 'data-analysis'], desc: 'Advanced business data preparation, pivot tables, financial formulas, and spreadsheet modeling.' },
  { id: 'tableau', name: 'Tableau', category: 'BI', color: '#ea580c', connections: ['powerbi', 'data-viz', 'data-analysis'], desc: 'Visual analytics platform for creating interactive storyboards and high-impact business visual dashboards.' },

  // DATABASES & DATA ENGINEERING
  { id: 'ssms', name: 'SSMS (SQL Server)', category: 'DATABASES', color: '#dc2626', connections: ['sql', 'ssis', 'etl', 'dw'], desc: 'Microsoft SQL Server Management Studio for enterprise database management, indexing & administration.' },
  { id: 'ssis', name: 'SSIS (Integration Services)', category: 'DATABASES', color: '#4f46e5', connections: ['ssms', 'etl', 'dw', 'sql'], desc: 'Building automated enterprise ETL pipelines, data extraction, transformations & warehouse staging.' },
  { id: 'etl', name: 'ETL Pipelines', category: 'DATA', color: '#0284c7', connections: ['ssis', 'ssms', 'dw', 'sql', 'bigquery'], desc: 'Designing Extract, Transform, Load data pipelines for reliable data integration and warehouse synchronization.' },
  { id: 'dw', name: 'Data Warehousing', category: 'DATABASES', color: '#7c3aed', connections: ['etl', 'ssis', 'ssms', 'sql', 'bigquery'], desc: 'Dimensional Star Schema architecture, fact/dimension table design, and historical data repository management.' },
  { id: 'bigquery', name: 'BigQuery', category: 'DATABASES', color: '#0284c7', connections: ['sql', 'dw', 'etl'], desc: 'Google Cloud serverless data warehouse for high-speed SQL analytics on massive enterprise datasets.' },

  // TOOLS & METHODOLOGIES
  { id: 'rest-api', name: 'REST APIs', category: 'TOOLS', color: '#14b8a6', connections: ['flask', 'js', 'python'], desc: 'Designing and consuming HTTP REST endpoints for seamless communication between web frontends and AI backends.' },
  { id: 'agile', name: 'Agile', category: 'TOOLS', color: '#06b6d4', connections: ['scrum'], desc: 'Iterative project management methodology focusing on collaborative, adaptive, and high-value software delivery.' },
  { id: 'scrum', name: 'Scrum', category: 'TOOLS', color: '#3b82f6', connections: ['agile'], desc: 'Agile framework execution: managing user stories, sprint planning, daily standups, and incremental iterations.' }
];

export function initSkillsMatrix() {
  const container = document.getElementById('constellation-wrapper');
  const canvas = document.getElementById('constellation-canvas');
  const gridContainer = document.getElementById('skills-grid');
  const filterBtns = document.querySelectorAll('.skills-filter-btn');
  const viewToggleBtns = document.querySelectorAll('.constellation-control-btn');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let activeFilter = 'all';
  let activeView = 'constellation'; // 'constellation' or 'grid'
  let hoveredNode = null;
  let animFrameId = null;

  // Category Color Map
  const categoryColors = {
    'AI': '#ec4899',
    'DATA': '#06b6d4',
    'DEVELOPMENT': '#38bdf8',
    'BI': '#f59e0b',
    'DATABASES': '#8b5cf6',
    'TOOLS': '#14b8a6'
  };

  // Node class with physics positions
  class ConstellationNode {
    constructor(data, index, total) {
      this.id = data.id;
      this.name = data.name;
      this.category = data.category;
      this.color = data.color || categoryColors[data.category] || '#38bdf8';
      this.connections = data.connections || [];
      this.desc = data.desc;

      // Position along organic clusters
      const angle = (index / total) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const radiusOffset = 120 + Math.random() * 140;

      this.targetX = width / 2 + Math.cos(angle) * radiusOffset;
      this.targetY = height / 2 + Math.sin(angle) * radiusOffset;

      this.x = this.targetX;
      this.y = this.targetY;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = 16;
      this.baseRadius = 16;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }

    update() {
      // Floating motion
      this.x += this.vx;
      this.y += this.vy;

      // Bounds bounce with smooth damping
      const padding = 50;
      if (this.x < padding || this.x > width - padding) this.vx *= -1;
      if (this.y < padding || this.y > height - padding) this.vy *= -1;

      // Gentle force pulling toward initial cluster area
      const dx = this.targetX - this.x;
      const dy = this.targetY - this.y;
      this.x += dx * 0.005;
      this.y += dy * 0.005;

      // Smooth radius transition on hover
      const isHovered = hoveredNode && hoveredNode.id === this.id;
      const isConnected = hoveredNode && hoveredNode.connections.includes(this.id);

      let targetR = this.baseRadius;
      if (isHovered) targetR = 24;
      else if (isConnected) targetR = 20;

      this.radius += (targetR - this.radius) * 0.15;
    }

    draw() {
      const isFiltered = activeFilter !== 'all' && this.category.toLowerCase() !== activeFilter.toLowerCase();
      const isHovered = hoveredNode && hoveredNode.id === this.id;
      const isConnected = hoveredNode && hoveredNode.connections.includes(this.id);
      const isDimmed = hoveredNode && !isHovered && !isConnected;

      ctx.save();
      ctx.globalAlpha = isFiltered ? 0.15 : (isDimmed ? 0.25 : 1.0);

      // Outer glowing pulse aura
      if (isHovered || isConnected) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 10, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = isHovered ? 0.35 : 0.18;
        ctx.fill();
      }

      // Main Node Circle Body
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = isHovered ? '#ffffff' : 'rgba(11, 14, 22, 0.9)';
      ctx.strokeStyle = this.color;
      ctx.lineWidth = isHovered ? 3.5 : (isConnected ? 2.5 : 2);
      ctx.fill();
      ctx.stroke();

      // Core glow dot
      ctx.beginPath();
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();

      // Node Label Text
      ctx.font = `${isHovered ? '700' : '600'} ${isHovered ? '13px' : '11px'} "JetBrains Mono", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = isHovered ? '#ffffff' : (isDimmed ? '#64748b' : '#f8fafc');
      ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
      ctx.shadowBlur = 6;
      ctx.fillText(this.name, this.x, this.y + this.radius + 14);

      ctx.restore();
    }
  }

  // Initialize node instances
  let nodes = [];

  function resizeCanvas() {
    if (!container) return;
    width = canvas.width = container.clientWidth;
    height = canvas.height = container.clientHeight;

    nodes = skillsData.map((data, idx) => new ConstellationNode(data, idx, skillsData.length));
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Mouse interactivity on Canvas
  const tooltip = document.getElementById('constellation-tooltip');

  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let found = null;
    for (let node of nodes) {
      const dx = mx - node.x;
      const dy = my - node.y;
      if (Math.sqrt(dx * dx + dy * dy) < node.radius + 10) {
        found = node;
        break;
      }
    }

    hoveredNode = found;

    if (found && tooltip) {
      tooltip.innerHTML = `
        <div style="font-family: var(--font-mono); font-weight: 700; color: ${found.color}; font-size: 0.9rem; margin-bottom: 0.25rem;">${found.name}</div>
        <div style="font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.4rem;">[ Category: ${found.category} ]</div>
        <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">${found.desc}</div>
      `;
      tooltip.style.left = `${found.x}px`;
      tooltip.style.top = `${found.y}px`;
      tooltip.classList.add('active');
    } else if (tooltip) {
      tooltip.classList.remove('active');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hoveredNode = null;
    if (tooltip) tooltip.classList.remove('active');
  });

  // Main Canvas Render Loop
  let time = 0;
  function renderConstellation() {
    ctx.clearRect(0, 0, width, height);
    time += 0.02;

    // Draw background subtle grid lines
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
    ctx.lineWidth = 1;
    const gridSize = 40;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    ctx.restore();

    // Draw Inter-node Connection Lines & Signal Energy Pulses
    const drawnPairs = new Set();

    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];

      for (let j = 0; j < nodes.length; j++) {
        if (i === j) continue;
        const nodeB = nodes[j];

        // Check if explicit connection exists or close distance
        const isConnected = nodeA.connections.includes(nodeB.id);
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (isConnected || dist < 120) {
          const pairKey = [nodeA.id, nodeB.id].sort().join('--');
          if (drawnPairs.has(pairKey)) continue;
          drawnPairs.add(pairKey);

          const isHoveredLine = hoveredNode && (
            (hoveredNode.id === nodeA.id && nodeA.connections.includes(nodeB.id)) ||
            (hoveredNode.id === nodeB.id && nodeB.connections.includes(nodeA.id))
          );

          const isFilteredLine = activeFilter !== 'all' &&
            (nodeA.category.toLowerCase() !== activeFilter.toLowerCase() && nodeB.category.toLowerCase() !== activeFilter.toLowerCase());

          ctx.save();
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);

          if (isHoveredLine) {
            ctx.strokeStyle = nodeA.color;
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.85;

            // Draw energy pulse travelling along connection line
            const pulsePos = (Math.sin(time * 3) + 1) / 2;
            const px = nodeA.x + (nodeB.x - nodeA.x) * pulsePos;
            const py = nodeA.y + (nodeB.y - nodeA.y) * pulsePos;

            ctx.stroke();

            ctx.beginPath();
            ctx.arc(px, py, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = nodeA.color;
            ctx.shadowBlur = 10;
            ctx.fill();
          } else {
            ctx.strokeStyle = isConnected ? nodeA.color : 'rgba(56, 189, 248, 0.2)';
            ctx.lineWidth = isConnected ? 1.2 : 0.6;
            ctx.globalAlpha = isFilteredLine ? 0.05 : (isConnected ? 0.35 : 0.15);
            ctx.stroke();
          }

          ctx.restore();
        }
      }
    }

    // Update and Draw Nodes
    for (let node of nodes) {
      node.update();
      node.draw();
    }

    animFrameId = requestAnimationFrame(renderConstellation);
  }

  renderConstellation();

  // Grid Fallback Renderer
  function renderGridSkills() {
    if (!gridContainer) return;

    const filtered = skillsData.filter(skill => {
      return activeFilter === 'all' || skill.category.toLowerCase() === activeFilter.toLowerCase();
    });

    gridContainer.innerHTML = filtered.map(skill => `
      <div class="skill-card card-fade-in">
        <div>
          <div class="skill-header">
            <h3 class="skill-name">${skill.name}</h3>
            <span class="skill-level-badge" style="background: ${categoryColors[skill.category]}18; color: ${categoryColors[skill.category]}; border-color: ${categoryColors[skill.category]}40;">
              ${skill.category}
            </span>
          </div>
          <div class="skill-category-tag">
            <i class="fa-solid fa-code" style="font-size: 0.75rem; margin-right: 4px; color: ${categoryColors[skill.category]};"></i> 
            ${skill.category} Stack
          </div>
        </div>
        <p class="skill-context">${skill.desc}</p>
      </div>
    `).join('');
  }

  // Filter Button Event Listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderGridSkills();
    });
  });

  // View Mode Control Toggle (Constellation vs Grid)
  viewToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeView = btn.dataset.mode;

      if (activeView === 'grid') {
        container.style.display = 'none';
        gridContainer.style.display = 'grid';
        renderGridSkills();
      } else {
        container.style.display = 'block';
        gridContainer.style.display = 'grid';
      }
    });
  });

  renderGridSkills();
}
