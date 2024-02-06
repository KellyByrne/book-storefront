import {useState} from 'react';
import Button from '../components/Button';
import {addBook} from '../api';
import '../css/App.css';

function CreateBook() {
    const [formValues, setFormValues] = useState({
        title: "",
        authorFname: "",
        authorLname: "",
        year: "",
        pages: "",
        imgCover: "",
        genre: "",
        price: ""
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBook = {
                "title": formValues.title, 
                "author_fname": formValues.authorFname, 
                "author_lname": formValues.authorLname, 
                "year_published": formValues.year,
                "pages": formValues.pages, 
                "book_cover": formValues.imgCover, 
                "genre": formValues.genre,
                "price": formValues.price
        };

        addBook(newBook).then(() => {
            setFormValues({
                title: "",
                authorFname: "",
                authorLname: "",
                year: "",
                pages: "",
                imgCover: "",
                genre: "",
                price: ""
              });
        })
     };

    return(
        <form className="block" onSubmit={handleSubmit}>
            <h1>Create New Book in Store</h1>
            <label className="block mt-2.5">Book Title</label>
            <input className="block" value={formValues.title} onChange={(e) => setFormValues({...formValues, title: e.target.value})}/>
            <label className="block mt-2.5">Book Author First Name</label>
            <input className="block" value={formValues.authorFname} onChange={(e) => setFormValues({...formValues, authorFname: e.target.value})}/>
            <label className="block mt-2.5">Book Author Last Name</label>
            <input className="block" value={formValues.authorLname} onChange={(e) => setFormValues({...formValues, authorLname: e.target.value})}/>
            <label className="block mt-2.5">Year Published</label>
            <input className="block" value={formValues.year} onChange={(e) => setFormValues({...formValues, year: e.target.value})}/>
            <label className="block mt-2.5"># of pages</label>
            <input className="block" value={formValues.pages} onChange={(e) => setFormValues({...formValues, pages: e.target.value})}/>
            <label className="block mt-2.5">Book Cover URL</label>
            <input className="block" value={formValues.imgCover} onChange={(e) => setFormValues({...formValues, imgCover: e.target.value})}/>
            <label className="block mt-2.5">Genre</label>
            <input className="block" value={formValues.genre} onChange={(e) => setFormValues({...formValues, genre: e.target.value})}/>
            <label className="block mt-2.5">Price</label>
            <input className="block" value={formValues.price} onChange={(e) => setFormValues({...formValues, price: e.target.value})}/>
            <Button primary>Add Book</Button>
        </form>
    )
}

export default CreateBook;