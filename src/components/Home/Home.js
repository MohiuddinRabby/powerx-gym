import React from "react";
import Pwn from "../Static/Pwn";
import Header from "../Header/Header";
import About from "../Static/About";

const Home = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Pwn></Pwn>
      <About></About>
    </React.Fragment>
  );
};

export default Home;
