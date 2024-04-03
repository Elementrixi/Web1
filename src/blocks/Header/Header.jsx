import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export const Header = () => {
  return (
    <header className="header content">
      <aside className="header__left">
        <a href="#" className="icon-kayak"></a>
        {/* <img src="../assets/kayak.png" alt="kayak logo" /> */}
      </aside>
      <ul className="header__right header__open">
        <li><Link to="/">Про нас</Link></li>
        <li><Link to="/order">Замовлення</Link></li>
        <li><Link to="/benefits">Переваги</Link></li>
        <li><Link to="/contacts">Контакти</Link></li>
      </ul>
      <div className="burger">
        <img src="../../assets/burger.png" alt="burger" />
        <img src="../../assets/close.png" alt="close_burger" />
      </div>
    </header>
  );
};
