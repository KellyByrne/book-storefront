import './css/App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import AddBookPage from './pages/AddBookPage';
import CartPage from './pages/CartPage';
import ShowBookPage from './pages/ShowBookPage';

function App() {

    return(
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<FrontPage/>}></Route>
                <Route path="/add-book" element={<AddBookPage/>}></Route>
                <Route path="/cart" element={<CartPage/>}></Route>
                <Route path="/book/:id" element={<ShowBookPage/>}></Route>
           </Routes>
        </BrowserRouter>
    );
}

export default App;