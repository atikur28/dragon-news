import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createdUser} = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const name = form.get('name');
    const photoUrl = form.get('photoUrl');
    console.log(name, photoUrl, email, password);

    createdUser(email, password)
      .then(result => {
        console.log(result.user);
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
          Register your account
        </h1>
        <hr />
        <form onSubmit={handleRegister}>
          <div className="mt-10">
            <h4 className="text-lg font-semibold">Your Name</h4>
            <input
              className="py-4 bg-[#F3F3F3] px-4 w-[260px] md:w-[500px] mt-3 rounded-md"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mt-5">
            <h4 className="text-lg font-semibold">Photo URL</h4>
            <input
              className="py-4 bg-[#F3F3F3] px-4 w-[260px] md:w-[500px] mt-3 rounded-md"
              type="text"
              name="photoUrl"
              placeholder="Enter your photo url"
            />
          </div>
          <div className="mt-5">
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
          <div className="flex items-center gap-2 my-3">
            <input type="checkbox" className="checkbox checkbox-info" required />
            <span className="text-[#706F6F] font-semibold">Accept Term & Conditions</span>
          </div>
          <div className="mt-5">
            <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-white w-full">
            Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
