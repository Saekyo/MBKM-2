import Footer from "../components/Footer";
import Header from "../components/Header";

function Team() {
  return (
    <>
      <div className="container">
        <Header />

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

        <Footer />
      </div>
    </>
  );
}

export default Team;
