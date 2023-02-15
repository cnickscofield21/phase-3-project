import { useState, useEffect } from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Faq from './components/Faq';
import ToolboxForm from './components/ToolboxForm';
import { FaPlus } from 'react-icons/fa';


function App() {
  const [theme, setTheme] = useState(getTheme);
  const [toolboxes, setToolboxes] = useState([]);


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // useEffect(() => {
  //   fetch("/toolboxes")
  //   .then(r => console.log(r))
  //   .then(r => r.json())
  //   .then(data => setToolboxes(data))
  // }, []);

  function getTheme() {
    // If theme is not set, DaisyUI will set theme based on system settings.
    return (localStorage.getItem("toolboxer-theme")) ? localStorage.getItem("toolboxer-theme") : "";
  };

  const onChangeTheme = (newTheme) => {
    localStorage.setItem("toolboxer-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <Header onChangeTheme={onChangeTheme} currentTheme={theme} />
      <div className="container px-6">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                toolboxes={toolboxes}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/faq"
            element={<Faq />}
          />

          <Route
            path="/toolboxes/new"
            element={<ToolboxForm />}
          />

        </Routes>

        <div className="toast toast-end absolute bottom-24 right-24 z-50">
          <Link to="/toolboxes/new">
            <div className="alert alert-info hover:alert">
              <div title="Add New Toolbox">
                <FaPlus />
              </div>
            </div>
          </Link>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default App;
