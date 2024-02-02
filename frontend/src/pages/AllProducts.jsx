import { useEffect, useState } from "react";
import Card from "../components/Card";
import Loading from "../components/Loading";
// import { motion } from "framer-motion";

// const variants = {
//   hidden: { opacity: 0 },
//   animate: { opacity: 1 },
// };

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
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.slice(1).map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Loading />
      </div>
    </>
  );
}
