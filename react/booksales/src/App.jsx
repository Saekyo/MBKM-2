function App() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none align-items-center"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#74C0FC" }}
              ></i>
              <span className="ms-2 fs-4">BookStore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Temukan Buku Favoritmu di BookStore!
              </h1>
              <p className="lead">
                Jelajahi berbagai koleksi buku dari berbagai genre dan penulis
                terkenal. Dapatkan buku berkualitas dengan harga terbaik hanya
                di BookStore!
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

        {/* Best Seller Section */}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Buku Terlaris</h1>
              <p className="lead text-body-secondary">
                Temukan buku-buku pilihan yang paling banyak diminati pembaca.
                Cocok untuk dijadikan referensi bacaanmu selanjutnya!
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  Lihat Detail
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Koleksi Lainnya
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Book Cards */}
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div className="col" key={idx}>
                  <div className="card shadow-sm">
                    <img
                      height={225}
                      className="bd-placeholder-img card-img-top"
                      src="https:images.unsplash.com/photo-1618365908648-e71bd5716cba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGJvb2tzfGVufDB8fDB8fHww"
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Buku ini menghadirkan cerita yang inspiratif dan penuh
                        makna. Sangat cocok untuk kamu yang mencari bacaan
                        berkualitas.
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Lihat
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                          >
                            Edit
                          </button>
                        </div>
                        <small className="text-body-secondary">
                          9 menit lalu
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Book
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">
                Contact
              </a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">&copy; 2025 Saekyo</p>
        </footer>
      </div>
    </>
  );
}

export default App;
