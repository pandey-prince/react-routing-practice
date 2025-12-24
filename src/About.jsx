import Navbar from "./Navbar";
import RunnerComponent from "./RunnerComponent";
export default function About() {
  const data = {
    name: "about",
    msg: "this is inside about ",
    buttonName: "about Topic",
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-red-700 font-semibold text-4xl text-center">
        About Page
      </h1>
      <RunnerComponent data={data} />
    </div>
  );
}
