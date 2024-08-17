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
// pagination
const [itemPerPg,setItemPerPg]=useState(10);
const [count, setCount] = useState(0);
const [currentPg, setCurrentPg] = useState(1);
  // search product name
  const searchProduct = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    const product_name = e.target.name.value;
    setSearch(product_name);
  };
  // pagination
  const handlePaginationBtn=(currentBtn)=>{
    setCurrentPg(currentBtn)
  }
// page number
const numberOfPages = Math.ceil(count / itemPerPg);
const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);
  // load data from server
  useEffect(() => {
    fetch(
      `https://gadget-hub-server-seven.vercel.app/products?page=${currentPg}&size=${itemPerPg}&name=${search}&sort_date=${date}&sort_price=${price}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      // setCount(data.length)
      });
  }, [search, date, price,currentPg,itemPerPg]);

 //load data for manage pagination
 useEffect(()=>{
  fetch(`https://gadget-hub-server-seven.vercel.app/products?name=${search}&sort_date=${date}&sort_price=${price}`)
  .then(res=>res.json())
  .then(data=>setCount(data.length))
 },[search,date,price])


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
          <option value="low_to_high">Low to High</option>
          <option value="high_to_low">Hight to Low</option>
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
          <option value="newest_first">Newest First</option>
          <option value="older_first">Older First</option>
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
      {/* pagination */}
      <section>
        <div className="flex justify-center mt-12">
          {/* Previous*/}
          <button
            disabled={currentPg === 1}
            onClick={() => handlePaginationBtn(currentPg - 1)}
            className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-[#247CFF] hover:text-white"
          >
            <div className="flex items-center -mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>

              <span className="mx-1">previous</span>
            </div>
          </button>
          {/*pagination number */}
          {pages.map((btnNum) => (
            <button
              onClick={() => handlePaginationBtn(btnNum)}
              key={btnNum}
              className={`hidden ${
                currentPg === btnNum ? "bg-[#247CFF] text-white" : ""
              } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-[#247CFF]  hover:text-white`}
            >
              {btnNum}
            </button>
          ))}
          {/* Next */}
          <button
            disabled={currentPg === numberOfPages}
            onClick={() => handlePaginationBtn(currentPg + 1)}
            className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-[#247CFF] disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
          >
            <div className="flex items-center -mx-1">
              <span className="mx-1">Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-1 rtl:-scale-x-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </section>
    </section>
  );
};

export default AllProducts;
