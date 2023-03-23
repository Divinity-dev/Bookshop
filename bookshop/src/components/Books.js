/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './Books.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../redux/Book/BookSlice';

function Books() {
  const [search, setsearch] = useState('');
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="Books">
      <input placeholder="Search Books by title" className="input" type="text" onChange={(e) => setsearch(e.target.value)} />
      {
      books.filter((user) => user.title.toLowerCase().includes(search)).map((book) => (
        <div className="book-container" key={book.id}>
          <h3>{book.title}</h3>
          <Link to={`/Book/${book.id}`}>
            <img src={book.image_url} alt="" />
          </Link>
          <h4>{book.genres}</h4>
        </div>
      ))
}
    </div>
  );
}

export default Books;
