
fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>displayUsers(data))
function displayUsers(users){
    let htmlData=``
    users.forEach(u=>{
        htmlData+=`
        <div class="col-md-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h2 class="card-title">${u.name}</h2>
                  <h3 class="card-subtitle mb-2 text-body-secondary">${u.username}</h3>
                  <h6>${u.address.city}</h6>
                  <h6>${u.phone}</h6>
                  <p class="card-text">${u.email}</p>
                </div>
            </div>
        </div>
        `
    })
document.querySelector("#result").innerHTML=htmlData;
}