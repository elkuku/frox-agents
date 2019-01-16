
var map = L.map('agentmap').setView([
    //0.990275, -79.659482
    //2.571312, -77.189085
    -2.479048, -78.57136
], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxrdWt1IiwiYSI6ImNqOG84cjduZTAwaWsycHBjc2piMHUzZWgifQ.GZUAkk3TMgehR5TZzxhHZQ'
}).addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(mymap);

const markers = L.markerClusterGroup({disableClusteringAtZoom: 16})

$.get('frox-agents.json', {some_var: ''}, function (data) {
    $(data).each(function () {
        let marker =
            new L.Marker(
                new L.LatLng(this.lat, this.lng),
                {
                    // icon: orangeIcon,
                    //wp_id: this.id, wp_selected: false,
                    title: this.name
                }
            )

//        marker.bindPopup(g11n3t("Loading..."))

        // var now = new Date().getTime();
        // while(new Date().getTime() < now + 2000){ /* do nothing */ }
/*
        marker.on('click', function(e) {
            var popup = e.target.getPopup();
            $.get('/waypoints_info/' + e.target.options.wp_id).done(function (data) {
                popup.setContent(data);
                popup.update();
            });
        })
*/

        // var marker2 = L.marker([this.lat, this.lng], {
        //     // icon: orangeIcon,
        //     //wp_id: this.id, wp_selected: false,
        //     title: this.name
        // }).addTo(map);
        markers.addLayer(marker)
        map.addLayer(markers)
    })
}, 'json')

// map.on("contextmenu", function (event) {
//     console.log("Coordinates: " + event.latlng.toString());
//     L.marker(event.latlng).addTo(map);
// });