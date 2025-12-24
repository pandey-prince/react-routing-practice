import React from "react";
import Navbar from "./Navbar";
import RunnerComponent from "./RunnerComponent";
export default function Contect() {
    const data = {
      name: "contect",
      msg: "this is inside Contect ",
      buttonName: "Contect Topic",
    };
  return (
    <div>
      <Navbar />
      <h1 className="text-red-700 font-semibold text-4xl text-center">
        Contect Page
      </h1>
      <RunnerComponent data={data} />
    </div>
  );
}
