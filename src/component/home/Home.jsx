import React from "react";
import Slide from "./Slide";
import Homedetail from "./Homedetail";
import PrepInfo from "./PrepInfo";

function Home() {
  return (
    <div className=" relative w-[100vw]">
      <Slide />
      <Homedetail />
      <PrepInfo/>
    </div>
  );
}

export default Home;
