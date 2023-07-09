import { useEffect, useRef, useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./Components/Card";
import "./index.css";

function App() {
  const focus=useRef(null)
  useEffect(()=>{
    focus.current.focus();
  })
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const [check,setcheck]=useState(true)

  const onChange=(e)=>{
    setcheck(!check);
    e.preventDefault();
  }
  const onclear=()=>{
setcheck(!check)
  }
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  const filteredItems = products.filter(
    (product) => 
    product.title.toLowerCase().includes(query.toLowerCase())
     
     
  );
  
  

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selectedCategory, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }
console.log(selectedCategory)
    // Applying selected filter
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selectedCategory ||
          color === selectedCategory ||
          company === selectedCategory ||
          newPrice === selectedCategory ||
          title === selectedCategory
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
     
      <Sidebar handleChange={handleChange} check={check} onChange={onChange} onclear={onclear}/>
      <Navigation query={query} handleInputChange={handleInputChange} check={check} onChange={onChange} focus={focus}/>
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;