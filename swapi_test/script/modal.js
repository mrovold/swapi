var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function showModal(btnid) {
    let reqobj = JSON.parse(localStorage.getItem('planets'));
    let plName = document.getElementById('plName');
    let plClimate = document.getElementById('plClimate');
    let plSurfaceWater = document.getElementById('plSurfaceWater');
    let plTerrain = document.getElementById('plTerrain');
    let plPopulation = document.getElementById('plPopulation');
    let plDiameter = document.getElementById('plDiameter');
    let plGravity = document.getElementById('plGravity');
    let plRotationPeriod = document.getElementById('plRotationPeriod');
    let plOrbitalPeriod = document.getElementById('plOrbitalPeriod');
    
    reqobj.forEach((res) => {
        res.results.forEach((objct) => {
            if (objct.name == btnid.id) {
                plName.innerHTML = objct.name;
                plClimate.innerHTML = "Climate:           "+objct.climate;
                plSurfaceWater.innerHTML = "Surface water:     "+objct.surface_water;
                plTerrain.innerHTML = "Terrain:           "+objct.terrain;
                plPopulation.innerHTML = "Population:        "+objct.population;
                plDiameter.innerHTML = "Diameter:         "+objct.diameter+" kilometers";
                plGravity.innerHTML = "Gravity:           "+objct.gravity;
                plRotationPeriod.innerHTML = "Rotation period:   "+objct.rotation_period+" hours";
                plOrbitalPeriod.innerHTML = "Orbital period:    "+objct.orbital_period+" days";
            }
        })
    })
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}