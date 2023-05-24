import {useEffect, useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

const url = "https://gutendex.com/books/?search=";

const BookContainer = () => {


    const [searchTerm , setSearchTerm] = useState("hello");
    const [books , setBooks] = useState([]);

    const loadBookData = async ()  => {
        const response = await fetch(url + searchTerm);
        const data = await response.json();
        setBooks(data);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        loadBookData()
    }

// when use effect with the search term being the watched proerty 

    useEffect( () => {
    
    console.log('MyState has changed:', searchTerm);
    }, [searchTerm]);

    return (
        <>
        <div class="bg">
        <h1>BookHub</h1>
        <hr/>
        <h2>Find Your Book Of Choice</h2>
        <p class="main-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
        <form onSubmit={handleFormSubmit} class="box">
            <input 
                type="text"
                name="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
        </form>
        <BookList books={books} class="bg-2" />
        </div>
        </>
      );
}
 
export default BookContainer;