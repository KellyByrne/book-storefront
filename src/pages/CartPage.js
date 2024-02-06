import {useState} from 'react';
import CartItem from '../components/CartItem';
import Menu from '../components/Menu';
// import {getOneBook} from '../api';

function CartPage() {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    
    const deleteItem = (id) => {
        console.log(id);
        const newCart = cartItems.filter((item) => {
            return item.id != id;
        })


        localStorage.setItem('cartItems', JSON.stringify(newCart));
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    };

    const changeQuantity = (task, book) => {
        const currentCart = JSON.parse(localStorage.getItem('cartItems'));

        const updatedCart = currentCart.map((item) => {
            if (item.id == book.id) {
                if (task == 'add') {
                    item.quantity += 1;
                    return item;
                } else {
                    item.quantity -= 1;
                    return item;
                } 
            } else {
                return item;
            }
        })
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        setCartItems(JSON.parse(localStorage.getItem('cartItems')));
    };

    // {title:"yay", authorFname:"first", authorLname:"lastname", book_cover: 'https://img.thriftbooks.com/api/images/m/4c00a79f8230f93dc3c3935a6b63203198526ab1.jpg'}
    const renderedItems = 
        cartItems.map((item) => {
            return <CartItem key={item.id} book={item} deleteItem={() => deleteItem(item.id)} changeQuantity={changeQuantity}/>
        });

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    

    return(
        <div>
            <Menu/>
            {renderedItems}
            <div>Total Price: {totalPrice}</div>
        </div>
    );
}

export default CartPage;