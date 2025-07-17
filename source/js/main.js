import {initHeader} from './modules/header';
import {initAbout} from './modules/about';
import {initInfo} from './modules/info';

window.addEventListener('DOMContentLoaded', () => {
  const startHtml = '';
  const indexHtml = 'index.html';
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === startHtml) {
    initHeader();
    initAbout();
    initInfo();
  }

  if (currentPage === indexHtml) {
    initHeader();
    initAbout();
    initInfo();
  }
  window.addEventListener('load', () => {

  });
});
