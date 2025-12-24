import { useState } from "react";

export default function RunnerComponent({ data }) {
  const [click, setClick] = useState(false);
  const { name, buttonName, msg } = data;
  return (
    <div className="flex flex-row items-middle justify-center mt-10">
      <div className="  w-[400px] text-center bg-gray-600 h-[400px] ">
        <p className="font-bold text-2xl my-3">Hello this runner Compoent</p>
        <div>
          <p>Hello This is {name}</p>
        </div>
        <div className="mt-10">
          <button
            onClick={() => setClick(true)}
            className="bg-red-600 cursor-pointer"
          >
            {buttonName}
          </button>
        </div>
        {click && <div>You clicked to head component</div>}
      </div>
    </div>
  );
}
