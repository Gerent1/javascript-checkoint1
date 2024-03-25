//handdle fetching news

const latestNews = [];

const fetchNews = async () => {
    const  url = "https://google-news13.p.rapidapi.com/latest?lr=en-US";
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a738fd29e5msh7cc49cf71c11a0cp13b0a2jsna7b4dad77741',
            'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
        }
    }

    const response = await fetch(url, options);
    const allNews = await response.json();
    latestnews.push(allNews.items);    
    // console.log(allNews);
    return allNews.items;

}
// fetchNews();

const news =  fetchNews();
cconst newsContainer = document.querySelector('all-news');

news.forEach((newsItem) => {
    const {title, publisher, timestamp, newsurl,  snippet, images } = newsItem;

    const newsCard = document.createElement('div');
    const pubEle = document.createElement('h2');
    pubEle.innerHTML = publisher;


    const newsImg = document.createElement('img');
    newsImg.setAttribute('src', images.thumbnail);

    const newsTitle = document.createElement('a');
    titleEle.innerHTML = title;
    titleEle.setAttribute('href', newsurl);

    const newsSnippet = document.createElement('p');
    newsSnippet.innerHTML = snippet;

    newsCard.appendChild(pubEle);
    newsCard.appendChild(newsImg);
    newsCard.appendChild(titleEle);
    newsCard.appendChild(newsSnippet);










    }