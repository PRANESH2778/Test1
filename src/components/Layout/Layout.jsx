import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // React Icons for the phone icon

const Layout = () => {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/contactus"); // Adjust the route for your Contact Us page
  };

  return (
    <div>
      {/* Main Content */}
      <Outlet />

      {/* Fixed Phone Icon */}
      <div style={styles.fixedIcon} onClick={handleIconClick}>
        <FiPhone size={24} color="white" />
      </div>
    </div>
  );
};

const styles = {
  fixedIcon: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "50px",
    height: "50px",
    backgroundColor: "#007BFF", // Customize the background color
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    cursor: "pointer",
    zIndex: 1000,
  },
};

export default Layout;
