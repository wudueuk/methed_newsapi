import { showPreload, removePreload } from './modules/preload.js';
import loadNews from './modules/loadNews.js';

const newsContainer = document.querySelector('.news__container');

const init = () => {
  showPreload();
  loadNews().then(data => {
    removePreload();
    newsContainer.append(data);
  });
};

init();

const newsForm = document.querySelector('.news__form');
newsForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  showPreload();
  if (newsForm.source.value !== '') {
    const source = 'everything?q=' + newsForm.source.value;
    loadNews(source).then(data => {
      newsContainer.textContent = '';
      removePreload();
      newsContainer.append(data);
    });
  }
});
