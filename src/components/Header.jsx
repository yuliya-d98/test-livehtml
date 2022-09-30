import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <div className='header__container'>
        <Links />
        <hr />
        <div className='header__info'>
          <div className='header__banner'></div>
          <Basket />
          <Contacts />
        </div>
      </div>
    </header>
  )
}

export default Header;

const Logo = () => {
  return (
    <Link to='/' className='header__logo'>
      <div className='header__logo-img'></div>
      <h1>Магазин инструмента</h1>
    </Link>
  )
}

const Links = () => {
  const linksInfo = [
    { title: 'Каталог инструментов', href: '/catalog' },
    { title: 'Все для сада', href: '/garden' },
    { title: 'Ручной интрумент', href: '/hand-tool' },
    { title: 'Электрика', href: '/electricity' },
    { title: 'Доставка', href: '/delivery' },
    { title: 'Оплата', href: '/payment' },
    { title: 'О нас', href: '/about-us' },
  ];

  return (
    <div className='header__links'>
      {linksInfo.map((link) =>
        <NavLink to={link.href} key={link.href} className={({ isActive }) => isActive ? `header__links-link active` : 'header__links-link'}>
          {link.title}
        </NavLink>
      )}
      <button className='header__links-btn first'>Вход</button>
      <p className='header__links-btn'>|</p>
      <button className='header__links-btn'>Регистрация</button>
    </div>
  )
}

const Basket = () => {
  const basketInfo = [
    { text: '3 шт. / 17 250 р.', icon: 'cart' },
    { text: 'Избранное (7)', icon: 'star' },
    { text: 'К сравнению (5)', icon: 'balance' },
  ]
  return (
    <div className='header__basket'>
      <div className='header__basket_info'>
        {basketInfo.map(info =>
          <p className={`item ${info.icon}`} key={info.text}>
            {info.text}
          </p>
        )}
      </div>
      <div className='header__basket_photos'>
        {['item1', 'item2', 'item3'].map(item => <div className={`item ${item}`} key={item}></div>)}
      </div>
    </div>
  )
}

const Contacts = () => {
  const [city, setCity] = useState('Москва');
  const [isOpen, setIsOpen] = useState(false);
  const toggleInput = () => {
    setIsOpen(!isOpen)
  }

  const setOtherCity = (e) => {
    setCity(e.target.value);
    setIsOpen(false);
  }

  return (
    <div className='header__contacts'>
      <div className='header__contacts_texts'>
        <span className='header__contacts_text bold'>Время работы:</span>
        <span className='header__contacts_text'>10:00 — 19:00</span>
      </div>
      <a className='header__contacts_number' href='tel:+84957212525'>8 495 721-25-25</a>
      <hr />
      <div className='header__contacts_texts'>
        <span className='header__contacts_text'>{city}</span>
        <span className={`header__contacts_text input ${isOpen && 'opened'}`} onClick={toggleInput}>сменить</span>
      </div>
      {isOpen && <div className='header__contacts_inputs'>
        {['Москва', 'Минск', 'Другой город'].map(city => <React.Fragment key={city}>
          <input type='radio' value={city} name='city' id={city} onChange={setOtherCity} />
          <label htmlFor={city}>{city}</label>
        </React.Fragment>)}
      </div>}
    </div>
  )
}
