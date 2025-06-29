import { Link } from "react-router-dom";
import "../assets/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
     

      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/news">
          <li>News</li>
        </Link>
        <Link to="/quiz">
          <li>Quiz</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
