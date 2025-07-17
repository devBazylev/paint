const createCards = (data) => {
  const info = document.querySelector('.info');
  const list = info.querySelector('.info__list');
  const fragmentUsers = document.createDocumentFragment();

  data.forEach((item) => {
    const newCard = document.createElement('li');
    newCard.classList.add('info__item');
    newCard.setAttribute('data-id', item.id);
    item.tags.forEach((tag) => {
      newCard.setAttribute(`data-${tag}`, '');
    });

    const newBox = document.createElement('div');
    newBox.classList.add('info__box');

    const newFront = document.createElement('div');
    newFront.classList.add('info__front');
    const newFrontPic = document.createElement('picture');
    const newFrontPicSource = document.createElement('source');
    newFrontPicSource.setAttribute('type', 'image/webp');
    newFrontPicSource.setAttribute('srcset', `img/content/${item.name}@1x.webp, img/content/${item.name}@2x.webp 2x`);
    newFrontPicSource.setAttribute('width', '278');
    newFrontPicSource.setAttribute('height', '278');
    const newFrontPicImg = document.createElement('img');
    newFrontPicSource.setAttribute('src', `img/content/${item.name}@1x.png`);
    newFrontPicSource.setAttribute('srcset', `img/content/${item.name}@2x.png 2x`);
    newFrontPicImg.setAttribute('width', '278');
    newFrontPicImg.setAttribute('height', '278');
    newFrontPicImg.setAttribute('alt', item.frontAlt);
    newFrontPicImg.setAttribute('loading', 'lazy');
    newFront.appendChild(newFrontPic);
    newFrontPic.appendChild(newFrontPicSource);
    newFrontPic.appendChild(newFrontPicImg);

    const newBack = document.createElement('div');
    newBack.classList.add('info__back');
    const newBackPic = document.createElement('picture');
    const newBackPicSource = document.createElement('source');
    newBackPicSource.setAttribute('type', 'image/webp');
    newBackPicSource.setAttribute('srcset', `img/content/${item.backup}@1x.webp, img/content/${item.backup}@2x.webp 2x`);
    newBackPicSource.setAttribute('width', '278');
    newBackPicSource.setAttribute('height', '278');
    const newBackPicImg = document.createElement('img');
    newBackPicImg.setAttribute('src', `img/content/${item.backup}@1x.png`);
    newBackPicImg.setAttribute('srcset', `img/content/${item.backup}@2x.png 2x`);
    newBackPicImg.setAttribute('width', '278');
    newBackPicImg.setAttribute('height', '278');
    newBackPicImg.setAttribute('alt', item.backAlt);
    newBackPicImg.setAttribute('loading', 'lazy');
    newBack.appendChild(newBackPic);
    newBackPic.appendChild(newBackPicSource);
    newBackPic.appendChild(newBackPicImg);

    const newText = document.createElement('div');
    newText.classList.add('info__text');
    newText.textContent = item.text;

    const newBag = document.createElement('div');
    newBag.classList.add('info__bag');

    const newPrice = document.createElement('div');
    newPrice.classList.add('info__price');
    newPrice.textContent = item.price;
    const newPriceSpan = document.createElement('span');
    newPriceSpan.textContent = "₽";
    newPrice.appendChild(newPriceSpan);
    newBag.appendChild(newPrice);

    const newBtn = document.createElement('button');
    newBtn.classList.add('info__btn');
    newBtn.classList.add('btn');
    newBag.appendChild(newBtn);
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "20");
    svg.setAttribute("height", "20");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.setAttribute("fill", "none");
    const path1 = document.createElementNS(svgNS, "path");
    path1.setAttribute("d", "M10 4.16663V15.8333");
    path1.setAttribute("stroke", "#ffffff");
    path1.setAttribute("stroke-width", "2");
    path1.setAttribute("stroke-linecap", "round");
    path1.setAttribute("stroke-linejoin", "round");
    const path2 = document.createElementNS(svgNS, "path");
    path2.setAttribute("d", "M4.16699 10H15.8337");
    path2.setAttribute("stroke", "#ffffff");
    path2.setAttribute("stroke-width", "2");
    path2.setAttribute("stroke-linecap", "round");
    path2.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path1);
    svg.appendChild(path2);
    newBtn.appendChild(svg);

    newBox.appendChild(newFront);
    newBox.appendChild(newBack);

    newCard.appendChild(newBox);
    newCard.appendChild(newText);
    newCard.appendChild(newBag);

    fragmentUsers.appendChild(newCard);
  });

  list.append(fragmentUsers);
};

export {createCards};
