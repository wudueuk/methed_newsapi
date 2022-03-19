
const renderNews = (err, newsData) => {
  if (!err && newsData.status === 'ok') {
    const news = newsData.articles.map(item => {
      const newsCard = document.createElement('li');
      newsCard.className = 'list-item';
      newsCard.innerHTML = `
        <img class="list-item__cover" src="${item.urlToImage}" 
          alt="${item.title}">
        <div class="list-item__text">
          <h3>
            <a class="list-link" href="#">${item.title}</a>
          </h3>
          <p>${item.description}</p>
          <p>${item.publishedAt}</p>
        </div>
      `;
      return newsCard;
    });

    const newsList = document.createElement('ul');
    newsList.className = 'list';
    newsList.append(...news);
    return newsList;
  }
};

export default renderNews;
