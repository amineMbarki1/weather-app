import React from 'react';
import { MdMyLocation, MdLocationPin } from 'react-icons/md';

import clear from '../assets/Clear.png';

import '../styles/Sidebar.scss';

interface Props {
  openSearchbar: boolean;
  setOpenSearchbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ openSearchbar, setOpenSearchbar }) => {
  return (
    <div className="sidebar">
      <div className="location-actions">
        <button onClick={() => setOpenSearchbar(true)} className="loaction-actions__search">
          Search for places
        </button>
        <button className="location-actions__current-location location-actions__current-location--round">
          <MdMyLocation />
        </button>
      </div>
      <img src={clear} alt="today's weather" />
      <div className="temperture">
        <span className="temperture__value">15</span>
        <span className="temperture__unit">°c</span>
      </div>
      <span className="weather-desc">Sunny</span>
      <span className="date">Today . Fri, 5 jun</span>
      <span className="location">
        <MdLocationPin />
        sousse
      </span>
    </div>
  );
};

export default Sidebar;
