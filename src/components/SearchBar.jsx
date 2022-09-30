import { useState } from 'react';
import '../styles/search.scss';

const SearchBar = () => {
  const [activeItem, setActiveItem] = useState('Перфораторы');
  const tools = ['Перфораторы', 'Дрели', 'Шлифмашины', 'Пистолеты', 'Электропилы', 'Наборы инструментов', 'Аксесуары'];

  return (
    <div className="search__container">
      <div className='search__item icon active'></div>
      {tools.map(tool => <CatalogItem name={tool} key={tool} activeItem={activeItem} setActiveItem={setActiveItem} />)}
      <p className='search__item active'>Распродажа</p>
    </div>
  )
}

export default SearchBar;

const CatalogItem = ({ name, activeItem, setActiveItem }) => {
  return (
    <>
      <input type='radio' value={name} name='catalog-item' id={name} onChange={e => setActiveItem(e.currentTarget.value)} checked={name === activeItem} />
      <label htmlFor={name} className={'search__item'}>{name}</label>
    </>
  )
}