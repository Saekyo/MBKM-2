// src/pages/Home.jsx
import { useState } from "react";
import Hero from "../Components/Hero";
import BestSeller from "../Components/BestSeller";
import BookCard from "../Components/BookCard";
import books from "../Utils/books";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {
  const [booksList] = useState(books);

  return (
    <>
      <Header />
      <Hero />
      <BestSeller />

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {booksList.slice(0, 6).map((book) => (
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

export default Home;
