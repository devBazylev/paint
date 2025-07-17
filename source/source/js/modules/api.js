const SERVER_URL = 'https://5c5bc9a6fa9d36c2.mokky.dev';

const ServerRoute = {
  GET_DATA: '/paint',
  SEND_DATA: '/',
};

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  [HttpMethod.GET]: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  [HttpMethod.POST]: 'Не удалось отправить форму. Попробуйте ещё раз',
};

function request(url, method = HttpMethod.GET, body = null) {
  const options = {method};

  if (body) {
    options.headers = {'Content-Type': 'application/json'};
    options.body = JSON.stringify(body);
  }

  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(ErrorText[method]);
    }
    return response.json();
  });
}

const loadData = function () {
  return request(SERVER_URL + ServerRoute.GET_DATA);
};

export {loadData};
