import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import About from "./pages/About/About";
import AddArticle from "./pages/AddArticle/AddArticle";
import EditArticle from "./pages/EditArticle/EditArticle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
