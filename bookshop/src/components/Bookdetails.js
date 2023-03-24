import './Bookdetails.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchBookDetails } from '../redux/Book/BookdetailSlice';

function Bookdetails() {
  const dispatch = useDispatch();
  const { bookDetails } = useSelector((state) => state.bookDetails);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);
  return (
    <div className="Details">
      <Link to={`/Books/${id}`}><img src="https://cdn-icons-png.flaticon.com/512/93/93634.png" alt="back arrow" className="Back-arrow" /></Link>
      <div key={bookDetails.id} data-testid="test1">
        <h3>{bookDetails.title}</h3>
        <img src={bookDetails.image_url} alt="book" className="Image2" />
        <h3>{bookDetails.genres}</h3>
        <p>{bookDetails.description}</p>
      </div>
    </div>
  );
}

export default Bookdetails;
