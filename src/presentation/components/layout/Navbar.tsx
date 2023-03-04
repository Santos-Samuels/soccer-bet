import { useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { GiSoccerBall } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

const routes = [
  { name: "Ranking", path: "/" },
  { name: "Minhas Apostas", path: "/my-bets" },
  { name: "Resultados", path: "/results" },
  { name: "Apostar", path: "/matches" },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  let location = useLocation();
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    navigate("/login");
  };

  return (
    <header className="bg-neutral-700 w-full fixed top-0 left-0 px-5 py-4 md:px-16 lg:px-24 flex justify-between items-center z-30">
      <Link to="/" className="flex items-center gap-2 text-xl lg:text-2xl ">
        <GiSoccerBall className="text-yellow-500" />
        <h1 className="font-bold ">
          Soccer<span className="text-yellow-500">Bet</span>
        </h1>
      </Link>

      {isMenuOpen && (
        <nav className="absolute w-full top-16 left-0 bg-black/75 h-screen md:hidden">
          <ul className="flex flex-col items-center gap-2 bg-neutral-700 m-5 p-5 rounded-xl">
            {routes.map((route) => (
              <li
                className={`px-5 py-3 rounded-md text-sm font-medium w-full cursor-pointer ${
                  location.pathname === route.path
                    ? "bg-yellow-700/75 text-white"
                    : "text-gray-300 hover:bg-yellow-900/50 hover:text-white"
                }`}
                onClick={() => navigate(route.path)}
              >
                {route.name}
              </li>
            ))}

            <div className="border-t border-neutral-500 w-full">
              <button
                onClick={logOut}
                className="flex items-center gap-2 px-5 py-3 rounded-md text-sm font-medium w-full mt-2 cursor-pointer text-gray-300 bg-neutral-800/25 hover:bg-neutral-800/50 hover:text-white"
              >
                <FiLogOut /> Sair
              </button>
            </div>
          </ul>
        </nav>
      )}

      <nav className="hidden md:block">
        <ul className="flex items-center gap-2 lg:gap-4">
          {routes.map((route) => (
            <li>
              <Link
                to={route.path}
                className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === route.path
                    ? "bg-yellow-700/75 text-white"
                    : "text-gray-300 hover:bg-yellow-900/50 hover:text-white"
                }`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <button
          onClick={logOut}
          className="bg-neutral-800/25 hover:bg-neutral-800/50 md:flex items-center gap-2 text-white px-3 py-2 rounded-md text-sm hidden"
        >
          <FiLogOut /> Sair
        </button>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isMenuOpen ? <MdClose /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
