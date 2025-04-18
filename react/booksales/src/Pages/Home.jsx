import Hero from '../components/Hero';
import BestSeller from '../components/BestSeller';
import BookCard from '../components/BookCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Header />
        <Hero />
        <BestSeller />
        
        <div className="album py-5 bg-body-tertiary">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {Array.from({ length: 6 }).map((_, idx) => (
                <div className="col" key={idx}>
                    <BookCard />
                </div>
                ))}
            </div>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Home;