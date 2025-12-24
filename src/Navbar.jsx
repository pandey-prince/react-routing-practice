import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = (target) => {
    const route = target.innerHTML.toLowerCase();
    navigate(`/${route}`);
  };
  return (
    <div className="flex flex-row items-center justify-around text-xl font-semibold border-b mt-2 pb-2">
      <button onClick={(e) => handleClick(e.target)} className="cursor-pointer">
        Home
      </button>
      <button onClick={(e) => handleClick(e.target)} className="cursor-pointer">
        About
      </button>
      <button onClick={(e) => handleClick(e.target)} className="cursor-pointer">
        Contect
      </button>
    </div>
  );
}
