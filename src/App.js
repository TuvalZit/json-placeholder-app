import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import pages from "./common/constants";
import "@fontsource/raleway/latin.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        {pages.map((page, index) => {
          console.log(page.iconName);
          return <Route path={page.path} element={page.toRender} key={index} />;
        })}
      </Routes>
    </Router>
  );
};

export default App;
