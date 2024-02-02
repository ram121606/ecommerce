/* eslint-disable react/prop-types */
export default function Card({ product }) {
  const category = product.category;
  console.log(category);
  return (
    <a
      href={"/products/" + product.id}
      className="card w-full bg-base-200 hover:shadow-md hover:scale-105 transform transition duration-5"
    >
      <figure>
        <img
          src={product.image}
          alt={product.title}
          width={800}
          height={400}
          className="h-60 object-contain"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.title}
          {category === `men's clothing` || category === "electronics" ? (
            <div className="badge badge-warning bg-orange-500">HOT</div>
          ) : (
            <div className="badge badge-neutral">OLD</div>
          )}
        </h2>
        <h4 className="font-bold badge badge-xl">${product.price}</h4>
        <p>{product.description}</p>
      </div>
    </a>
  );
}
