import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    HomePage,
    AddArticlePage,
    AboutPage,
    ContactPage,
    CategoryPage,
    GenrePage,
    BlogArticlePage,
} from "./pages";
import { MainLayout } from "./layouts";

export default function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/blog/" element={<HomePage />} />
                    <Route path="/blog/Add" element={<AddArticlePage />} />
                    <Route path="/blog/About" element={<AboutPage />} />
                    <Route path="/blog/Contact" element={<ContactPage />} />
                    <Route path="/blog/Genre" element={<CategoryPage />} />
                    <Route path="/blog/Genre/:genre" element={<GenrePage />} />
                    <Route path="/blog/Genre/:genre/:blogArticle" element={<BlogArticlePage />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}
