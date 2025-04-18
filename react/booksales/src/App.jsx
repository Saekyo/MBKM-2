import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './Pages/Books';
import Team from './Pages/team';
import Contact from './Pages/contact';
function App() {
  return (
    <Router>
    <div className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
    </Router>
  );
}


export default App;
