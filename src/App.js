import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import MainPage from './pages/Blank';
import HowTo from './pages/MainInf';
import AboutUs from './pages/About'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<MainPage />} />
                    <Route path='/info' element={<HowTo />} />
                    <Route path='/links' element={<MainPage />} />
                    <Route path='/gallery' element={<MainPage />} />
                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/wiki' element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
