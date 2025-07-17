const initHeader = () => {
  const overlay = document.querySelector('.overlay');
  const header = document.querySelector('.header');
  const btns = header.querySelectorAll('.header__link, .header__tel, .header__tool, .header__toggler');

  const onMissClick = (evt) => {
    if (!evt.target.closest('.header') && !evt.target.closest('.header__toggler')) {
      header.classList.remove('header--opened');
      overlay.classList.remove('overlay--active');
      document.removeEventListener('click', onMissClick);
    }
  };

  const toggleMenu = () => {
    if (header.classList.contains('header--opened')) {
      overlay.classList.remove('overlay--active');
      header.classList.remove('header--opened');
      document.removeEventListener('click', onMissClick);
    } else {
      overlay.classList.add('overlay--active');
      header.classList.add('header--opened');
      document.addEventListener('click', onMissClick);
    }
  };

  btns.forEach((btn) => {
    btn.addEventListener('click', toggleMenu);
  });
};

export {initHeader};
