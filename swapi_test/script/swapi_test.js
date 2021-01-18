const planetURL = 'https://swapi.dev/api/planets/';

function sendRequestP(method, url) {
    return fetch(url).then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
}

async function getPlanet() {
    let data = await sendRequestP('GET', planetURL);
    let elem = document.getElementById('planet');
    let reqobj = [];
    for (let i = 1; i <= Math.ceil(data.count/10); i++) {
        let requrl = planetURL + '?page=' + i;
        reqobj.push(await sendRequestP('GET', requrl));
    }
    reqobj.forEach((res) => {
        res.results.forEach((objct) => {
            elem.innerHTML += "<button type=\"button\" class=\"list-group-item list-group-item-action\" onclick=\"showModal(this)\" id = \""+objct.name+"\">"+objct.name+"</button>";
        })
    })
    localStorage.setItem('planets', JSON.stringify(reqobj));
    console.log(JSON.parse(localStorage.getItem('planets')));
}

getPlanet();