import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [product, setProduct] = useState({});

  let clothings = ['shirt', 'pant', 'tshirt', 'sweatshirt', 'hoodie']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/10");
        const data = await response.json();
        // console.log({
        //   name: data.title,
        //   image: data.image,
        //   desc: data.description,
        //   link: data.link,
        // });
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setProduct]);

  return (
    <div>
        
    </div>
  );
}
