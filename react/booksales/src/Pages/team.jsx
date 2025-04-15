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

        <div className="container my-5">
          <h1 className="text-center mb-4">Our Team</h1>
          <div className="row justify-content-center">
            <div className="col-md-3 mb-4">
              <div className="card text-center shadow-sm">
                <img
                  src={"https:i.pravatar.cc/150?img=1"}
                  className="card-img-top rounded-circle mx-auto mt-3"
                  alt="Team Member"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">Saekyo </h5>
                  <p className="card-text">Role: Developer</p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    View Profile
                  </a>
                </div>
              </div>
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
