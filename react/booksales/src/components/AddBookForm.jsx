// src/components/AddBookForm.jsx
import { useState } from "react";

function AddBookForm({ onAddBook }) {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: new Date().getFullYear(),
    description: "",
    image: "https:images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: name === "year" ? parseInt(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(newBook);

    // Reset form
    setNewBook({
      title: "",
      author: "",
      year: new Date().getFullYear(),
      description: "",
      image: "https:images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
    });
  };

  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Tambah Buku Baru</h5>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="title" className="form-label">
                  Judul
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={newBook.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="author" className="form-label">
                  Penulis
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="year" className="form-label">
                  Tahun
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="year"
                  name="year"
                  value={newBook.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-12">
                <label htmlFor="description" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  value={newBook.description}
                  onChange={handleInputChange}
                  rows="3"
                  required
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-success mt-2"
                  disabled={
                    !newBook.title || !newBook.author || !newBook.description
                  }
                >
                  Simpan Buku
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBookForm;
