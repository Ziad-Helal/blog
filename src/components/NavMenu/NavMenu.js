import { Button, NavItem } from "../../components";
import { navItems } from "../../assets/data";
import "./NavMenu.css";

export default function NavMenu({ onGenreClick }) {
    const genreClickHandler = (item) => {
        onGenreClick(item);
    };
    return (
        <nav className="website__navigation">
            <Button kind="primary">
                <i className="fa-solid fa-bars"></i>
                <span className="screen-readers-only">Open Navigation </span>Menu
            </Button>
            <ul className="website__menu">
                {navItems.map(({ item, subMenu }) => (
                    <NavItem
                        key={item}
                        item={item}
                        subMenu={subMenu}
                        onGenreClick={genreClickHandler}
                    />
                ))}
            </ul>
        </nav>
    );
}
