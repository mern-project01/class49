import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/AuthContext";

const Resitation = () => {
  const { createUser } = useContext(UserContext);
  const handleResitation = (event) => {
    event.preventDefault();

    const eventTarget = event.target;
    const name = eventTarget.name.value;
    const email = eventTarget.email.value;
    const password = eventTarget.password.value;

    console.log(name, email, password);

    //creat user

    //start to use firebase
    // createUserWithEmailAndPassword(auth, email, password)
    // .then((result) => {
    //   // Signed up
    //   const user = result.user;
    //   console.log(user);
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        // ...
        alert("your resitation done");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-96 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-center text-3xl font-bold mt-5">Resitetion</h1>
          <form onSubmit={handleResitation} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to="/Login" className="label-text-alt link link-hover">
                  Alrady have an account.Please login
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submite</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resitation;
