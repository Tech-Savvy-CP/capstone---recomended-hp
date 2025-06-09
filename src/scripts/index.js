// CSS imports
import '../styles/styles.css';
import 'bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './pages/app';

document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });
  await app.renderPage();

  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });
  AOS.init();
});


// document.getElementById('toggleButton').addEventListener('click', function() {
//   const reviewSections = document.querySelectorAll('.review-section');
//   const button = document.getElementById('toggleButton');

//   let allVisible = true;

//   reviewSections.forEach(function(section) {
//     if (section.style.display === "none" || section.style.display === "") {
//       allVisible = false;
//     }
//   });

//   if (allVisible) {
//     reviewSections.forEach(function(section) {
//       section.style.display = "none";
//     });
//     button.textContent = "Tampilkan Review";
//   } else {
//     reviewSections.forEach(function(section) {
//       section.style.display = "block";
//     });
//     button.textContent = "Sembunyikan Review";
//   }
// });

