/**
 * Work Gallery - Modular, data-driven gallery component
 * 
 * Features:
 * - Three distinct view layouts: Timeline, Category, Alphabetical
 * - Flip card display with 3D animation
 * - Smooth transitions between views
 * - Data-driven architecture for easy updates
 * 
 * To add a new project, simply add a new object to the galleryData array.
 */

// ============================================
// GALLERY DATA - Add new projects here
// ============================================
const galleryData = [
  {
    id: 1,
    title: "Audio-Reactive Game Environment",
    category: "Game Audio",
    year: 2025,
    date: "2025-11-15",
    thumbnail: "../assets/images/work-thumbs/project01.jpg",
    description: "An immersive game environment where visual elements respond dynamically to in-game audio and player actions. Features real-time FFT analysis and procedural generation.",
    techStack: ["Unity", "C#", "FMOD", "Shader Graph"],
    links: [
      { label: "View Project", url: "#", icon: "external" },
      { label: "GitHub", url: "#", icon: "github" }
    ]
  },
  {
    id: 2,
    title: "Procedural Sound Design System",
    category: "Sound Design",
    year: 2025,
    date: "2025-08-22",
    thumbnail: "../assets/images/work-thumbs/project02.jpg",
    description: "A modular procedural audio system that generates realistic environmental soundscapes based on game world parameters like weather, time of day, and player location.",
    techStack: ["Wwise", "Unreal Engine", "C++"],
    links: [
      { label: "Demo", url: "#", icon: "play" },
      { label: "Documentation", url: "#", icon: "external" }
    ]
  },
  {
    id: 3,
    title: "Interactive Music Installation",
    category: "Installation",
    year: 2025,
    date: "2025-05-10",
    thumbnail: "../assets/images/work-thumbs/project03.jpg",
    description: "An interactive installation piece that generates ambient music based on audience movement and presence, creating a unique collaborative sonic environment.",
    techStack: ["Max/MSP", "Arduino", "Python", "OpenCV"],
    links: [
      { label: "View Project", url: "#", icon: "external" }
    ]
  },
  {
    id: 4,
    title: "Virtual Reality Soundscape",
    category: "Game Audio",
    year: 2024,
    date: "2024-12-05",
    thumbnail: "../assets/images/work-thumbs/project04.jpg",
    description: "Spatial audio implementation for a VR horror experience. Utilized binaural rendering and dynamic reverb zones for maximum immersion.",
    techStack: ["Unity", "Oculus SDK", "Resonance Audio"],
    links: [
      { label: "Case Study", url: "#", icon: "external" },
      { label: "GitHub", url: "#", icon: "github" }
    ]
  },
  {
    id: 5,
    title: "AI Music Composition Tool",
    category: "Machine Learning",
    year: 2024,
    date: "2024-09-18",
    thumbnail: "../assets/images/work-thumbs/project05.jpg",
    description: "A machine learning-powered tool that assists composers by generating musical ideas based on mood, genre, and structural inputs using transformer models.",
    techStack: ["Python", "TensorFlow", "Flask", "React"],
    links: [
      { label: "Try Demo", url: "#", icon: "play" },
      { label: "GitHub", url: "#", icon: "github" }
    ]
  },
  {
    id: 6,
    title: "Custom Audio Plugin Suite",
    category: "Audio Tools",
    year: 2024,
    date: "2024-06-30",
    thumbnail: "../assets/images/work-thumbs/project06.jpg",
    description: "A collection of custom VST/AU audio plugins including a granular synthesizer, spectral processor, and adaptive dynamics processor built with JUCE.",
    techStack: ["JUCE", "C++", "DSP"],
    links: [
      { label: "Download", url: "#", icon: "external" },
      { label: "Source Code", url: "#", icon: "github" }
    ]
  }
];

// ============================================
// ICON LIBRARY
// ============================================
const iconLibrary = {
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
  category: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
};

// ============================================
// ALPHABETICAL RANGES
// ============================================
const alphaRanges = [
  { label: 'A–D', letters: ['A', 'B', 'C', 'D'], id: 'a-d' },
  { label: 'E–H', letters: ['E', 'F', 'G', 'H'], id: 'e-h' },
  { label: 'I–L', letters: ['I', 'J', 'K', 'L'], id: 'i-l' },
  { label: 'M–P', letters: ['M', 'N', 'O', 'P'], id: 'm-p' },
  { label: 'Q–T', letters: ['Q', 'R', 'S', 'T'], id: 'q-t' },
  { label: 'U–Z', letters: ['U', 'V', 'W', 'X', 'Y', 'Z'], id: 'u-z' }
];

// ============================================
// GALLERY CLASS
// ============================================
class WorkGallery {
  constructor(containerSelector, data) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) return;

    this.data = [...data];
    this.currentSort = 'category';
    this.sortedData = [...this.data];

    this.init();
  }

  init() {
    this.sortData('category');
    this.render();
    this.bindEvents();
  }

  // Get icon SVG by type
  getIcon(type) {
    return iconLibrary[type] || iconLibrary.external;
  }

  // Sort data based on criteria
  sortData(criteria) {
    switch (criteria) {
      case 'date':
        this.sortedData = [...this.data].sort((a, b) => 
          new Date(b.date) - new Date(a.date)
        );
        break;
      case 'category':
        this.sortedData = [...this.data].sort((a, b) => 
          a.category.localeCompare(b.category)
        );
        break;
      case 'alpha':
        this.sortedData = [...this.data].sort((a, b) => 
          a.title.localeCompare(b.title)
        );
        break;
      default:
        this.sortedData = [...this.data];
    }
    this.currentSort = criteria;
  }

  // Format date for display
  formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  // Generate card HTML (shared across all views)
  generateCardHTML(item, index) {
    const techTags = item.techStack
      .map(tech => `<span class="tech-tag">${tech}</span>`)
      .join('');

    const links = item.links
      .map(link => `
        <a href="${link.url}" class="card-link" target="_blank" rel="noopener noreferrer">
          ${this.getIcon(link.icon)}
          <span>${link.label}</span>
        </a>
      `)
      .join('');

    return `
      <article class="gallery-card" data-id="${item.id}" style="--card-index: ${index}">
        <div class="gallery-card-inner">
          <!-- Front Side -->
          <div class="gallery-card-front">
            <div class="card-thumbnail" style="background-image: url('${item.thumbnail}')"></div>
            <div class="card-front-content">
              <h3>${item.title}</h3>
              <span class="card-category-badge">${item.category}</span>
            </div>
          </div>
          <!-- Back Side -->
          <div class="gallery-card-back">
            <h3>${item.title}</h3>
            <p class="card-back-description">${item.description}</p>
            <div class="card-back-meta">
              <div class="meta-item">
                ${this.getIcon('folder')}
                <span>${item.category}</span>
              </div>
              <div class="meta-item">
                ${this.getIcon('calendar')}
                <span>${item.year}</span>
              </div>
            </div>
            <div class="card-back-tech">
              ${techTags}
            </div>
            <div class="card-back-links">
              ${links}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  // ============================================
  // TIMELINE VIEW RENDERER
  // ============================================
  renderTimelineView() {
    // Group items by year
    const byYear = {};
    this.sortedData.forEach(item => {
      if (!byYear[item.year]) byYear[item.year] = [];
      byYear[item.year].push(item);
    });

    // Sort years descending
    const years = Object.keys(byYear).sort((a, b) => b - a);
    
    let html = '';
    let itemIndex = 0;

    years.forEach((year, yearIdx) => {
      // Sort items within year by date descending
      const yearItems = byYear[year].sort((a, b) => new Date(b.date) - new Date(a.date));
      
      html += `
        <div class="timeline-year-section" style="--section-index: ${yearIdx}">
          <div class="timeline-year-marker" style="animation-delay: ${yearIdx * 0.15}s">
            <span class="year-badge">${year}</span>
          </div>
          <div class="timeline-cards-grid">
            ${yearItems.map((item, idx) => {
              const cardHTML = `
                <div class="timeline-card-wrapper" style="--card-index: ${itemIndex}">
                  <span class="timeline-date">${this.formatDate(item.date)}</span>
                  ${this.generateCardHTML(item, itemIndex)}
                </div>
              `;
              itemIndex++;
              return cardHTML;
            }).join('')}
          </div>
        </div>
      `;
    });

    this.container.className = 'gallery-grid view-timeline';
    this.container.innerHTML = html;
  }

  // ============================================
  // CATEGORY VIEW RENDERER
  // ============================================
  renderCategoryView() {
    // Group items by category
    const byCategory = {};
    this.sortedData.forEach(item => {
      if (!byCategory[item.category]) byCategory[item.category] = [];
      byCategory[item.category].push(item);
    });

    // Sort categories alphabetically
    const categories = Object.keys(byCategory).sort();
    
    let html = '';
    let globalIndex = 0;

    categories.forEach((category, sectionIdx) => {
      const items = byCategory[category];
      
      html += `
        <div class="category-section" style="--section-index: ${sectionIdx}">
          <div class="category-header">
            <div class="category-icon">
              ${this.getIcon('category')}
            </div>
            <h3 class="category-title">${category}</h3>
            <span class="category-count">${items.length} project${items.length !== 1 ? 's' : ''}</span>
          </div>
          <div class="category-cards">
            ${items.map((item, idx) => {
              const cardHTML = this.generateCardHTML(item, globalIndex);
              globalIndex++;
              return cardHTML;
            }).join('')}
          </div>
        </div>
      `;
    });

    this.container.className = 'gallery-grid view-category';
    this.container.innerHTML = html;
  }

  // ============================================
  // ALPHABETICAL VIEW RENDERER
  // ============================================
  renderAlphaView() {
    // Group items by letter range
    const byRange = {};
    alphaRanges.forEach(range => {
      byRange[range.id] = {
        label: range.label,
        letters: range.letters,
        items: []
      };
    });

    this.sortedData.forEach(item => {
      const firstLetter = item.title.charAt(0).toUpperCase();
      for (const range of alphaRanges) {
        if (range.letters.includes(firstLetter)) {
          byRange[range.id].items.push(item);
          break;
        }
      }
    });

    // Build jump navigation
    let jumpNavHTML = '<nav class="alpha-jump-nav" aria-label="Alphabetical navigation">';
    alphaRanges.forEach(range => {
      const hasItems = byRange[range.id].items.length > 0;
      jumpNavHTML += `
        <a href="#alpha-${range.id}" 
           class="alpha-jump-link${hasItems ? '' : ' disabled'}"
           ${hasItems ? '' : 'aria-disabled="true"'}>
          ${range.label}
        </a>
      `;
    });
    jumpNavHTML += '</nav>';

    // Build sections
    let sectionsHTML = '';
    let globalIndex = 0;
    let sectionIdx = 0;

    alphaRanges.forEach(range => {
      const rangeData = byRange[range.id];
      if (rangeData.items.length === 0) return;

      sectionsHTML += `
        <div class="alpha-section" id="alpha-${range.id}" style="--section-index: ${sectionIdx}">
          <div class="alpha-header">
            <span class="alpha-letter">${range.label}</span>
            <div class="alpha-divider"></div>
          </div>
          <div class="alpha-cards">
            ${rangeData.items.map((item, idx) => {
              const cardHTML = this.generateCardHTML(item, globalIndex);
              globalIndex++;
              return cardHTML;
            }).join('')}
          </div>
        </div>
      `;
      sectionIdx++;
    });

    this.container.className = 'gallery-grid view-alpha';
    this.container.innerHTML = jumpNavHTML + sectionsHTML;

    // Bind smooth scroll for jump navigation
    this.bindAlphaJumpNav();
  }

  // Bind smooth scroll for alphabetical jump navigation
  bindAlphaJumpNav() {
    const links = this.container.querySelectorAll('.alpha-jump-link:not(.disabled)');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ============================================
  // MAIN RENDER METHOD
  // ============================================
  render() {
    if (this.sortedData.length === 0) {
      this.container.className = 'gallery-grid view-grid';
      this.container.innerHTML = `
        <div class="gallery-empty">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
          </svg>
          <h3>No projects found</h3>
          <p>Check back later for new work!</p>
        </div>
      `;
      return;
    }

    // Render based on current sort/view mode
    switch (this.currentSort) {
      case 'date':
        this.renderTimelineView();
        break;
      case 'category':
        this.renderCategoryView();
        break;
      case 'alpha':
        this.renderAlphaView();
        break;
      default:
        this.renderTimelineView();
    }
  }

  // Handle sort button clicks with animation
  async handleSort(criteria) {
    if (criteria === this.currentSort) return;

    // Add transitioning class for fade-out
    this.container.classList.add('transitioning');

    // Wait for fade-out
    await this.delay(300);

    // Sort and re-render
    this.sortData(criteria);
    this.render();

    // Force reflow
    void this.container.offsetWidth;

    // Remove transitioning class for fade-in
    this.container.classList.remove('transitioning');
  }

  // Utility: delay promise
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Bind event listeners
  bindEvents() {
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    sortButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const sortType = btn.dataset.sort;
        
        // Update active state
        sortButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');

        // Handle sort
        this.handleSort(sortType);
      });
    });
  }
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize the gallery
  const gallery = new WorkGallery('#gallery-grid', galleryData);

  // Expose gallery instance for debugging (optional)
  window.workGallery = gallery;
});

// ============================================
// UTILITY: Add new project helper
// ============================================
/**
 * Helper function to add a new project to the gallery
 * Usage: addProject({ title: '...', category: '...', ... })
 * 
 * Required fields:
 * - id: unique identifier
 * - title: project title
 * - category: category name (e.g., 'Game Audio', 'Sound Design')
 * - year: year (number)
 * - date: ISO date string (e.g., '2025-01-15')
 * - thumbnail: path to thumbnail image
 * - description: project description
 * - techStack: array of technologies used
 * - links: array of { label, url, icon } objects
 */
function addProject(project) {
  // Validate required fields
  const required = ['id', 'title', 'category', 'year', 'date', 'thumbnail', 'description', 'techStack', 'links'];
  const missing = required.filter(field => !project[field]);
  
  if (missing.length > 0) {
    console.error(`Missing required fields: ${missing.join(', ')}`);
    return false;
  }

  galleryData.push(project);
  
  // Re-initialize gallery if it exists
  if (window.workGallery) {
    window.workGallery.data = [...galleryData];
    window.workGallery.sortData(window.workGallery.currentSort);
    window.workGallery.render();
  }

  return true;
}
