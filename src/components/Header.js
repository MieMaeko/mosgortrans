import React from 'react';
import '../assets/styles/Header.css'; 
import logo from '../assets/images/logo.svg';
const Header = () => {
  return (
    <header className="header">
      <div className='header_block'>
        <div className="logo">
            <img src={logo} alt="Мосгортранс" />
            <span>Мосгортранс</span>
        </div>
        <nav>
            <ul className='menu'>
              <li><a href="/">О предприятии</a></li>
              <li><a href="/">Пассажирам</a></li>
              <li><a href="/">Работа у нас</a></li>
              <li><a href="/">Услуги</a></li>
              <li><a href="/">Пресс-служба</a></li>
              <li><a href="/">Контакты</a></li>
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;