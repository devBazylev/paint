const createCardsModal = (data) => {
  const modal = document.querySelector('.modal');
  const list = modal.querySelector('.modal__list');
  const fragmentCard = document.createDocumentFragment();

  const newItem = document.createElement('li');
  newItem.classList.add('modal__item');
  newItem.setAttribute('data-id', data.id);

  const newCard = document.createElement('div');
  newCard.classList.add('modal__card');

  const newPic = document.createElement('div');
  newPic.classList.add('modal__pic');
  const newPicture = document.createElement('picture');
  const newSource = document.createElement('source');
  newSource.setAttribute('type', 'image/webp');
  newSource.setAttribute('srcset', `img/content/${data.name}@1x.webp, img/content/${data.name}@2x.webp 2x`);
  newSource.setAttribute('width', '96');
  newSource.setAttribute('height', '96');
  const newImg = document.createElement('img');
  newImg.setAttribute('src', `img/content/${data.name}@1x.png`);
  newImg.setAttribute('srcset', `img/content/${data.name}@2x.png 2x`);
  newImg.setAttribute('width', '96');
  newImg.setAttribute('height', '96');
  newImg.setAttribute('alt', data.frontAlt);
  newImg.setAttribute('loading', 'lazy');
  newPic.appendChild(newPicture);
  newPicture.appendChild(newSource);
  newPicture.appendChild(newImg);
  newCard.appendChild(newPic);

  const newBox = document.createElement('div');
  newBox.classList.add('modal__box');
  newCard.appendChild(newBox);

  const newName = document.createElement('div');
  newName.classList.add('modal__name');
  newName.textContent = data.text;
  newBox.appendChild(newName);

  const newPrice = document.createElement('div');
  newPrice.classList.add('modal__price');
  newPrice.textContent = data.price;
  newBox.appendChild(newPrice);

  const newSpan = document.createElement('span');
  newSpan.textContent = "₽";
  newPrice.appendChild(newSpan);

  const newWrap = document.createElement('div');
  newWrap.classList.add('modal__wrap');

  const newMinus = document.createElement('button');
  newMinus.classList.add('modal__minus');
  newMinus.classList.add('btn');
  newMinus.setAttribute('type', 'button');
  newWrap.appendChild(newMinus);

  const newBoard = document.createElement('div');
  newBoard.classList.add('modal__board');
  newBoard.textContent = 1;
  newWrap.appendChild(newBoard);

  const newPlus = document.createElement('button');
  newPlus.classList.add('modal__plus');
  newPlus.classList.add('btn');
  newPlus.setAttribute('type', 'button');
  newWrap.appendChild(newPlus);

  const newDelete = document.createElement('button');
  newDelete.classList.add('modal__delete');
  newDelete.classList.add('btn');
  newDelete.setAttribute('type', 'button');
  newWrap.appendChild(newDelete);

  newItem.appendChild(newCard);
  newItem.appendChild(newWrap);

  fragmentCard.appendChild(newItem);
  list.append(fragmentCard);
};

export {createCardsModal};
