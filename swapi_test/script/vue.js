var app = new Vue({
    el : '#app', 
    data : {
        showPlanetl: false,
        showStat: false,
        showModal: true
    },
                
    methods : {
        showPlanetList() {
            if (this.showPlanetl == false) {
                this.showPlanetl = true;
                this.showStat = false;
            } else {
                this.showPlanetl = false;
                this.showStat = false;
            }
        },
        showStatf() {
            if (this.showStat == false) {
                this.showStat = true;
                this.showPlanetl = false;
            } else {
                this.showStat = false;
                this.showPlanetl = false;
            }
        },
    }
})