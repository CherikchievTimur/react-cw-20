import './App.css';
import { Routes, Route } from 'react-router-dom';
import CheckOutPage from './pages/checkoutPage/CheckOutPage';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
      </Routes>
    </div>
  );
}

export default App;
