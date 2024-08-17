import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="pt-20">
      <div className="w-full max-w-sm mx-auto bg-[#4A249D] rounded-lg shadow-2xl p-6 mt-12">
        <h2 className="text-center text-3xl font-bold text-[#55E6A5]">
          Register
        </h2>
        {/* {error && (
         <p className="text-center my-3 text-base font-semibold text-red-600 flex items-center gap-2 justify-center">
           {error}
           <FaRegCircleXmark
             className="text-base cursor-pointer"
             onClick={handleRemoverError}
           />
         </p>
       )} */}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-[#55E6A5]">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="input email"
              className="input input-bordered text-[#55E6A5]"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-[#55E6A5]">
                Password
              </span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="input password"
              className="input input-bordered text-[#1EA9E4]"
              required
            />
          </div>

          <div className="mt-6">
            <button className="w-full text-white px-6 py-2.5 bg-[#55E6A5] rounded-md font-semibold">
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b border-[#55E6A5] lg:w-1/5"></span>

          <p href="#" className="text-xs text-center font-bold text-[#55E6A5]">
            or login with Social Media
          </p>

          <span className="w-1/5 border-b border-[#55E6A5] lg:w-1/5"></span>
        </div>

        {/* <GoogleLogIn></GoogleLogIn> */}

        <p className="mt-8 text-base font-semibold  text-center text-white">
          {" "}
          Already have an account?{" "}
          <Link to="/login" className="text-[#55E6A5] underline">
            please register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
