import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {mapProps} from "./map-types";

const Map: React.FC<mapProps> = ({cards, city}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: city.location.latitude,
        lng: city.location.longitude
      },
      zoom: 12,
      zoomControl: false,
      // marker: true
    });

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
        .addTo(mapRef.current)
        .bindPopup(card.title);

      return () => {
        mapRef.current.remove();
      };
    });
  }, []);

  return (
    <section className="property__map map" id="map" ref={mapRef}></section>
  );
};

export default Map;
