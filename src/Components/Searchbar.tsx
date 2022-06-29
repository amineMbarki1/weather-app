import React, { useContext } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

import { WeatherContext } from '../context/WeatherContext';

import '../styles/Searchbar.scss';

interface Props {
  openSearchbar: boolean;
  setOpenSearchbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Searchbar: React.FC<Props> = ({ openSearchbar, setOpenSearchbar }) => {
  const weatherContext = useContext(WeatherContext);

  console.log(weatherContext);

  return (
    <div className={`search-bar ${openSearchbar ? 'search-bar--open' : 'search-bar--closed'}`}>
      <AiOutlineClose onClick={() => setOpenSearchbar(false)} className="search-bar__close" />

      <form className="search-box">
        <div className="search-box__input-container">
          <AiOutlineSearch />
          <input className="search-box__input" type="text" placeholder="Search location" />
        </div>
        <input type="submit" value={'Search'} className="search-box__button" />
      </form>
    </div>
  );
};
export default Searchbar;
