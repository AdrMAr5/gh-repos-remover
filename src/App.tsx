import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/manage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
