import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function GetProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(1).map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
