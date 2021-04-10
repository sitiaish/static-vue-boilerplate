import MapboxGL from 'mapbox-gl';

// set mapbox token
// MapboxGL.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
MapboxGL.accessToken = "";

const createMap = config => {
  // init Mapbox
  const map = new MapboxGL.Map({
    ...config,
    interactive: true,
    maxBounds: [
      [-180, -80], // left top
      [195, 85] // right bottom
    ],
    maxZoom: 13.5,
    minZoom: 1.6
  });

  return map;
};

const createPopup = config => {
  // init Mapbox
  const popup = new MapboxGL.Popup({
    ...config,
  });

  return popup;
};

const createControl = config => {
  // init Mapbox
  const navControl = new MapboxGL.NavigationControl({
    ...config,
  });

  return navControl;
};

export default {
  createMap,
  createPopup,
  createControl
};
