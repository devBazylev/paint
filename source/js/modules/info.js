import {loadData} from './api';
import {createCards} from './creation';

const initInfo = () => {
  loadData().then((data) => {
    createCards(data);
  });
};

export {initInfo};
