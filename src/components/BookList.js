import Book from "./Book";

const BookList = ({books}) => {

    
    const bookComponent = books.results.map((result) => <Book book={result}/> )

    return (
        <>
        <p>Your Search Result</p>
         <ul>{bookComponent}</ul>
        </>
      );
}
 
export default BookList;