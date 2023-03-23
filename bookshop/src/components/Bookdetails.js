import './Bookdetails.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchBookDetails } from '../redux/Book/BookdetailSlice';

function Bookdetails() {
  const dispatch = useDispatch();
  const { bookDetails } = useSelector((state) => state.bookDetails);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchBookDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      <div key={bookDetails.id}>
        <h3>{bookDetails.title}</h3>
        <img src={bookDetails.image_url} alt="book" />
        <h3>{bookDetails.genres}</h3>
        <p>{bookDetails.description}</p>
      </div>
    </div>
  );
}

export default Bookdetails;
