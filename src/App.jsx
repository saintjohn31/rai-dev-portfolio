import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import LoadingScreen from './components/LoadingScreen';
import Terminal from './components/Terminal';


function App() {

  /* =========================================
     LOADING SCREEN
  ========================================= */

  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem(
      'rai-dev-loaded'
    );
  });


  /* =========================================
     THEME
  ========================================= */

  const [theme, setTheme] = useState(() => {

    // Previously selected theme
    const savedTheme =
      localStorage.getItem('rai-dev-theme');

    if (
      savedTheme === 'light' ||
      savedTheme === 'dark'
    ) {
      return savedTheme;
    }

    // Otherwise use device preference
    const prefersDark =
      window.matchMedia?.(
        '(prefers-color-scheme: dark)'
      ).matches;

    return prefersDark
      ? 'dark'
      : 'light';
  });


  /* =========================================
     APPLY THEME
  ========================================= */

  useEffect(() => {
    const root =
      document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    localStorage.setItem(
      'rai-dev-theme',
      theme
    );
  }, [theme]);


  /* =========================================
     TOGGLE THEME
  ========================================= */

  const toggleTheme = useCallback(() => {
    setTheme((current) =>
      current === 'dark'
        ? 'light'
        : 'dark'
    );
  }, []);


  /* =========================================
     LOADING COMPLETE
  ========================================= */

  const handleLoadingComplete =
    useCallback(() => {
      setLoading(false);
    }, []);


  return (
    <div
      className="
        min-h-screen

        bg-[var(--page)]
        text-[var(--text)]

        overflow-x-hidden

        transition-colors
        duration-300

        selection:bg-black
        selection:text-white
      "
    >

      {/* =====================================
          FIRST VISIT LOADER
      ====================================== */}

      {loading && (
        <LoadingScreen
          onComplete={
            handleLoadingComplete
          }
        />
      )}


      {/* =====================================
          NAVIGATION
      ====================================== */}

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />


      {/* =====================================
          CONTENT
      ====================================== */}

      <main>
        <About />

        <Projects />

        <Skills />
      </main>


      {/* =====================================
          CONTACT
      ====================================== */}

      <Contact />


      {/* =====================================
          INTERACTIVE TERMINAL
      ====================================== */}

      {!loading && (
        <Terminal />
      )}

    </div>
  );
}

export default App;