function BookCard({ book }) {
  return (
    <div className="card shadow-sm h-100">
      <img
        height={225}
        className="bd-placeholder-img card-img-top"
        src={book.image}
        alt={book.title}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{book.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{book.author}, {book.year}</h6>
        <p className="card-text flex-grow-1">{book.description}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
            >
              Lihat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;