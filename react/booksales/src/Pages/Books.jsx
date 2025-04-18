import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Books() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="display-5 fw-bold text-center mb-5">
          Our Book Collection
        </h1>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div className="col" key={idx}>
              <BookCard />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Books;
