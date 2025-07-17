import {loadData} from './api';
import {createCards} from './creation';

const initInfo = () => {
  const info = document.querySelector('.info');
  const choice = info.querySelector('.info__choice');
  const checkboxes = info.querySelectorAll('.info__check');
  const counter = info.querySelector('.info__num');
  const list = info.querySelector('.info__list');

  let sourceCards;

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

};

export {initInfo};
