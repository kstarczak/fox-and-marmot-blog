import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Fox and Marmot blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" className="new-blog-button">New Blog</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;
