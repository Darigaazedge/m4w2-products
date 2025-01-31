import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      });
  }, [url]);

  return data;
}
