import { useEffect, useState } from "react";
import SizeComponent from "../components/sizeComponent";
import EndProduct from "../components/productEnd";

export default function ProductPage() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products/17");
      const data = await response.json();
      setProduct(data);
      // console.log(product);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="ctr mx-5 h-[100%] rounded-lg my-24">
        <div className="image_container">
          <img
            id="image"
            src={product.image}
            alt="image"
            className="flex-auto"
          />
        </div>
        <div className="description_container mb-4">
          <div className="card shadow-3xl">
            <div className="card-body">
              <h1 className="card-title pt-2 text-4xl">{product.title}</h1>
              <span className="text-3xl">
                RS.{product.price}
                <span className="badge badge-neutral mx-2">Sale</span>
              </span>
              <pre className="underline">Shipping calculated at checkout!!</pre>
              <SizeComponent />
              <EndProduct desc={product.description} />
              <div className="btn btn-ghost mt-2 border-black hover:bg-black hover:text-white">
                Buy now!!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
