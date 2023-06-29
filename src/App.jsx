import useProducts from "./hooks/useProducts";

function App() {
  const products = useProducts();
  return (
    <>
      <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.price}
          </li>
        ))}
      </ul>
      ;
    </>
  );
}

export default App;
