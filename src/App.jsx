import { useState } from "react";
import "./App.css";
import { MainContent } from "./pages/mainContent";
import { Footer } from "./components/navigation/footer";
import { NavBar } from "./components/navigation/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProjectContent } from "./components/projectContent/projectContent.jsx/projectContent";
import { PageLayout } from "./components/Layout/Layout";
import { Responsiveparagraph } from "./components/Layout/Typography";

function App() {
  const [theme, setTheme] = useState("light");
  const navText = "This text is from app.jsx!";

  return (
    <>
      <Router>
        <NavBar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={<h1>noe</h1>} />
          <Route
            path="/projects"
            element={<ProjectContent/>}
          />
          <Route path="/contact" element={<PageLayout><Responsiveparagraph>kontakt informasjon</Responsiveparagraph></PageLayout>} />
          <Route path="/about"   element={<MainContent navText={navText} theme={theme} />}
          />
        </Routes>

        <Footer theme={theme} />
      </Router>
    </>
  );
}

export default App;
