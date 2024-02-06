import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";


function CartItem({book, deleteItem, changeQuantity}) {

    return (
        <div className="border-4 border-green-600 mb-6 flex items-center justify-around">
            <div><img className="max-h-10"  src={book.book_cover}/></div>
            <div>
                <p>{book.title}</p>
                <p>{book.author_fname + ' ' + book.author_lname}</p>
                <p>Price per unit: {book.price}</p>
            </div>
            <div></div>
            <div className="">
                <div className="flex justify-around">
                    <div>Quantity: </div>
                    <div onClick={() => changeQuantity('add', book)}><IoIosAddCircleOutline /></div>
                    <div>{book.quantity}</div>
                    <div onClick={() => changeQuantity('remove', book)}><IoMdRemoveCircleOutline /></div>
                </div>
                <div>Total Price: {book.price * book.quantity} </div>
                <div onClick={deleteItem}><IoIosCloseCircleOutline /></div>
            </div>
        </div>
    );
}

export default CartItem;