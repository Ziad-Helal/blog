import { Button } from "../../../components";
import "./SearchIcon.css";

export default function SearchIcon({ onClick = () => {} }) {
    return (
        <Button title="Search" onClick={onClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
    );
}
