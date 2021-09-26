import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { tmpImage } from "../../apis/book";
import { deleteBook, getListBook } from "../../apis/bookService";
import ModalComponent from "../../modal/ModalComponent";
import BookComponent from "./BookComponent";
// import book from "../apis/book";
// import { axios, response } from "axios";

const BookList = ({ match }) => {
  const { path } = match;

  const [books, setBooks] = useState([]);
  
  const [modalShow, setModalShow] = useState({
    show: false,
    id: null,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    getListBook().then((response) => {
      console.log(response.data);
      setBooks(response.data);
    });
  };

  const handleDelete = (id) => {
    setModalShow({
      show: true,
      id,
    });
  };

  const handleDeleteTrue = () => {
    if (modalShow.show && modalShow.id) {
      bookDelete(modalShow.id);
      setModalShow({
        show: false,
        id: null,
      });
    }
  };

  const bookDelete = (id) => {
    return deleteBook(id).then((response) => {
      loadData();
    });
  };

  return (
    <section className="py-5 container mt-5">
      <h3>Books Page</h3>
      <Link to="/books/add" className="btn btn-sm btn-primary mb-3">
        Add Book
      </Link>
      <Row>
        {books.map((book) => (
          <BookComponent
            path={path}
            key={book.id}
            bookId={book.id}
            title={book.title}
            description={book.description}
            pages={book.pages}
            purchaseAmount={book.purchaseAmount}
            price={book.price}
            language={book.language}
            stock={book.stock}
            publisher={book.publisher}
            year={book.year}
            image={tmpImage}
            handleDelete={handleDelete}
          />
        ))}
        {books && !books.length && <h4>No Book on Display</h4>}
      </Row>
      {modalShow.show && (
        <ModalComponent
          show={modalShow}
          handleDeleteTrue={handleDeleteTrue}
          onHide={() => setModalShow(false)}
        />
      )}
    </section>
  );
};
export default BookList;
