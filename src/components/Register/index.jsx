import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

async function doRegister ({ email, password, name }) {
  const response = await fetch("https://6390373c0bf398c73a805426.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      password,
      name
    }),
  });
  const data = await response.json();
  return data;
  
}

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const [isRegistered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    doRegister({ email, password, name })
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
        setRegistered(true)
      });

      window.location.replace('/login');
  }

  return (
    <div className="register">
      <div className="container justify-content-center">
        <div className="row align-items-center">
          <div className="col-md-6 image-plane">
            <img src="./images/img-regis.png" alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="form-signin">
              <h3 className="fw-500">
                Register
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mt-3">
                  <input type="text" name="username" id="username" className="form-control" />
                  <label htmlFor="username">Enter your username</label>
                </div>
                <div className="form-floating mt-3">
                  <input type="text" name="name" id="name" className="form-control" required onChange={(e) => setName(e.target.value)} value={name}/>
                  <label htmlFor="name">Enter your name</label>
                </div>
                <div className="form-floating mt-3">
                  <input type="email" name="email" id="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} value={email} />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mt-3">
                  <input type="password" name="password" id="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} value={password} />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-check mt-3">
                  <input type="checkbox" className="form-check-input" id="flexCheckDefault" required />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I agree with terms and conditions
                  </label>
                </div>
                <a href="/login">asd</a>
                <input type="submit" className="w-100 btn btn-lg btn-primary mt-3" value={isLoading ? "Loading" : "Register"} />
                {/* <button className="w-100 btn btn-lg btn-primary mt-3">
                  Sign Up
                </button> */}
              </form>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
