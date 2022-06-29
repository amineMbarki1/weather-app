import React from 'react';

import shower from '../assets/Shower.png';
import '../styles/DailyWeatherItem.scss';

const DailyWeatherItem: React.FC = () => {
  return (
    <div className="weather-card">
      <span className="weather-card__date">Tomorrow</span>
      <img className="weather-card__img" src={shower} alt="weather" />
      <div className="weather-card__temp">
        <span>16°c</span>
        <span>11°c</span>
      </div>
    </div>
  );
};

export default DailyWeatherItem;
