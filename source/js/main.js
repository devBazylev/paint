import {initHeader} from './modules/header';
import {initAbout} from './modules/about';

window.addEventListener('DOMContentLoaded', () => {
  const startHtml = '';
  const indexHtml = 'index.html';
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === startHtml) {
    try {
      const intro = document.querySelector('.intro');
      if (intro) {
        initHeader();
        initAbout();
      }
    } catch (e) {
      return;
    }
  }
  if (currentPage === indexHtml) {
    initHeader();
    initAbout();
  }
  window.addEventListener('load', () => {

  });
});
