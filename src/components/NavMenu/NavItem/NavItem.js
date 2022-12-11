import { Link } from "react-router-dom";
import { NavSubMenu } from "../../../components";
import "./NavItem.css";

export default function NavItem({ item, subMenu, footerNav }) {
    let ref;
    if (footerNav) ref = `Genre/${item.split(" ")[0]}`;
    else ref = item.split(" ")[0];

    return (
        <li>
            <Link to={`/${ref}`}>{item}</Link>
            {subMenu && <NavSubMenu item={ref} subMenu={subMenu} />}
        </li>
    );
}
