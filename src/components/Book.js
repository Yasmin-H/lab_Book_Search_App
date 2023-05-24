const Book = ({book}) => {
    return (

        <>
        <p> title: {book.title}</p>
        <p>genre: {book.bookshelves}</p>
        <p>subjects: {book.subjects}</p>
        <img src={book.formats["image/jpeg"]}/>
        

        <hr />
        </>

    
      );
}
 
export default Book;