import { Link } from "react-router-dom";
import "./NavSubMenu.css";

export default function NavSubMenu({ item, subMenu }) {
    return (
        <ul>
            {subMenu.map((subItem) => (
                <li key={subItem}>
                    <Link to={`/${item}/${subItem}`}>{subItem}</Link>
                </li>
            ))}
        </ul>
    );
}
