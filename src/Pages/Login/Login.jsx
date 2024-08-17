import { useContext } from "react";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { login,googleLogIn } = useContext(AuthContext);
  // submit
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
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
//   google login
const handleGoogleLogin = () => {
    googleLogIn()
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
        <h2 className="text-center text-3xl font-bold text-[#55E6A5]">Login</h2>
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
              LogIn
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

      {/* google login */}
      <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center justify-center  w-full px-6 py-2.5 bg-[#55E6A5] rounded-md font-semibold text-white"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-base font-semibold  text-center text-white">
          {" "}
          Are you new here?{" "}
          <Link to="/register" className="text-[#55E6A5] underline">
            Please register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
