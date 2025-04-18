import Footer from "../components/Footer";
import Header from "../components/Header";

function Contact() {
  return (
    <>
      <Header />

      <div className="container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your message here..."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h5>Reach us at:</h5>
            <p>
              <i className="fa-solid fa-envelope me-2"></i> info@bookstore.com
            </p>
            <p>
              <i className="fa-solid fa-phone me-2"></i> +62 812 3456 7890
            </p>
            <p>
              <i className="fa-solid fa-map-marker-alt me-2"></i> Jakarta,
              Indonesia
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
