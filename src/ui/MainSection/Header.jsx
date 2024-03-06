import Nav from "./Nav";
import menuIcon from "../../data/menu.png";
import { useState } from "react";
import { Element } from "react-scroll";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <Element name="Home">
      <header
        className={
          "mx-2 flex h-[15vh] items-center justify-between px-4  py-3 md:mx-12"
        }
      >
        <h1 className="text-2xl capitalize text-gray-800 md:text-4xl  xl:text-5xl">
          Harsh gaur
        </h1>
        {
          <button
            type="button"
            className="h-10 w-10 md:ml-auto lg:hidden"
            onClick={handleShowMenu}
          >
            <img src={menuIcon} alt="menuIcon" />
          </button>
        }
        <Nav showMenu={showMenu} onShowMenu={handleShowMenu} />
      </header>
    </Element>
  );
}
