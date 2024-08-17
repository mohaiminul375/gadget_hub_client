const ProductCard = ({product}) => {
    const {name,image,description,brand,category,price,ratings,createdAt}=product;
    console.log(createdAt)
  return (
    <div className="card bg-base-100 w-full md:w-96 shadow-xl border border-gray-700">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#4A249D] font-bold">{name}</h2>
        <p>{description}</p>
        <div className="font-medium text-[#4A249D]">
            <p>Rating: {ratings}</p>
            <p>Brand: {brand}</p>
            <p>category: {category}</p>
            <p>Price: ${price}</p>
            <p>Posted Date: {createdAt.slice(0,10)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
