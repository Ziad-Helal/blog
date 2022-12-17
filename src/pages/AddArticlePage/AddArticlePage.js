import { Button } from "../../components";
import { navItems } from "../../assets/data";
import "./AddArticlePage.css";

export default function AddArticlePage() {
    return (
        <main className="add_article__page">
            <header className="add_article__header">
                <h2>Add Your Article</h2>
            </header>
            <form className="add_article__form">
                <fieldset>
                    <legend className="screen-readers-only">Add Your Article</legend>
                    <p className="form__row">
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" name="genre" required>
                            <option value="">-- Please choose an option --</option>
                            {navItems
                                .filter((item) => {
                                    return item.item === "Genre";
                                })
                                .map(({ subMenu }) =>
                                    subMenu.map((item, index) => (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    ))
                                )}
                        </select>
                    </p>
                    <p className="form__row">
                        <label htmlFor="heading">Heading</label>
                        <input type="text" name="heading" id="heading" required />
                    </p>
                    <p className="form__row">
                        <label htmlFor="img">Photo Link</label>
                        <input type="text" name="img" id="img" required />
                    </p>
                    <p className="form__row">
                        <label htmlFor="teaser">Summary</label>
                        <textarea name="teaser" id="teaser" cols="30" rows="10" required></textarea>
                    </p>
                    <p className="form__row">
                        <label htmlFor="body">Article Body</label>
                        <textarea name="body" id="body" cols="30" rows="20" required></textarea>
                    </p>
                    <Button type="submit" kind="secondary">
                        Add Article
                    </Button>
                </fieldset>
            </form>
        </main>
    );
}
