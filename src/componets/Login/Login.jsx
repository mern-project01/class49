import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Login = () => {
  const { createLogin } = useContext(UserContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const eventTarget = event.target;
    const email = eventTarget.email.value;
    const password = eventTarget.password.value;

    console.log(email, password);

    // create login
    createLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("done");
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-96 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center text-3xl font-bold mt-5">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <Link
                  to="/Resitation"
                  className="label-text-alt link link-hover"
                >
                  New to website?Please Resitar.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
