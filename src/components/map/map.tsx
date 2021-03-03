import React, {useEffect} from 'react';
import leaflet, {latLng} from 'leaflet';
import "leaflet/dist/leaflet.css";
import {mapProps} from "./map-types";
import {StateTypes} from "../../store/store-types";
import {connect} from "react-redux";

const Map: React.FC<mapProps> = ({cards, currentCity, style, activeCard, offerCity}) => {
  const activeCardId = activeCard ? activeCard.id : null;
  const city = offerCity ? offerCity : currentCity;

  useEffect(() => {
    const {longitude, latitude, zoom} = city.location;
    const cityCoords = latLng(latitude, longitude);
    const map = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude
      },
      zoom,
      zoomControl: false
    });

    map.setView(cityCoords, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    cards.forEach(({id, location, title}) => {
      const customIcon = leaflet.icon({
        iconUrl: `${id === activeCardId ? `./img/pin-active.svg` : `./img/pin.svg`}`,
        iconSize: [30, 30],
      });

      leaflet
        .marker(
            {
              lat: location.latitude,
              lng: location.longitude,
            },
            {
              icon: customIcon,
            }
        )
        .addTo(map)
        .bindPopup(title);
    });

    return () => {
      map.remove();
    };
  }, [currentCity, activeCard, cards]);

  return (
    <section className="property__map map" id="map" style={style}></section>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  currentCity: state.currentCity,
  activeCard: state.activeCard
});

export {Map};
export default connect(mapStateToProps)(Map);
