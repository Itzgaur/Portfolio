import Nav from "./Nav";
import NavLink from "./NavLink";

export default function Footer() {
  return (
    <footer className="flex h-[15vh] flex-col items-center justify-center ">
      <Nav showAlways={true}>
        <NavLink>Home</NavLink>
      </Nav>
      <p>
        copyright &#169; <span>Harsh gaur</span>
      </p>
    </footer>
  );
}
