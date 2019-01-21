var map = L.map('agentmap', {minZoom: 5})
    .setView([-2.479048, -78.57136], 7)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxrdWt1IiwiYSI6ImNqOG84cjduZTAwaWsycHBjc2piMHUzZWgifQ.GZUAkk3TMgehR5TZzxhHZQ'
}).addTo(map);

const markers = L.markerClusterGroup({disableClusteringAtZoom: 14})

map.addLayer(markers)

$.get('frox-agents.json', {some_var: ''}, function (data) {
    $(data).each(function () {
        let marker =
            new L.Marker(
                new L.LatLng(this.lat, this.lng), {title: this.name}
            )

        marker.bindPopup(this.name)

        markers.addLayer(marker)


    })
}, 'json')

// map.on("contextmenu", function (event) {
//     console.log("Coordinates: " + event.latlng.toString());
//     L.marker(event.latlng).addTo(map);
// });
