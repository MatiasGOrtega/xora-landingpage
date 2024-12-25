import { Link as LinkScroll } from "react-scroll";

function NavLink({ title }) {
  return (
    <LinkScroll className="cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4 max-lg:h5 base-bold">
      {title}
    </LinkScroll>
  );
}

export default NavLink;
