function Hero() {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di BookStore!
            </h1>
            <p className="lead">
              Jelajahi berbagai koleksi buku dari berbagai genre dan penulis
              terkenal. Dapatkan buku berkualitas dengan harga terbaik hanya di
              BookStore!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Jelajahi Koleksi
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg m-4">
            <img
              className="rounded-lg-3"
              src="https:images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
              alt="Hero"
              width="720"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
