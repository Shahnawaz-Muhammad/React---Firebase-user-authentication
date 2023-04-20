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
      <div className="px-10 py-10">
      <p className="text-center text-2xl uppercase font-bold"> {currentUser.role}</p>

      <div>
      <h1>Welcome, {currentUser.email}!</h1>
      <p>Your UID is: {currentUser.uid}</p>
      </div>
      {/* Render any other user data here */}
    </div>
    </>
  );
};

export default Home;
