import React, {useEffect, useRef} from "react";
import leaflet, {latLng} from "leaflet";
import "leaflet/dist/leaflet.css";
import {mapProps} from "./map-types";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";

const Map: React.FC<mapProps> = ({
  cards,
  style,
  offerCity,
  isMainMap,
  activeCardId,
}) => {
  const {currentCity} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const city = offerCity ? offerCity : currentCity;
  const map = useRef(null);

  useEffect(() => {
    const {longitude, latitude, zoom} = city.location;
    const cityCoords = latLng(latitude, longitude);
    map.current = leaflet.map(`map`, {
      center: {
        lat: latitude,
        lng: longitude,
      },
      zoom,
      zoomControl: false,
    });

    map.current.setView(cityCoords, zoom);

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(map.current);

    return () => {
      map.current.remove();
    };
  }, [city]);

  useEffect(() => {
    cards.forEach(({id, location, title}) => {
      const customIcon = leaflet.icon({
        iconUrl: `${
          id === activeCardId && isMainMap
            ? `./img/pin-active.svg`
            : `./img/pin.svg`
        }`,
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
        .addTo(map.current)
        .bindPopup(title);
    });
  }, [activeCardId, cards, isMainMap]);

  return (
    <section className="property__map map" id="map" style={style}></section>
  );
};

export default Map;
