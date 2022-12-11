import { NavMenu, ContactLinks, SearchIcon } from "../../components";
import "./NavBar.css";

export default function NavBar() {
    return (
        <section className="nav-bar">
            <NavMenu />
            <section className="icons">
                <ContactLinks />
                <SearchIcon />
            </section>
        </section>
    );
}
