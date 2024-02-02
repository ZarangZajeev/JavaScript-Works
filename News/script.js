fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-01-01&sortBy=publishedAt&apiKey=597882a1082c4176943c5c1cbfc51806").then(res=>res.json()).then(data=>displayNesw(data))

function displayNesw(news){
        htmlData+=`
        <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${news.source}</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        `
    document.querySelector("#result").innerHTML=htmlData;
}