import NavLink from "./NavLink";
import closeMenu from "../../data/cross.png";

export default function Nav({
  showMenu,
  onShowMenu,
  children,
  showAlways = false,
}) {
  return (
    <>
      <nav
        className={`${!showAlways && "hidden"}  md:text-2xl lg:flex lg:items-center lg:justify-center `}
      >
        {children}
        <NavLink>About</NavLink>
        <NavLink>Skills</NavLink>
        <NavLink>Projects</NavLink>
        <NavLink>Contact</NavLink>
      </nav>
      {showMenu && (
        <nav
          className={`absolute right-0 top-0 mt-9 flex h-[100vh] w-[50%] flex-col items-center justify-center bg-gray-100 text-2xl lg:hidden `}
        >
          <button
            onClick={onShowMenu}
            className="absolute right-3 top-10 h-10 w-10"
          >
            <img src={closeMenu} alt="" />
          </button>

          <NavLink onShowMenu={onShowMenu}>About</NavLink>
          <NavLink onShowMenu={onShowMenu}>Skills</NavLink>
          <NavLink onShowMenu={onShowMenu}>Projects</NavLink>
          <NavLink onShowMenu={onShowMenu}>Contact</NavLink>
        </nav>
      )}
    </>
  );
}
