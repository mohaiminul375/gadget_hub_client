import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  // search
  const [search, setSearch] = useState("");
  // date sorting
  const [date, setDate] = useState("");
  // price sorting
  const [price, setPrice] = useState("");
  console.log(date);
  console.log(price);
  // search product name
  const searchProduct = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const product_name = e.target.name.value;
    setSearch(product_name);
  };

  // load data from server
  useEffect(() => {
    fetch(`http://localhost:3000/products?name=${search}&sort_date=${date}&sort_price=${price}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [search,date,price]);
  return (
    <section className="mt-10">
      {/* search and filtering */}
      <section className="mt-10 flex flex-col md:flex-row gap-2 justify-center py-5 rounded-md bg-base-200 shadow-2xl">
        {/* search */}
        <div className="">
          <form onSubmit={searchProduct}>
            <div className="join">
              <input
                name="name"
                className="input input-bordered join-item"
                placeholder="Product name"
              />
              <button className="btn join-item rounded-r-full border-[#4A249D]">
                Search
              </button>
            </div>
          </form>
        </div>
        {/* sorting */}
        {/* price */}
        <select
          defaultValue={price}
          onChange={(e) => setPrice(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Price
          </option>
          <option value='low_to_high'>Low to High</option>
          <option value='high_to_low'>Hight to Low</option>
        </select>
        {/* date */}
        <select
          defaultValue={date}
          onChange={(e) => setDate(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option disabled selected>
            Sorting Date
          </option>
          <option value='newest_first'>Newest First</option>
          <option value='older_first'>Older First</option>
        </select>
      </section>

      {/* All Products */}
      <section className="mt-10">
        <div className="">
          <h2 className="text-center text-4xl font-extrabold">All Products</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AllProducts;
