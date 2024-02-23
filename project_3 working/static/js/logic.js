// Function to create the map
function createMap(stadiumLayer) {
  // Create the tile layer that will be the background of our map
  let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the streetmap layer
  let baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the stadiumLayer
  let overlayMaps = {
    "Baseball Stadiums": stadiumLayer
  };

  // Create the map object with options
  let map = L.map("map-id", {
    center: [38.73, -94.0059], // getting close to the center of the USA
    zoom: 5, // Default zoom level
    layers: [streetmap, stadiumLayer] // Add streetmap and stadiumLayer to default layers
  });

  // Create a layer control and add it to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}

// Function to create markers from both MiLB and MLB data
function createMarkers(MiLBData, MLBData) {
  let stadiumMarkers = [];

  // Create markers for MiLB stadiums
  MiLBData.forEach(function(stadium) {
    let marker = L.marker([stadium.lat, stadium.lon])
      .bindPopup("<h3>" + stadium.team + "</h3><h4>" + stadium.city + "</h4><p>League: " + stadium.league + "</p><p>Division: " + stadium.division + "</p>");
    stadiumMarkers.push(marker);
  });

  // Create markers for MLB stadiums
  MLBData.forEach(function(stadium) {
    let marker = L.marker([stadium.Latitude, stadium.Longitude])
      .bindPopup("<h3>" + stadium.Team + "</h3><h4>" + stadium.CITY + "</h4><p>League: MLB</p><p>Name of Stadium: " + stadium.NAME + "</p>");
    stadiumMarkers.push(marker);
  });

  // Create map with all stadium markers
  createMap(L.layerGroup(stadiumMarkers));
}

// Read the MiLB stadium locations CSV file
d3.csv("MiLB Stadiums.csv").then(function(MiLBData) {
  // Read MLB stadium locations CSV
  d3.csv("MLB Stadiums with Lat-Lon.csv").then(function(MLBData) {
    // Call createMarkers function with both datasets
    createMarkers(MiLBData, MLBData);
  });
});


