export default class AboutPage {
  async render() {
    return `
  
      <section class="container about-container">
         <h1> test</h1>
        </section>
        <style>
          
  
        </style>
  
       
      `;
  }

  async afterRender() {
    if (window.feather) {
      feather.replace();
    }

    if ("startViewTransition" in document) {
      this.setupViewTransitions();
    }
  }

  setupViewTransitions() {
    const cards = document.querySelectorAll(".about-card");
    cards.forEach((card, index) => {
      card.style.viewTransitionName = `card-${index}`;
      card.style.animationDelay = `${index * 0.8}s`;
    });

    const header = document.querySelector(".about-header");
    if (header) {
      header.style.viewTransitionName = "about-header";
    }

    const container = document.querySelector(".about-container");
    if (container) {
      container.style.viewTransitionName = "about-main";
    }
  }
}
