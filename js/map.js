const richmond = [-37.823, 144.998];
const deviation = 0.006;
const noOfPins = 6;
// Map token for the www.mapbox.com user petersomogyisensiscomau
const mapToken = 'pk.eyJ1IjoicGV0ZXJzb21vZ3lpc2Vuc2lzY29tYXUiLCJhIjoiY2prcng3MzlwMjh6aDNzdGhyZnJheXVzdyJ9.JmDqmJg7ttm7TkKy117Efw';

function randomDeviation() {
    var random = Math.random() * deviation;
    // See about converting to a -ve number
    if (Math.random() > 0.5) {
        random *= -1;
    }
    return random;
}

function createCoOrdinate(i) {
    // The latitude (y) can deviate completely randomly
    var latitude = richmond[0] + randomDeviation();
    
    // The longtitude (x) should try to space itself somewhat
    var longtitude = (richmond[1] - deviation) + (i * (1/ (noOfPins - 1)) * deviation * 2);
    
    return [latitude, longtitude];
}

function pinClicked(event) {
    $('#insights').hide().slideDown();
    // TODO - send this value somewhere
    // event.sourceTarget.options.growthPercentage);
	charts.init();
    charts.redrawChart();
}

function createPins(myMap) {
    var pinBlue = L.icon({
        iconUrl: 'images/pin-blue.png',
        iconSize: [24, 42],
        iconAnchor: [12, 42]
    });
    var pinRed = L.icon({
        iconUrl: 'images/pin-red.png',
        iconSize: [24, 42],
        iconAnchor: [12, 42]
    });
    var pinGreen = L.icon({
        iconUrl: 'images/pin-green.png',
        iconSize: [24, 42],
        iconAnchor: [12, 42]
    });
    var pinGold = L.icon({
        iconUrl: 'images/pin-gold.png',
        iconSize: [24, 42],
        iconAnchor: [12, 42]
    });
    
    for (i = 0; i < noOfPins; i ++) {
        // Every 2nd pin is considered "growth"
        var growth = i % 2 === 0;
        var pin = growth ? pinGreen : pinGold;
        var growthPercentage = Math.floor(Math.random() * 51) + (growth ? 50 : 0);
        L.marker(createCoOrdinate(i), {
            icon: pin, 
            growthPercentage: growthPercentage
        }).addTo(myMap).on('click', pinClicked);
    }
}

function initMap() {
    const myMap = L.map('mapId').setView(richmond, 14);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 17,
        id: 'mapbox.streets',
        accessToken: mapToken
    }).addTo(myMap);
    
    createPins(myMap);

    L.circle(richmond, 900, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
    }).addTo(myMap).bindPopup('Your current area of reach');
}
