export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYXJpbmFwb2xpYW5rZXIiLCJhIjoiY2wwOHJ4OXV5MDZhOTNicGhjcWNtczNnOCJ9.4oFSif7kRVbXih8cEIZ7BA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/arinapolianker/cl09qb62j000914nsw52p8n10',
    scrollZoom: false,
    // center: [-118.249999,34.0499998],
    // zoom: 4
    // intractive: false -- the map can't move
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  // Makes the map zoom in nicely in the start
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
