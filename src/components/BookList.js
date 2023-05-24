import Book from "./Book";

const BookList = ({books}) => {

    
    const bookComponent = books.results.map((result) => <Book book={result}/> )

    return (
        <>
        <p class="search">Your Search Result</p>
          <ul class="background">{bookComponent}</ul>
        </>
      );
}
 
export default BookList;