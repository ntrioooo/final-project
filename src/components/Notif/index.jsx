import React, { useState } from "react";
import ShowNotif from "../ShowNotif";

function Notif() {
  const [showNotification, setShowNotification] = useState(false);

  const toggleNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div>
      {/* Navbar goes here */}
      <button onClick={toggleNotification}>Notification</button>
      {showNotification && <ShowNotif />}
    </div>
  );
}

export default Notif;
