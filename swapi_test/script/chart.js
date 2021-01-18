const filmURL = 'https://swapi.dev/api/films/';

function sendRequestF(method, url) {
    return fetch(url).then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log(err);
    })
}

async function createChart() {
    let data = await sendRequestF('GET', filmURL);
    let lbls = [];    
    let dtst = {planets:[], species:[], characters:[], starships:[], vehicles:[]};
    let bgcol = {planets:[], species:[], characters:[], starships:[], vehicles:[]};
    let bdcol = {planets:[], species:[], characters:[], starships:[], vehicles:[]};
    
    data.results.forEach((res) => {
        lbls.push('ep#'+res.episode_id+': '+res.title+', '+res.release_date.slice(0, 4));
    })
    
    data.results.forEach((res) => {
            dtst.planets.push(res.planets.length);
            dtst.species.push(res.species.length);
            dtst.characters.push(res.characters.length);
            dtst.starships.push(res.starships.length);
            dtst.vehicles.push(res.vehicles.length);
            
            bgcol.planets.push('#B58100');
            bgcol.species.push('#D97DDF');
            bgcol.characters.push('#FAF14A');
            bgcol.starships.push('#4EECE3');
            bgcol.vehicles.push('#B8D22E');
            
            bdcol.planets.push('#937939');
            bdcol.species.push('#A60B87');
            bdcol.characters.push('#C29114');
            bdcol.starships.push('#57A5A0');
            bdcol.vehicles.push('#899350');
    })

    var ctx = document.getElementById('myChart').getContext('2d');
    var mixedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            datasets: [{
                label: 'Planets',
                data: dtst.planets,
                backgroundColor: bgcol.planets,
                borderColor: bdcol.planets,
                borderWidth: 1
            }, {
                label: 'Species',
                data: dtst.species,
                backgroundColor: bgcol.species,
                borderColor: bdcol.species,
                borderWidth: 1
            }, {
                label: 'Characters',
                data: dtst.characters,
                backgroundColor: bgcol.characters,
                borderColor: bdcol.characters,
                borderWidth: 1
            }, {
                label: 'Starships',
                data: dtst.starships,
                backgroundColor: bgcol.starships,
                borderColor: bdcol.starships,
                borderWidth: 1
            }, {
                label: 'Vehicles',
                data: dtst.vehicles,
                backgroundColor: bgcol.vehicles,
                borderColor: bdcol.vehicles,
                borderWidth: 1
            }],
            labels: lbls
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

createChart();