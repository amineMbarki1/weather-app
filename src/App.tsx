import React, { useState } from 'react';

import Sidebar from './Components/Sidebar';
import Searchbar from './Components/Searchbar';
import DailyWeatherItem from './Components/DailyWeatherItem';
import HighlightItem from './Components/HighlightItem';
import WeatherProvider from './context/WeatherContext';

import './styles/App.scss';

function App() {
  const [openSearchbar, setOpenSearchbar] = useState<boolean>(false);

  return (
    <WeatherProvider>
      <div className="App">
        <div className="main-container">
          <Searchbar openSearchbar={openSearchbar} setOpenSearchbar={setOpenSearchbar} />
          <Sidebar openSearchbar={openSearchbar} setOpenSearchbar={setOpenSearchbar} />
          <main className="main-content">
            <div className="main-content__container">
              <section className="main-content__daily-weather">
                <DailyWeatherItem />
                <DailyWeatherItem />
                <DailyWeatherItem />
                <DailyWeatherItem />
                <DailyWeatherItem />
              </section>
              <section className="main-content__highlights">
                <h2>Today's Higlights</h2>
                <div>
                  <HighlightItem />
                  <HighlightItem />
                  <HighlightItem />
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
