import { useEffect } from "react";

const Home = () => {
  // load data from server
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <section className="pt-20">
      Home
      {/* products */}
      <section>
        <div>
          <h2 className="text-center text-4xl font-extrabold">All Products</h2>
        </div>
      </section>
      {/* All Products */}
      <section></section>
    </section>
  );
};

export default Home;
