import './Navbar.css';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const url = "https://img.freepik.com/free-vector/gradient-book-company-logo-template_23-2148807612.jpg?w=900&t=st=1679439998~exp=1679440598~hmac=ac618481ea80875b02de103b619ea72de86c8e3bb7eb48095e2ac7d7f3ffc51d";
  return (
    <div className='Navbar'>
        <img src={url} alt='logo' />
        <div className='Navbar-child'>
            <ul>
                <li>
                   <NavLink className="anchor" to="/Books">
                   Books
                   </NavLink>
                </li>
                <li>
                  <NavLink className="anchor" to="/favourites">
                  favourites
                  </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
