import { Button } from "../../../components";
import "./SearchBar.css";

export default function SearchBar({ className, onClose = () => {} }) {
    return (
        <fieldset className={`search__bar ${className}`}>
            <legend className="screen-readers-only">Search for an Article</legend>
            <label htmlFor="article" className="screen-readers-only">
                Article Name
            </label>
            <input
                type="text"
                name="article"
                id="article"
                placeholder="Type and hit 'Enter' to search"
                role={"searchbox"}
                size="25"
            />
            <Button type="submit" kind="secondary">
                Search
            </Button>
            <Button title={"Close"} onClick={onClose}>
                <i className="fa-solid fa-xmark"></i>
            </Button>
        </fieldset>
    );
}
