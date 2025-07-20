const mob = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
const tab = window.matchMedia('(min-width: 767px) and (max-width: 1023px)');
const desk = window.matchMedia('(min-width: 1024px) and (max-width: 5000px)');

const addClass = (elem, classs) => {
  elem.classList.add(classs);
};

const addClassArray = (elems, classs) => {
  elems.forEach((elem) => {
    addClass(elem, classs);
  });
};

const cloneSlides = (parent, elems, array) => {
  elems.forEach((elem) => {
    const clone = elem.cloneNode(true);
    clone.setAttribute('aria-hidden', true);
    array.push(clone);
    parent.appendChild(clone);
  });
};

const removeClass = (elem, classs) => {
  elem.classList.remove(classs);
};

const removeClassArray = (array, classs) => {
  array.forEach((elem) => {
    if (elem.classList.contains(classs)) {
      elem.classList.remove(classs);
    }
  });
};

const getWordByNumber = (number) => {
  if (number === 0) {
    return "товаров";
  }

  const lastTwoDigits = number % 100;
  const lastDigit = number % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return "товаров";
  }

  if (lastDigit === 1) {
    return "товар";
  } else if ([2, 3, 4].includes(lastDigit)) {
    return "товара";
  } else {
    return "товаров";
  }
};

const countPrice = () => {
  const cart = document.querySelector('.header__cart span');
  const modal = document.querySelector('.modal');
  const cards = modal.querySelectorAll('.modal__item');
  const total = modal.querySelector('.modal__total');
  const count = modal.querySelector('.modal__count');
  let totalPrice = 0;
  let totalCount = 0;

  if (cards) {
    cards.forEach((card) => {
      const price = parseInt(card.querySelector('.modal__price').textContent.replace(/\D/g, ''));
      const count = +card.querySelector('.modal__board').textContent;
      totalPrice += price * count;
      totalCount += count;
    });
  }

  total.textContent = `${totalPrice} ₽`;
  count.textContent = `${totalCount} ${getWordByNumber(totalCount)}`;
  cart.textContent = totalCount;
};

export {
  mob,
  tab,
  desk,
  addClass,
  addClassArray,
  cloneSlides,
  removeClass,
  removeClassArray,
  countPrice,
  getWordByNumber
};
