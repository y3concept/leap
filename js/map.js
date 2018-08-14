var richmond = [-37.823, 144.998];
var deviation = 0.006;
var noOfPins = 6;
// Map token for the www.mapbox.com user petersomogyisensiscomau
var mapToken = 'pk.eyJ1IjoicGV0ZXJzb21vZ3lpc2Vuc2lzY29tYXUiLCJhIjoiY2prcng3MzlwMjh6aDNzdGhyZnJheXVzdyJ9.JmDqmJg7ttm7TkKy117Efw';

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

var mymap = L.map('mapid').setView(richmond, 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox.streets',
    accessToken: mapToken
}).addTo(mymap);

function pinClicked() {
    $('#insights').hide().slideDown();
}

for (i = 0; i < noOfPins; i ++) {
    L.marker(createCoOrdinate(i)).addTo(mymap).on('click', pinClicked);
}

L.circle(richmond, 900, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(mymap).bindPopup('Your current area of reach');