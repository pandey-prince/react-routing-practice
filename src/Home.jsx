import React from "react";
import RunnerComponent from "./RunnerComponent";
import Navbar from "./Navbar";

export default function Home() {
  const data = {
    name: "head",
    msg: "this is inside Head ",
    buttonName: "Head Topic",
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-red-700 font-semibold text-4xl text-center">
        Home Page
      </h1>
      <RunnerComponent data={data} />
    </div>
  );
}
