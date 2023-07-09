import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd ,AiOutlineMenuUnfold} from "react-icons/ai";
import "./Nav.css";

const Nav = ({ handleInputChange, query ,check,onChange,focus}) => {
  console.log(check)
  return (
    <nav className="nav">
    <div className="menu">
    <a href="">
        <AiOutlineMenuUnfold className="nav-icons" onClick={onChange}/>
        </a>
    </div>
      <div className="nav-container">
        <input
        ref={focus}
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;