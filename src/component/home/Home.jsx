import React from "react";
import Slide from "./Slide";
import Homedetail from "./Homedetail";

function Home() {
  return (
    <div className="h-[calc(100vh - 80px)] relative w-[100vw]">
      <Slide />
      <Homedetail />
    </div>
  );
}

export default Home;
