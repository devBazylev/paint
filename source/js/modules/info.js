import {loadData} from './api';
import {createCards} from './creation';
import {createCardsModal} from './creation-minor';
import {countPrice} from '../utils/util';

const initInfo = () => {
  const overlay = document.querySelector('.overlay');
  const info = document.querySelector('.info');
  const infoList = document.querySelector('.info__list');
  const toggler = info.querySelector('.info__toggler');
  const choice = info.querySelector('.info__choice');
  const checkboxes = info.querySelectorAll('.info__check');
  const counter = info.querySelector('.info__num');
  const select = info.querySelector('.info__select');
  const board = select.querySelector('.info__board');
  const options = select.querySelectorAll('.info__option');
  const optionHighPrice = select.querySelector('.info__option--high');
  const optionLowPrice = select.querySelector('.info__option--low');
  const optionPopular = select.querySelector('.info__option--popular');
  const optionNew = select.querySelector('.info__option--new');

  let sourceArray;
  let sourceCards;
  let startY = 0;

  const getCardId = (elem) => {
    const card = elem.closest('.info__item');
    return card ? +card.getAttribute('data-id') : null;
  };

  const addCardToCart = (evt) => {
    const id = getCardId(evt.target);
    const card = sourceArray.find(item => item.id === id);
    createCardsModal(card);
    countPrice();
  };

  const sortCardsByHighPrice = (data) => {
    return data.slice().sort((a, b) => b.price - a.price);
  };

  const sortCardsByLowPrice = (data) => {
    return data.slice().sort((a, b) => a.price - b.price);
  };

  const sortCardsByPopularFirst = (data) => {
    return data.sort((a, b) => {
      const aHasSale = a.tags.includes('sale') ? 0 : 1;
      const bHasSale = b.tags.includes('sale') ? 0 : 1;
      return aHasSale - bHasSale;
    });
  };

  const sortCardsByNewFirst = (data) => {
    return data.sort((a, b) => {
      const aHasNew = a.tags.includes('new') ? 0 : 1;
      const bHasNew = b.tags.includes('new') ? 0 : 1;
      return aHasNew - bHasNew;
    });
  };

  const onMissClick = (evt) => {
    if (!evt.target.closest('.info__select')) {
      select.classList.remove('info__select--opened');
      overlay.classList.remove('overlay--active');
      document.removeEventListener('click', onMissClick);
      board.addEventListener('click', onBoard);
    }
  };

  const onOption = () => {
    select.classList.remove('info__select--opened');
    overlay.classList.remove('overlay--active');
    document.removeEventListener('click', onMissClick);
    board.addEventListener('click', onBoard);
  };

  const onBoard = () => {
    select.classList.add('info__select--opened');
    overlay.classList.add('overlay--active');
    document.addEventListener('click', onMissClick);
    options.forEach((item) => {
      item.addEventListener('click', onOption);
    });
    board.removeEventListener('click', onBoard);
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

  const loadWithFilter = (callback) => {
    loadData().then((data) => {
      infoList.innerHTML = "";
      sourceArray = data;
      const newArr = callback(sourceArray);
      createCards(newArr);
      sourceCards = info.querySelectorAll('.info__item');
      sourceCards.forEach((item) => {
        const btn = item.querySelector('.info__btn');
        btn.addEventListener('click', addCardToCart);
      });
      showCheckedCards();
    });
  };

  loadWithFilter(sortCardsByNewFirst);

  const onHighPrice = () => {
    board.textContent = optionHighPrice.textContent;
    loadWithFilter(sortCardsByHighPrice);
  };

  const onLowPrice = () => {
    board.textContent = optionLowPrice.textContent;
    loadWithFilter(sortCardsByLowPrice);
  };

  const onPopular = () => {
    board.textContent = optionPopular.textContent;
    loadWithFilter(sortCardsByPopularFirst);
  };

  const onNew = () => {
    board.textContent = optionNew.textContent;
    loadWithFilter(sortCardsByNewFirst);
  };

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

  optionHighPrice.addEventListener('click', onHighPrice);
  optionLowPrice.addEventListener('click', onLowPrice);
  optionPopular.addEventListener('click', onPopular);
  optionNew.addEventListener('click', onNew);
};

export {initInfo};
