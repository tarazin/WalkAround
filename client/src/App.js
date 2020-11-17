import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {listLogEntries} from './API'; 




const App = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  useEffect (() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();

  },  []);
  return (
    <ReactMapGL
      {...viewport}
      mapStyle= "mapbox://styles/tarazin/ckhlcwm4n068v19nuzz7u3yk0"
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
export default App;