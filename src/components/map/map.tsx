import React, {useEffect, useRef} from 'react';
import leaflet, {LatLngExpression} from 'leaflet';
import "leaflet/dist/leaflet.css";
import {mapProps} from "./map-types";
import {StateTypes} from "../../store/store-types";
import {connect} from "react-redux";

const Map: React.FC<mapProps> = ({cards, currentCity, style}) => {
  const mapRef = useRef(null);
  const city: LatLngExpression = [52.38333, 4.9];
  const zoom = 12;

  useEffect(() => {
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false
    });

    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    cards.forEach((card) => {
      const customIcon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });

      leaflet.marker({
        lat: card.location.latitude,
        lng: card.location.longitude
      },
      {
        icon: customIcon
      })
        .addTo(map)
        .bindPopup(card.title);

      return () => {
        map.remove();
      };
    });
  }, [currentCity]);

  return (
    <section className="property__map map" ref={mapRef} style={style}></section>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  currentCity: state.currentCity,
  cards: state.offers
});

export {Map};
export default connect(mapStateToProps)(Map);
