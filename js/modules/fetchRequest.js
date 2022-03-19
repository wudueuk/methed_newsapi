const URL = 'https://newsapi.org/v2/';

const fetchRequest = async (postfix, {
  method = 'get',
  query = 'top-headlines?country=ru',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const uri = URL + query;
    const response = await fetch(uri, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
