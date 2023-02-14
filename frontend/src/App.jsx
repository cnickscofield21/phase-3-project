import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

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
      <h1 className="text-3xl font-bold">
        My Toolboxes
      </h1>
      <Footer />
    </>
  )
}

export default App;
