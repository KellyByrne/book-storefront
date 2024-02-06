import axios from 'axios';

export const getBooks = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/books');
        return response.data;
    } catch (err) {
        console.log('err', err);
    }
}

export const getOneBook = async (id) => {
    const response = await axios.get(`http://localhost:3000/api/book/${id}`);
    return response.data;
}

export const addBook = async (newBook) => {
    console.log(newBook);
    try {
        const response = await axios.post(`http://localhost:3000/api/books`, newBook);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log('err', err);
    }
}



