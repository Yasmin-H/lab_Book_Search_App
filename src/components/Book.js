const Book = ({book}) => {
    return (

        <>
        <p> title: {book.title}</p>
        <p>genre: {book.bookshelves}</p>
        <p>subjects: {book.subjects}</p>
        <hr />
        </>

    
      );
}
 
export default Book;