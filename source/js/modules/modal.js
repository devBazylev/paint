import {countPrice} from '../utils/util';

const initModal = () => {
  const overlay = document.querySelector('.overlay');
  const cart = document.querySelector('.header__cart')
  const modal = document.querySelector('.modal');
  const cross = modal.querySelector('.modal__cross');
  const clean = modal.querySelector('.modal__clean')
  const list = modal.querySelector('.modal__list')

  const onClean = () => {
    list.innerHTML = '';
    countPrice();
  };

  const onMissClick = (evt) => {
    if (!evt.target.closest('.modal') && !evt.target.closest('.modal__cross')) {
      modal.classList.remove('modal--opened');
      overlay.classList.remove('overlay--active');
      document.removeEventListener('click', onMissClick);
    }
  };

  const onCart = () => {
    modal.classList.add('modal--opened');
    overlay.classList.add('overlay--active')
    setTimeout(() => {
      document.addEventListener('click', onMissClick);
    }, 500);
  };

  const onCross = () => {
    modal.classList.remove('modal--opened');
    overlay.classList.remove('overlay--active')
    document.removeEventListener('click', onMissClick);
  };

  clean.addEventListener('click', onClean);
  cart.addEventListener('click', onCart);
  cross.addEventListener('click', onCross);
};

export {initModal};
