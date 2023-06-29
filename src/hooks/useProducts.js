import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3001/products";

export default function useFetch() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return products;
}
