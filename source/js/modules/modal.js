const initModal = () => {
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');
  const cross = document.querySelector('.modal__cross');
  const cart = document.querySelector('.header__cart')

  const onMissClick = (evt) => {
    if (!evt.target.closest('.modal')) {
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

  // document.querySelectorAll('.info__btn').forEach(button => {
  //   button.addEventListener('click', () => {
  //     const card = button.closest('.info__item');
  //     const id = card.getAttribute('data-id');
  //   });
  // });

  cart.addEventListener('click', onCart);
  cross.addEventListener('click', onCross);
};

export {initModal};
