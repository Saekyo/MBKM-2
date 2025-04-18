import { useState } from "react";
import BookCard from "../Components/BookCard";
import AddBookForm from "../Components/AddBookForm";
import books from "../Utils/books";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

function Books() {
  const [booksList, setBooksList] = useState(books);
  const [showForm, setShowForm] = useState(false);

  const handleAddBook = (newBook) => {
    const bookToAdd = {
      ...newBook,
      id:
        booksList.length > 0
          ? Math.max(...booksList.map((book) => book.id)) + 1
          : 1,
    };

    setBooksList([...booksList, bookToAdd]);
    setShowForm(false);
  };

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-5 fw-bold">Koleksi Buku Kami</h1>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Tutup Form" : "Tambah Buku"}
          </button>
        </div>

        {showForm && <AddBookForm onAddBook={handleAddBook} />}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {booksList.map((book) => (
            <div className="col" key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
