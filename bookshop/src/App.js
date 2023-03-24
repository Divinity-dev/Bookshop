import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Bookdetails from './components/Bookdetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Book/:id" element={<Bookdetails />} />
        <Route path="/Books/:id" element={<Books />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
