const apiKey = 'YOUR_API_KEY_HERE';
fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        let headlines = data.articles;
        let newsSection = document.getElementById('news-headlines');
        headlines.forEach(article => {
            let newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `<h3>${article.title}</h3><p>${article.description}</p><a href="${article.url}" target="_blank">Read more</a>`;
            newsSection.appendChild(newsItem);
        });
    })
    .catch(error => console.error('Error fetching news:', error));
    document.getElementById('search-btn').addEventListener('click', function() {
        let query = document.getElementById('search-bar').value;
        window.open(`https://www.google.com/search?q=${query}`);
    });
    