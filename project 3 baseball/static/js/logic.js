// Function to create markers for MiLB stadiums
function createMiLBMarkers(data) {
  let MiLBMarkers = [];

  data.forEach(function(stadium) {
    let marker = L.marker([stadium.lat, stadium.lon], {
      icon: L.icon({
        iconUrl: 'images/MiLB.png', // Red marker icon for MiLB stadiums
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      })
    }).bindPopup("<h3>" + stadium.team + "</h3><h4>" + stadium.city + "</h4><p>League: " + stadium.league + "</p><p>Division: " + stadium.division + "</p>");
    MiLBMarkers.push(marker);
  });

  return L.layerGroup(MiLBMarkers);
}

// Function to create markers for MLB stadiums
function createMLBMarkers(data) {
  let MLBMarkers = [];

  data.forEach(function(stadium) {
    let marker = L.marker([stadium.Latitude, stadium.Longitude], {
      icon: L.icon({
        iconUrl: 'images/MLB.png', // Blue marker icon for MLB stadiums
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
      })
    }).bindPopup("<h3>" + stadium.Team + "</h3><h4>" + stadium.CITY + "</h4><p>League: MLB</p><p>Name of Stadium: " + stadium.NAME + "</p>");
    MLBMarkers.push(marker);
  });

  return L.layerGroup(MLBMarkers);
}

// Function to create the map
function createMap(MiLBStadiumLayer, MLBStadiumLayer) {
  // Create the tile layer that will be the background of our map
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the streetmap layer
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the stadium layers
  let overlayMaps = {
    "MiLB Stadiums": MiLBStadiumLayer,
    "MLB Stadiums": MLBStadiumLayer
  };

  // Create the map object with options
  let map = L.map("map-id", {
    center: [38.73, -90.0059], // Default center coordinates
    zoom: 5, // Default zoom level
    layers: [streetmap, MiLBStadiumLayer] // Add streetmap and MiLB stadium layer to default layers
  });

  // Create a layer control and add it to the map
  let layerControl = L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);

 // Create a custom legend control
 let legend = L.control({ position: "bottomright" });

 legend.onAdd = function(map) {
   let div = L.DomUtil.create("div", "legend");
   div.innerHTML += "<h4>Affiliate Legend</h4>";
   div.innerHTML += '<img src="images/MLB.png" style="width: 20px; height: 20px;"> <span> MLB </span><br>';
   div.innerHTML += '<img src="images/MiLB.png" style="width: 20px; height: 20px;"> <span> MiLB </span><br>';
   return div;
 };
 
 legend.addTo(map);
}

// Read the MiLB stadium locations CSV file
d3.csv("MiLB Stadiums.csv").then(function(MiLBData) {
  // Read MLB stadium locations CSV
  d3.csv("MLB Stadiums with Lat-Lon.csv").then(function(MLBData) {
    // Create MiLB and MLB stadium layers
    let MiLBStadiumLayer = createMiLBMarkers(MiLBData);
    let MLBStadiumLayer = createMLBMarkers(MLBData);

    // Create map with MiLB and MLB stadium layers
    createMap(MiLBStadiumLayer, MLBStadiumLayer);
  });
});

