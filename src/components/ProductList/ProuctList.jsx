/* eslint-disable react/prop-types */
export default function ProductList({ products }) {
  return (
    <ul className="container mx-auto mt-8 flex flex-col items-center justify-center">
      {products.map((product) => (
        <li key={product.id} className="border-y py-2">
          {product.name} {product.price}
        </li>
      ))}
    </ul>
  );
}
