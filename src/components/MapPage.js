import React from 'react';
import log from 'loglevel';
import Map from 'client/src/models/Map';
import 'client/src/style.css';
import 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-utfgrid/L.UTFGrid.js';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MapDrawer from "./MapDrawer";

const style = (theme) => ({
  map: {
    width: "100vw",
    height: "100vh",
  },
  paper: {
    background: 'transparent',
  },
  rounded: {
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  drawer: {
    height: 549,
    width: "100%",
  },
  box: {
    justifyContent: 'center',
  },
});

function MapPage(props) {
  const { classes } = props;
  const mapRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const [isDrawer, setDrawer] = React.useState(false);

  //load map
  React.useEffect(() => {
    log.info('load map...');
    const script = document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDUGv1-FFd7NFUS6HWNlivbKwETzuIPdKE&libraries=geometry';
    script.id = 'googleMaps';
    document.body.appendChild(script);
    const parameters = {
      wallet: 'Malinda51',
    };
    const map = new Map({
      //      onLoad: loaded,
      //      onClickTree: showPanel,
      //      onFindNearestAt: handleFindNearestAt,
      //      onError: handleError,
      filters: parameters,
    });
    map.mount(mapRef.current);
    mapRef.current.map = map;
    setDrawer(true);
  }, []);
  return(
    <div className="App" ref={containerRef} >
      <div id="map-canvas" className={classes.map} ref={mapRef}/>
      <div ref={containerRef} >
      {isDrawer &&
        <MapDrawer/>
      }
      </div>
    </div>
  );
}

export default withStyles(style)(MapPage);
