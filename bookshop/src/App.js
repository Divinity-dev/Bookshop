import './App.css';
import { Routes, Route } from 'react-router-dom';
import Favourites from './components/Favourites';
import Books from './components/Books';
import Footer from './components/footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
