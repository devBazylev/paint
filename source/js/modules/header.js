const initHeader = () => {
  const header = document.querySelector('.header');
  const toggler = header.querySelector('.header__toggler');
  const btns = header.querySelectorAll('.header__link, .header__tel, .header__tool');

  const onMissClick = (evt) => {
    if (!evt.target.closest('.header__cont') && !evt.target.closest('.header__toggler')) {
      header.classList.remove('header--opened');
      document.removeEventListener('click', onMissClick);
    }
  };

  const closeMenu = () => {
    header.classList.remove('header--opened');
    document.removeEventListener('click', onMissClick);
    btns.forEach((btn) => {
      btn.removeEventListener('click', closeMenu);
    });
  };

  const openMenu = () => {
    header.classList.toggle('header--opened');
    document.addEventListener('click', onMissClick);
    btns.forEach((btn) => {
      btn.addEventListener('click', closeMenu);
    });
  };

  toggler.addEventListener('click', openMenu);
};

export {initHeader};
