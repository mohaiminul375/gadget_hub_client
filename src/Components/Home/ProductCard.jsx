const ProductCard = ({product}) => {
    console.log(product)
    const {name,image,description,brand,category,price,ratings}=product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border border-gray-700">
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
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
