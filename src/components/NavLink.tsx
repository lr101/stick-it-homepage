import Link from "next/link";
import { type NavLinkType } from "./TopNav";

const NavLink = ({ link }: { link: NavLinkType }) => {
  return (
    <Link
      href={link.path}
      className="block py-2 pl-3 pr-4  sm:text-xl rounded md:p-0 hover:text-orange-500"
    >
      {link.title}
    </Link>
  );
};

export default NavLink;