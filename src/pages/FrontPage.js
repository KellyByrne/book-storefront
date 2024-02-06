import BookTile from '../components/BookTile';
import {useEffect, useState} from 'react';
import Menu from '../components/Menu';
import '../css/BookTile.css';
import {getBooks} from '../api';


function FrontPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((res) => {
         setBooks(res);
       });
    }, []);

    const renderedContent = books.map((book) => {
        return(
            <BookTile key={book.id} book={book}/>
        )
    });

    return(
        <div>
            <Menu />
            <div className="flex space-evenly">
                {renderedContent}
            </div>
        </div>
    )
}

export default FrontPage;