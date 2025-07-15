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

export {
  mob,
  tab,
  desk,
  addClass,
  addClassArray,
  cloneSlides,
  removeClass,
  removeClassArray
};
