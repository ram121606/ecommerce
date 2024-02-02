import { useState } from "react";

export default function SizeComponent() {
  //   const [css, setCss] = useState("");
  //   const [isActive] = useState(false);
  const sizes = ["xs", "s", "m", "l", "xl"];
  //   const handleClick = (size) => {
  //     console.log(size);
  //     setCss(size === isActive ? "bg-black text-white" : "");
  //     console.log(css);
  //   };

  return (
    <>
      <h3>Size</h3>
      <div className="flex flex-row gap-3 my-2">
        {sizes.map((size) => (
          <button
            id={size}
            className={`p-3 badge rounded-badge hover:border-black text-sm`}
            key={size}
          >
            {size}
          </button>
        ))}
      </div>
    </>
  );
}
