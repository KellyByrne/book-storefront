import {Link} from 'react-router-dom';
import { IoIosCart } from "react-icons/io";

function Menu() {
    return(
        <div className="flex bg-green-600 mb-3.5 p-3.5 justify-start">
            <div className="flex w-1/3">
                <h1 className="text-3xl font-bold underline text-white">Bennett Book Store</h1>
            </div>
            <div className="flex space-evenly w-1/3 items-center text-white">
                <Link to="/">Home</Link>
                <Link to="/add-book">Add New Book to Store</Link>
            </div>
            <div className="flex w-1/3 justify-end items-center text-white">
                <Link to="/cart"><IoIosCart/></Link>
            </div>
        </div>
    );
}

export default Menu;