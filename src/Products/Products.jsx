import "./Product.css";

const Products = ({ result }) => {
  console.log(result)
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
};

export default Products;