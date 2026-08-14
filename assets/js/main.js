/* ==========================================================================
   AZZA TOUATI PORTFOLIO - MAIN BOOTSTRAP SCRIPT
   ========================================================================== */

import { initHeroCanvas } from './canvas.js';
import { initSkillsMatrix } from './skills.js';
import { initProjectsSection } from './projects.js';
import { initInteractions } from './interactions.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Azza Touati Portfolio Loaded Successfully.');

  // Initialize Canvas Neural Background
  initHeroCanvas();

  // Initialize Skills Matrix & Filters
  initSkillsMatrix();

  // Initialize Centerpiece Projects & Modal Inspector
  initProjectsSection();

  // Initialize UI Interactions (Nav, Scroll, Animations, Contact Form)
  initInteractions();
});
