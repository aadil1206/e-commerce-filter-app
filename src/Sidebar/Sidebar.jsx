import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { ImCross } from "react-icons/im";

const Sidebar = ({ handleChange,check ,onclear}) => {
  console.log(check)
  return (
    <>
      <section className={check?"sidebar":"sidebarnew"}>
       <div className="clear"><a href="#">
          <ImCross className="icons1" onClick={onclear} />
        </a></div> 
        <div className="logo-container">
          <h1>🛒</h1>

        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;