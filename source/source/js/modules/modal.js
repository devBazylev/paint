const initModal = () => {
  const overlay = document.querySelector('.overlay');
  const modal = document.querySelector('.modal');

  // setTimeout(() => {
  //   console.log(document.querySelectorAll('.info__btn'));
  // }, 2222);

  document.querySelectorAll('.info__btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.info__item');
      const id = card.getAttribute('data-id');
    });
  });
};

export {initModal};
