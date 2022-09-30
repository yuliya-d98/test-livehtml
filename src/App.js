import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    // <HashRouter basename="/">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<p>Главная</p>} />
          <Route path="catalog" element={<p>Каталог инструментов</p>} />
          <Route path="garden" element={<p>Все для сада</p>} />
          <Route path="hand-tool" element={<p>Ручной интрумент</p>} />
          <Route path="electricity" element={<p>Электрика</p>} />
          <Route path="delivery" element={<p>Доставка</p>} />
          <Route path="payment" element={<p>Оплата</p>} />
          <Route path="about-us" element={<p>О нас</p>} />
          <Route path="error" element={<p>Ошибка!</p>} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </HashRouter>
  );
}

export default App;
