import {loadData} from './api';
import {createCards} from './creation';

const initInfo = () => {
  const overlay = document.querySelector('.overlay');
  const info = document.querySelector('.info');
  const toggler = info.querySelector('.info__toggler');
  const choice = info.querySelector('.info__choice');
  const checkboxes = info.querySelectorAll('.info__check');
  const counter = info.querySelector('.info__num');
  const select = info.querySelector('.info__select');
  const board = select.querySelector('.info__board');
  const options = select.querySelectorAll('.info__option');

  let sourceCards;
  let startY = 0;

  const onBoard = () => {
    select.classList.add('info__select--opened');
    overlay.classList.add('overlay--active');
  };

  const onToggler = () => {
    choice.classList.add('info__choice--opened');
    overlay.classList.add('overlay--active');
    document.body.classList.add('lock-scroll');
  };

  const getCheckedIds = () => {
    const checkboxes = choice.querySelectorAll('.info__check:checked');
    const ids = Array.from(checkboxes).map(item => item.id);

    return ids;
  };

  const showCheckedCards = () => {
    const dataForCheck = getCheckedIds();
    let i = 0;

    sourceCards.forEach(card => {
      const dataAttrs = card.dataset;
      const dataValues = Object.keys(dataAttrs).join(' ');

      const hasAnyData = dataForCheck.some(word => dataValues.includes(word));

      if (!hasAnyData) {
        card.classList.add('info__item--none');
      } else {
        card.classList.remove('info__item--none');
        i++;
      }
    });
    counter.textContent = `${i} товаров`
  };

  loadData().then((data) => {
    createCards(data);
    sourceCards = info.querySelectorAll('.info__item');
    showCheckedCards();
  });

  checkboxes.forEach((item) => {
    item.addEventListener('change', showCheckedCards);
  });

  board.addEventListener('click', onBoard);
  toggler.addEventListener('click', onToggler);
  choice.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });
  choice.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 50) {
      e.preventDefault();
      choice.classList.remove('info__choice--opened');
      overlay.classList.remove('overlay--active');
      document.body.classList.remove('lock-scroll');
    }
  });
};

export {initInfo};
