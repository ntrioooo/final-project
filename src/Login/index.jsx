import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { loginUsers } from "../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";

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

async function doLoginWithGoogle(token) {
  // Sesuaikan endpoint
  const response = await fetch("http://localhost:8000/v1/auth/google", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  });

  const data = await response.json();
  return data;
}

function Login() {
  const { loginUsersResult, loginUsersError } = useSelector((state) => state.UsersReducer)
  
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
      localStorage.setItem('token', loginUsersResult.Token);
      navigate('/profile')
    } else if (loginUsersError) {
      setError(loginUsersError);
    }
  }, [loginUsersResult, loginUsersError]);

  useEffect(() => {
    setIsLoggedIn(!!Token);
  }, [Token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUsers({
      email,
      password
    }))

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
    console.log(response);
    console.log(response.tokenId);
    if (response.tokenId) {
      doLoginWithGoogle(response.tokenId)
        .then((_token) => {
          localStorage.setItem("token", response.tokenId);
          setIsLoggedIn(response.tokenId);
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

  console.log(email, password, Token);

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
                      <div className="alert alert-danger mt-3">Password atau email salah</div>
                    )}
                  </div>
                  <div className="mt-3">
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
                  <input
                    type="submit"
                    className="w-100 btn btn-lg btn-primary mt-3"
                  />
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
