import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    // load data from server
    useEffect(() => {
      fetch(`http://localhost:3000/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <section className="mt-10">
      <section>
        <div>
          <h2 className="text-center text-4xl font-extrabold">All Products</h2>
        </div>
      </section>
      {/* All Products */}
      <section>
        <div className="grid md:grid-cols-3 gap-4 mt-10">
            {
                products.map(product=><ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
        </div>
      </section>
    </section>
  );
};

export default AllProducts;
