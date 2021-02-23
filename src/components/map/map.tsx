import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import {mapProps} from "./map-types";

const Map: React.FC<mapProps> = ({cards, city, style}) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const cityZoom: number = city.location.zoom;
    const cityCoordinates = {
      lat: city.location.latitude,
      lng: city.location.longitude
    };

    mapRef.current = leaflet.map(`map`, {
      center: cityCoordinates,
      zoom: cityZoom,
      zoomControl: false
    });

    mapRef.current.setView(cityCoordinates, cityZoom);

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
  }, [city]);

  return (
    <section className="property__map map" id="map" ref={mapRef} style={style}></section>
  );
};

export default Map;
