import React, { useEffect, useState } from "react";
import NavBar from "../LandingPage/navbar";

function Wishlist() {
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("wishlist");
    if (data) {
      setWishlist(JSON.parse(data));
    }
  }, [wishlist]);

  return (
    <div className="container">
      <NavBar />
      <div className="container top">
        <h1 className="text-center mt-2 mb-5">
          Wishlist Destinations
        </h1>
        <div className="row">
          {wishlist &&
            wishlist.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="card mb-3">
                    <div className="card-body">
                      <p>{item.Airport_Code}</p>
                      <p>{item.Airport_Name}</p>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
