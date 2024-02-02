import { useState } from "react";

export default function EndProduct({ desc }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <h3>Quantity</h3>
      <div className="flex flex-row items-center quantity w-1/4 rounded-full justify-center space-x-5 relative">
        <button type="submit" className="btn btn-ghost">
          -
        </button>
        <h1>{quantity}</h1>
        <button type="submit" className="btn btn-ghost">
          +
        </button>
      </div>
      <p>{desc}</p>
    </>
  );
}
