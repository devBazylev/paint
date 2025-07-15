import {initHeader} from './modules/header';

window.addEventListener('DOMContentLoaded', () => {
  const startHtml = '';
  const indexHtml = 'index.html';
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === startHtml) {
    try {
      const intro = document.querySelector('.intro');
      if (intro) {
        initHeader();
      }
    } catch (e) {
      return;
    }
  }
  if (currentPage === indexHtml) {
    initHeader();
  }
  window.addEventListener('load', () => {

  });
});
