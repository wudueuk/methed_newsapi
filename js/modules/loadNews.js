import fetchRequest from './fetchRequest.js';
import renderNews from './renderNews.js';

const API_KEY = '1c0d6ae1acdb45348e3bf687f427c53e';

const loadNews = async (source) => {
  const news = await fetchRequest('', {
    method: 'GET',
    query: source,
    headers: {
      'X-Api-Key': API_KEY,
    },
    callback: renderNews,
  });

  return news;
};

export default loadNews;
