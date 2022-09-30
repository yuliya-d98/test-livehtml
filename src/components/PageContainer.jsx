import { Outlet } from 'react-router-dom';
import Header from './Header';
import '../styles/PageContainer.scss';
import SearchBar from './SearchBar';

const PageContainer = () => {
  return (
    <div className='page-container__container'>
      <Header />
      <SearchBar />
      <Outlet />
    </div>
  )
}

export default PageContainer;