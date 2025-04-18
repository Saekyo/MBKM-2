function BookCard() {
  return (
    <>
      <div className="card shadow-sm">
        <img
          height={225}
          className="bd-placeholder-img card-img-top"
          src="/api/placeholder/400/320"
          alt="Book cover"
        />
        <div className="card-body">
          <p className="card-text">
            Buku ini menghadirkan cerita yang inspiratif dan penuh makna. Sangat
            cocok untuk kamu yang mencari bacaan berkualitas.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Lihat
              </button>
            </div>
            <small className="text-body-secondary">9 menit lalu</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
