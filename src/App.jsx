import React, { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation, Link } from "react-router-dom";
import GithubcomByHtmltodesignF from "./pages/GithubcomByHtmltodesignF";
import Root from "./pages/Root";
import Frame from "./pages/Frame";
import Root1 from "./pages/Root1";
import Root2 from "./pages/Root2";
import './App.css'; // Import the CSS file

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home Page";
        metaDescription = "Description for the Home Page";
        break;
      case "/root":
        title = "Root Page";
        metaDescription = "Description for the Root Page";
        break;
      case "/root1":
        title = "Root1 Page";
        metaDescription = "Description for the Root1 Page";
        break;
      case "/root2":
        title = "Root2 Page";
        metaDescription = "Description for the Root2 Page";
        break;
      case "/root3":
        title = "Root3 Page";
        metaDescription = "Description for the Root3 Page";
        break;
      default:
        title = "Unknown Page";
        metaDescription = "This page does not exist.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={pathname === "/" ? "active" : ""}>Login Page 1</Link>
          </li>
          <li>
            <Link to="/root" className={pathname === "/root" ? "active" : ""}>Login Page 2</Link>
          </li>
          <li>
            <Link to="/root1" className={pathname === "/root1" ? "active" : ""}>Login Page 3</Link>
          </li>
          <li>
            <Link to="/root2" className={pathname === "/root2" ? "active" : ""}>Login Page 4</Link>
          </li>
          <li>
            <Link to="/root3" className={pathname === "/root3" ? "active" : ""}>Login Page 5</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<GithubcomByHtmltodesignF />} />
        <Route path="/root" element={<Root />} />
        <Route path="/root1" element={<Frame />} />
        <Route path="/root2" element={<Root1 />} />
        <Route path="/root3" element={<Root2 />} />
      </Routes>
    </div>
  );
}

export default App;
