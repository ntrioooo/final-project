import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "react-google-login";
import { loginUsers } from "../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { whoAmI } from "../actions/usersAction";

// async function doLogin({ email, password }) {
//   const response = await fetch("http://localhost:8000/login", {
//     // mode: "no-cors",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });
//   const data = await response.json();
//   return data;
// }

async function doLoginWithGoogle(token, email, name) {
  // Sesuaikan endpoint
  const response = await fetch("https://testdev5-production.up.railway.app/api/v1/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      email,
      name,
    }),
  });

  const data = await response.json();
  console.log(data)
  return data.accessToken;
}

function Login() {
  const { loginUsersResult, loginUsersError } = useSelector(
    (state) => state.UsersReducer
  );
  const { whoAmIResult } = useSelector((state) => state.UsersReducer)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const Token = localStorage.getItem("token");

  // console.log(loginUsersResult);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginUsersResult && loginUsersResult.Token) {
      localStorage.setItem("token", loginUsersResult.Token);
      navigate("/profile");
      window.location.reload()
    } else if (loginUsersError) {
      setError(loginUsersError);
    }
  }, [loginUsersResult, loginUsersError]);

  useEffect(() => {
    setIsLoggedIn(!!Token);
  }, [Token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginUsers({
        email,
        password,
      })
    );

    // if(Token === true) {
    //   navigate('/profile')
    // }
    // doLogin({ email, password })
    //   .then((user) => {
    //     if (user) {
    //       localStorage.setItem("token", user.Token);
    //       // navigate('/')
    //     } else {
    //       setError("Email or password is incorrect");
    //     }
    //   })
    //   .catch((err) => console.log(err.message))
    //   .finally(() => setIsLoading(false));
  };

  const haldleSuccessGoogle = (response) => {
    // console.log(response);
    console.log(response.credential);
    if (response.credential) {
      doLoginWithGoogle(response.credential)
        .then((token) => {
          localStorage.setItem('token', `Bearer ${token}`);
          console.log(token);
          setIsLoggedIn(token);
          navigate('/')
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  };

  const haldleFailureGoogle = (response) => {
    console.log(response);
    alert(response);
  };

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsLoading(false);
  }

  // console.log(email, password, Token);

  return (
    <div className="register">
      <div className="container justify-content-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="form-signin">
              <h3 className="fw-500">Welcome back</h3>
              {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mt-3">
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      className="form-control"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <label htmlFor="Email">Email</label>
                  </div>
                  <div className="form-floating mt-3">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <label htmlFor="password">Password</label>
                    {error && (
                      <div className="alert alert-danger mt-3">
                        Password atau email salah
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    {/* <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText="Login with Google"
                      onSuccess={haldleSuccessGoogle}
                      onFailure={haldleFailureGoogle}
                      cookiePolicy="single_host_origin"
                    /> */}
                    <GoogleOAuthProvider
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    >
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          haldleSuccessGoogle(credentialResponse);
                        }}
                        onError={() => {
                          haldleFailureGoogle("Login Failed");
                        }}
                      />
                    </GoogleOAuthProvider>
                  </div>
                  <button
                    type="submit"
                    className="w-100 btn btn-lg btn-primary mt-3"
                  >
                    Sign in
                  </button>
                  <p className="mt-3 text-center">
                    Dont have an account? <a href="/register"> Sign up</a>
                  </p>
                </form>
              ) : (
                <input
                  type="submit"
                  className="btn btn-danger"
                  value="Logout"
                  onClick={handleLogout}
                />
              )}
            </div>
          </div>
          <div className="col-md-6 image-plane">
            <img src="./images/img-regis.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
