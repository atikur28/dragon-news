import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

    const {logIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
      })
  };

  return (
    <div className="bg-[#F3F3F3] pb-20">
      <div className="py-6">
        <Navbar></Navbar>
      </div>
      <div className="bg-[#fff] w-max mx-auto p-4 md:p-16 mt-20">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mt-7 pb-16">
          Login your account
        </h1>
        <hr />
        <form onSubmit={handleLogin}>
          <div className="mt-10">
            <h4 className="text-lg font-semibold">Email address</h4>
            <input
              className="py-4 bg-[#F3F3F3] px-4 w-[260px] md:w-[500px] mt-3 rounded-md"
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mt-5">
            <h4 className="text-lg font-semibold">Password</h4>
            <input
              className="py-4 bg-[#F3F3F3] px-4 w-[260px] md:w-[500px] mt-3 rounded-md"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mt-5">
            <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white w-full">
              Login
            </button>
          </div>
          <h4 className="text-[#706F6F] font-semibold text-center mt-5">
            Don’t Have An Account ?{" "}
            <Link to="/register">
              <span className="text-red-600">Register</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};

export default Login;
