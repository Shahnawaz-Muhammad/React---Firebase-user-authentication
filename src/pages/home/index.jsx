import React from "react";
import { UserAuth } from "../../context/AuthContext";

const Home = () => {
  console.log("this is home page")
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <div>Loading...</div>;
  }
  return (
    <>
      Home Page
      <div>
      <h1>Welcome, {currentUser.email}!</h1>
      <p>Your UID is: {currentUser.uid}</p>
      {/* <p>Your role is: {currentUser.role}</p> */}
      {/* Render any other user data here */}
    </div>
    </>
  );
};

export default Home;
