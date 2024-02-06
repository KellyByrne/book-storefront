import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {getOneBook} from '../api';
import BookTile from '../components/BookTile';

function ShowBookPage() {
    const [book, setBook] = useState([]);
    let {id}  = useParams();

    useEffect(() => {
        getOneBook(id).then((res) => {
         setBook(res);
       });
    }, []);


    return(
        <div>
            <BookTile book={book} extended={true}/>
        </div>
    );
}

export default ShowBookPage;