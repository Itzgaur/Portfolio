import { Link } from "react-scroll";

export default function NavLink({ children, onShowMenu }) {
  return (
    <Link
      to={`${children}`}
      smooth={true}
      duration={500}
      onClick={onShowMenu}
      className="p-2 text-gray-600 duration-150 ease-in-out hover:cursor-pointer hover:text-gray-800 hover:underline md:px-5 md:py-4"
    >
      {children}
    </Link>
  );
}
