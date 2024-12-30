import { Link as LinkScroll } from "react-scroll";

function NavLink({ onClick, title }) {
  return (
    <LinkScroll onClick={()=> onClick} to={title} offset={-100} spy smooth activeClass="nav-active" className="cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4 max-lg:h5 base-bold">
      {title}
    </LinkScroll>
  );
}

export default NavLink;
