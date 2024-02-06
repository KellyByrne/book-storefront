import '../css/BookTile.css';
import Button from './Button';
import {Link, useNavigate} from 'react-router-dom';

function BookTile({book, extended}) {
    let navigate = useNavigate();
    const handleClick = () => {
        const currentCart = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (currentCart.length == 0) {
            book.quantity = 1;
            return localStorage.setItem('cartItems', JSON.stringify([...currentCart, book]));
        } else {
            currentCart.map((item) => {
                if ( item.id !== book.id) {
                    book.quantity = 1;
                    return localStorage.setItem('cartItems', JSON.stringify([...currentCart, book]));
                } else if (item.id == book.id) {
                    console.log('id = id', book.id, item.id)
                    item.quantity += 1;
                    return localStorage.setItem('cartItems', JSON.stringify([...currentCart]))
                } 
            });
        }

        // programmatically navigate to cart page
        navigate('/cart');
    };
        

    return( 
        <div>
             <div key={book.id} className="outer-box">
                <img src={book.book_cover} />
                <div>{book.title}</div>
                <div>By: {book.author_fname + ' ' + book.author_lname}</div>
                {extended && 
                <div>
                    <div>Page Length: {book.pages}</div>
                    <div>Year Published: {book.year}</div>
                    <div>Genre: {book.genre}</div>
                </div>
                }
                <div className="flex space-between">
                    {!extended && <Link to={`/book/${book.id}`}><Button secondary>More Info</Button></Link>}
                    <Button primary onClick={handleClick}>Add to Cart</Button>
                </div>
            </div>
        </div>
    );
}

export default BookTile;