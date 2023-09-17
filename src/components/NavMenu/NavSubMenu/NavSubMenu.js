import { Link } from "react-router-dom";
import "./NavSubMenu.css";

export default function NavSubMenu({ item, subMenu, className, clicked }) {
  const clickHandler = () => {
    clicked();
  };
  return (
    <ul
      className={`sub_menu${
        window.matchMedia("(max-width: 559px)").matches && className
          ? className
          : ""
      }`}
    >
      {subMenu.map((subItem) => (
        <li key={subItem}>
          <Link to={`/blog/${item}/${subItem}`} onClick={clickHandler}>
            {subItem}
          </Link>
        </li>
      ))}
    </ul>
  );
}
