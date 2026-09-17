import { useEffect, useState, useRef } from 'react';

import {
  ArrowUpRight,
  Menu,
  X,
  Moon,
  Sun,
} from 'lucide-react';

import SoundToggle from './SoundToggle';

import {
  playToggle,
  playHover,
} from '../utils/sound';


/* =========================================
   CUSTOM ICONS
========================================= */

function GithubIcon({
  size = 16,
  className = '',
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.071 1.531 1.031 1.531 1.031.892 1.529 2.341 1.087 2.91.831.091-.647.349-1.087.635-1.337-2.221-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.295 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}


function LinkedinIcon({
  size = 16,
  className = '',
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.002ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}


/* =========================================
   NAVBAR
========================================= */

export default function Navbar({
  theme,
  toggleTheme,
}) {

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState('about');

  const [scrolled, setScrolled] =
    useState(false);

  const isDark = theme === 'dark';
  const clickedSectionRef = useRef(null);
  const clickTimeoutRef = useRef(null);


  /* =========================================
     NAVIGATION LINKS
  ========================================= */

  const navLinks = [
    {
      name: 'ABOUT',
      href: '#about',
      id: 'about',
    },
    {
      name: 'PROJECTS',
      href: '#projects',
      id: 'projects',
    },
    {
      name: 'SKILLS',
      href: '#skills',
      id: 'skills',
    },
    {
      name: 'EDUCATION',
      href: '#education',
      id: 'education',
    },
    {
      name: 'CONTACT',
      href: '#contact',
      id: 'contact',
    },
  ];


  /* =========================================
     SOCIALS
  ========================================= */

  const socialLinks = [
    {
      name: 'GITHUB',
      href: 'https://github.com/saintjohn31',
      icon: GithubIcon,
    },
    {
      name: 'LINKEDIN',
      href:
        'https://www.linkedin.com/in/john-railey-pael-865224437/',
      icon: LinkedinIcon,
    },
  ];


  /* =========================================
     ACTIVE SECTION + SCROLL
  ========================================= */

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) =>
          document.getElementById(link.id)
        )
        .filter(Boolean);

      if (!sections.length) {
        return;
      }


      /*
       * Active detection point.
       *
       * Navbar = 76px
       * Extra allowance is added so the
       * correct section becomes active
       * shortly after entering the viewport.
       */

      const activationPoint = 120;

      let current = sections[0].id;


      sections.forEach((section) => {

        const rect =
          section.getBoundingClientRect();

        if (rect.top <= activationPoint) {
          current = section.id;
        }

      });


      /*
       * When the user reaches the very
       * bottom of the page, CONTACT
       * should always become active.
       */

      const nearBottom =
        window.innerHeight +
        window.scrollY >=
        document.documentElement.scrollHeight -
        10;

      if (nearBottom) {
        current =
          sections[sections.length - 1].id;
      }


      setActiveSection(current);

    };


    handleScroll();


    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      }
    );


    window.addEventListener(
      'resize',
      handleScroll
    );


    return () => {

      window.removeEventListener(
        'scroll',
        handleScroll
      );

      window.removeEventListener(
        'resize',
        handleScroll
      );

    };

  }, []);


  /* =========================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================= */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }

    };


    window.addEventListener(
      'resize',
      handleResize
    );


    return () => {

      window.removeEventListener(
        'resize',
        handleResize
      );

    };

  }, []);


  /* =========================================
     BODY SCROLL LOCK
  ========================================= */

  useEffect(() => {

    if (mobileMenuOpen) {

      document.body.style.overflow =
        'hidden';

    } else {

      document.body.style.overflow = '';

    }


    return () => {

      document.body.style.overflow = '';

    };

  }, [mobileMenuOpen]);


  /* =========================================
     NAVIGATION CLICK
  ========================================= */

  const handleNavClick = (id) => {

    setActiveSection(id);

    setMobileMenuOpen(false);

  };


  const closeMobileMenu = () => {

    setMobileMenuOpen(false);

  };


  return (
    <>

      {/* =====================================
          NAVBAR
      ====================================== */}

      <header
        className={`
          fixed
          top-0
          left-0
          right-0

          z-[1000]

          border-b

          transition-all
          duration-300

          ${isDark
            ? `
                bg-[#0a0a0a]
                border-[#262626]
              `
            : `
                bg-white
                border-gray-200
              `
          }

          ${scrolled
            ? `
                backdrop-blur-xl
                shadow-[0_1px_0_rgba(0,0,0,0.02)]
              `
            : ''
          }
        `}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div
            className="
              relative

              h-[76px]

              flex
              items-center
              justify-between
            "
          >

            {/* =================================
                LOGO
            ================================== */}

            <a
              onMouseEnter={playHover}
              href="#about"
              onClick={() =>
                handleNavClick('about')
              }
              className="
                group
                flex
                items-center
                shrink-0

                relative
                z-10
              "
              aria-label="Go to About section"
            >

              <span
                className={`
                  text-[23px]
                  sm:text-[26px]

                  font-semibold
                  tracking-[-0.05em]
                  leading-none

                  transition-colors
                  duration-300

                  ${isDark
                    ? 'text-white'
                    : 'text-black'
                  }
                `}
              >
                rai

                <span className="text-blue-500">
                  .
                </span>

                dev
              </span>

            </a>


            {/* =================================
                DESKTOP NAVIGATION
            ================================== */}

            <nav
              className="
                hidden
                md:flex

                absolute
                left-1/2
                top-1/2

                -translate-x-1/2
                -translate-y-1/2

                items-center

                gap-5
                lg:gap-7

                whitespace-nowrap
              "
            >

              {navLinks.map((link) => {

                const active =
                  activeSection === link.id;


                return (

                  <a
                    onMouseEnter={playHover}
                    key={link.id}

                    href={link.href}

                    onClick={() =>
                      handleNavClick(link.id)
                    }

                    className={`
                      group
                      relative

                      py-2

                      text-[10px]
                      lg:text-[11px]

                      font-medium
                      tracking-[0.16em]

                      transition-colors
                      duration-300

                      ${active
                        ? isDark
                          ? 'text-white'
                          : 'text-black'
                        : isDark
                          ? 'text-[#737373] hover:text-white'
                          : 'text-gray-400 hover:text-black'
                      }
                    `}
                  >

                    {link.name}


                    {/* ACTIVE UNDERLINE */}

                    <span
                      className={`
                        absolute

                        bottom-0
                        left-0

                        h-px

                        transition-all
                        duration-300

                        ${isDark
                          ? 'bg-white'
                          : 'bg-black'
                        }

                        ${active
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                        }
                      `}
                    />

                  </a>

                );

              })}

            </nav>


            {/* =================================
                DESKTOP RIGHT
            ================================== */}

            <div
              className="
                hidden
                lg:flex

                items-center

                gap-3

                relative
                z-10
              "
            >

              {/* SOCIAL ICONS */}

              <div
                className={`
                  flex
                  items-center
                  gap-1

                  pr-3

                  border-r

                  ${isDark
                    ? 'border-[#262626]'
                    : 'border-gray-200'
                  }
                `}
              >

                {socialLinks.map(
                  (social) => {

                    const Icon =
                      social.icon;


                    return (

                      <a
                        onMouseEnter={playHover}
                        key={social.name}

                        href={social.href}

                        target="_blank"

                        rel="noopener noreferrer"

                        aria-label={
                          social.name
                        }

                        title={
                          social.name
                        }

                        className={`
                          group/social

                          w-9
                          h-9

                          flex
                          items-center
                          justify-center

                          transition-all
                          duration-300

                          ${isDark
                            ? `
                                text-[#737373]
                                hover:text-white
                                hover:bg-[#171717]
                              `
                            : `
                                text-gray-400
                                hover:text-black
                                hover:bg-gray-100
                              `
                          }
                        `}
                      >

                        <Icon
                          size={16}

                          className="
                            transition-transform
                            duration-300

                            group-hover/social:-translate-y-0.5
                          "
                        />

                      </a>

                    );

                  }
                )}

              </div>


              {/* =================================
                  LET'S TALK
              ================================== */}

              <a
                onMouseEnter={playHover}
                href="#contact"

                onClick={() =>
                  handleNavClick('contact')
                }

                className={`
                  group

                  inline-flex
                  items-center
                  justify-center

                  gap-2

                  px-5
                  py-3

                  text-[10px]
                  xl:text-[11px]

                  font-medium
                  tracking-[0.08em]

                  transition-all
                  duration-300

                  hover:bg-blue-600
                  hover:text-white
                  hover:-translate-y-[2px]

                  ${isDark
                    ? `
                        bg-white
                        text-black
                      `
                    : `
                        bg-black
                        text-white
                      `
                  }
                `}
              >

                LET'S TALK


                <ArrowUpRight
                  size={14}

                  strokeWidth={1.8}

                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />

              </a>


              {/* =================================
                  SOUND TOGGLE
              ================================== */}

              <SoundToggle />


              {/* =================================
                  THEME TOGGLE
              ================================== */}

              <button
                onMouseEnter={playHover}
                type="button"

                onClick={() => {
                  playToggle();
                  toggleTheme();
                }}

                aria-label={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }

                title={
                  isDark
                    ? 'Light Mode'
                    : 'Dark Mode'
                }

                className={`
                  group/theme

                  relative

                  w-[42px]
                  h-[42px]

                  flex
                  items-center
                  justify-center

                  shrink-0

                  border

                  overflow-hidden

                  transition-all
                  duration-300

                  active:scale-95

                  ${isDark
                    ? `
                        bg-[#111111]
                        border-[#2a2a2a]
                        text-blue-500

                        hover:bg-[#171717]
                        hover:border-[#404040]
                      `
                    : `
                        bg-white
                        border-gray-200
                        text-black

                        hover:bg-gray-50
                        hover:border-gray-400
                      `
                  }
                `}
              >

                {/* BLUE TOP ACCENT */}

                <span
                  className="
                    absolute
                    top-0
                    left-0

                    w-full
                    h-[2px]

                    bg-blue-500

                    origin-left
                    scale-x-0

                    transition-transform
                    duration-300

                    group-hover/theme:scale-x-100
                  "
                />


                {isDark ? (

                  <Sun
                    size={15}

                    strokeWidth={1.7}

                    className="
                      transition-all
                      duration-300

                      group-hover/theme:rotate-45
                    "
                  />

                ) : (

                  <Moon
                    size={15}

                    strokeWidth={1.7}

                    className="
                      transition-all
                      duration-300

                      group-hover/theme:-rotate-12
                    "
                  />

                )}

              </button>

            </div>


            {/* =================================
                TABLET CONTROLS
            ================================== */}

            <div
              className="
                hidden
                md:flex
                lg:hidden

                items-center
                gap-2

                relative
                z-10
              "
            >

              <a
                onMouseEnter={playHover}
                href="#contact"

                onClick={() =>
                  handleNavClick('contact')
                }

                className={`
                  w-10
                  h-10

                  flex
                  items-center
                  justify-center

                  transition-colors
                  duration-300

                  hover:bg-blue-600
                  hover:text-white

                  ${isDark
                    ? `
                        bg-white
                        text-black
                      `
                    : `
                        bg-black
                        text-white
                      `
                  }
                `}

                aria-label="Contact"
              >

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                />

              </a>


              <button
                onMouseEnter={playHover}
                type="button"

                onClick={() => {
                  playToggle();
                  toggleTheme();
                }}

                aria-label={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }

                className={`
                  w-10
                  h-10

                  flex
                  items-center
                  justify-center

                  border

                  transition-all
                  duration-300

                  ${isDark
                    ? `
                        bg-[#111111]
                        border-[#2a2a2a]
                        text-blue-500
                      `
                    : `
                        bg-white
                        border-gray-200
                        text-black
                      `
                  }
                `}
              >

                {isDark ? (

                  <Sun
                    size={15}
                    strokeWidth={1.7}
                  />

                ) : (

                  <Moon
                    size={15}
                    strokeWidth={1.7}
                  />

                )}

              </button>

            </div>


            {/* =================================
                MOBILE CONTROLS
            ================================== */}

            <div
              className="
                md:hidden

                flex
                items-center
                gap-2

                relative
                z-10
              "
            >

              {/* MOBILE SOUND */}

              <SoundToggle />


              {/* MOBILE THEME */}

              <button
                onMouseEnter={playHover}
                type="button"

                onClick={() => {
                  playToggle();
                  toggleTheme();
                }}

                aria-label={
                  isDark
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }

                className={`
                  w-10
                  h-10

                  border

                  flex
                  items-center
                  justify-center

                  transition-all
                  duration-300

                  ${isDark
                    ? `
                        bg-[#111111]
                        border-[#2a2a2a]
                        text-blue-500
                      `
                    : `
                        bg-white
                        border-gray-200
                        text-black
                      `
                  }
                `}
              >

                {isDark ? (

                  <Sun
                    size={16}
                    strokeWidth={1.7}
                  />

                ) : (

                  <Moon
                    size={16}
                    strokeWidth={1.7}
                  />

                )}

              </button>


              {/* MENU */}

              <button
                onMouseEnter={playHover}
                type="button"

                onClick={() =>
                  setMobileMenuOpen(
                    (prev) => !prev
                  )
                }

                className={`
                  w-10
                  h-10

                  border

                  flex
                  items-center
                  justify-center

                  transition-colors
                  duration-300

                  ${isDark
                    ? `
                        bg-[#111111]
                        border-[#2a2a2a]
                        text-white

                        hover:bg-[#171717]
                      `
                    : `
                        bg-white
                        border-gray-200
                        text-black

                        hover:bg-gray-100
                      `
                  }
                `}

                aria-label={
                  mobileMenuOpen
                    ? 'Close navigation'
                    : 'Open navigation'
                }

                aria-expanded={
                  mobileMenuOpen
                }
              >

                {mobileMenuOpen ? (

                  <X
                    size={19}
                    strokeWidth={1.7}
                  />

                ) : (

                  <Menu
                    size={19}
                    strokeWidth={1.7}
                  />

                )}

              </button>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================
          MOBILE MENU
      ====================================== */}

      <div
        className={`
          fixed
          inset-0

          z-[999]

          pt-[76px]

          md:hidden

          overflow-hidden

          transition-all
          duration-500

          ${isDark
            ? 'bg-[#0a0a0a]'
            : 'bg-white'
          }

          ${mobileMenuOpen
            ? `
                opacity-100
                visible
                translate-y-0
              `
            : `
                opacity-0
                invisible
                pointer-events-none
                -translate-y-3
              `
          }
        `}
      >

        <div
          className="
            h-full

            overflow-y-auto
            overscroll-contain

            px-6
            py-8
          "
        >

          <div
            className="
              min-h-full

              flex
              flex-col

              max-w-xl
              mx-auto
            "
          >

            {/* MENU HEADER */}

            <div
              className="
                flex
                items-center
                justify-between

                gap-4

                mb-7
              "
            >

              <p
                className="
                  text-[9px]

                  font-mono
                  tracking-[0.2em]

                  text-gray-400
                "
              >
                NAVIGATION
              </p>


              <p
                className="
                  text-[9px]

                  font-mono
                  tracking-[0.15em]

                  text-gray-400
                "
              >
                PORTFOLIO / 2026
              </p>

            </div>


            {/* =================================
                MOBILE LINKS
            ================================== */}

            <nav className="flex flex-col">

              {navLinks.map(
                (link, index) => {

                  const active =
                    activeSection ===
                    link.id;


                  return (

                    <a
                      onMouseEnter={playHover}
                      key={link.id}

                      href={link.href}

                      onClick={() =>
                        handleNavClick(
                          link.id
                        )
                      }

                      className={`
                        group

                        relative

                        border-t

                        py-5
                        sm:py-6

                        flex
                        items-center
                        justify-between

                        gap-4

                        overflow-hidden

                        ${isDark
                          ? 'border-[#262626]'
                          : 'border-gray-200'
                        }
                      `}
                    >

                      <div
                        className="
                          relative
                          z-10

                          flex
                          items-center

                          gap-4
                          sm:gap-5
                        "
                      >

                        <span
                          className={`
                            text-[9px]
                            font-mono

                            ${active
                              ? 'text-blue-500'
                              : 'text-gray-400'
                            }
                          `}
                        >

                          {String(
                            index + 1
                          ).padStart(
                            2,
                            '0'
                          )}

                        </span>


                        <span
                          className={`
                            text-[22px]
                            sm:text-3xl

                            font-medium
                            tracking-[-0.035em]

                            transition-all
                            duration-300

                            group-hover:translate-x-1

                            ${active
                              ? isDark
                                ? 'text-white'
                                : 'text-black'
                              : isDark
                                ? 'text-[#737373] group-hover:text-white'
                                : 'text-gray-500 group-hover:text-black'
                            }
                          `}
                        >
                          {link.name}
                        </span>

                      </div>


                      <ArrowUpRight
                        size={18}

                        strokeWidth={1.4}

                        className={`
                          relative
                          z-10

                          shrink-0

                          transition-all
                          duration-300

                          ${active
                            ? 'text-blue-500'
                            : isDark
                              ? 'text-[#404040]'
                              : 'text-gray-300'
                          }

                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        `}
                      />


                      {/* ACTIVE BACKGROUND */}

                      <span
                        className={`
                          absolute
                          inset-0

                          origin-left

                          transition-transform
                          duration-500

                          ${isDark
                            ? 'bg-[#111111]'
                            : 'bg-gray-50'
                          }

                          ${active
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                          }
                        `}
                      />

                    </a>

                  );

                }
              )}


              <div
                className={`
                  border-t

                  ${isDark
                    ? 'border-[#262626]'
                    : 'border-gray-200'
                  }
                `}
              />

            </nav>


            {/* =================================
                MOBILE THEME
            ================================== */}

            <div className="mt-8">

              <p
                className="
                  mb-3

                  text-[9px]

                  font-mono
                  tracking-[0.18em]

                  text-gray-400
                "
              >
                APPEARANCE
              </p>


              <button
                onMouseEnter={playHover}
                type="button"

                onClick={() => {
                  playToggle();
                  toggleTheme();
                }}

                className={`
                  group

                  w-full

                  flex
                  items-center
                  justify-between

                  border

                  px-4
                  py-4

                  transition-all
                  duration-300

                  ${isDark
                    ? `
                        bg-[#111111]
                        border-[#262626]

                        hover:border-[#404040]
                      `
                    : `
                        bg-white
                        border-gray-200

                        hover:border-gray-400
                      `
                  }
                `}
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className={`
                      w-9
                      h-9

                      flex
                      items-center
                      justify-center

                      border

                      ${isDark
                        ? 'border-[#333333] text-blue-500'
                        : 'border-gray-200 text-black'
                      }
                    `}
                  >

                    {isDark ? (

                      <Sun
                        size={15}
                        strokeWidth={1.7}
                      />

                    ) : (

                      <Moon
                        size={15}
                        strokeWidth={1.7}
                      />

                    )}

                  </div>


                  <div className="text-left">

                    <p
                      className="
                        text-[8px]

                        font-mono
                        tracking-[0.16em]

                        text-gray-400

                        mb-1
                      "
                    >
                      THEME
                    </p>


                    <p
                      className={`
                        text-[11px]

                        font-mono
                        tracking-[0.1em]

                        ${isDark
                          ? 'text-white'
                          : 'text-black'
                        }
                      `}
                    >

                      {isDark
                        ? 'DARK MODE'
                        : 'LIGHT MODE'
                      }

                    </p>

                  </div>

                </div>


                <span
                  className="
                    text-[9px]

                    font-mono
                    tracking-[0.12em]

                    text-gray-400
                  "
                >
                  SWITCH
                </span>

              </button>


              {/* MOBILE SOUND CONTROL */}

              <div className="mt-2">
                <SoundToggle mobile />
              </div>

            </div>


            {/* =================================
                SOCIAL LINKS
            ================================== */}

            <div className="mt-8">

              <p
                className="
                  mb-3

                  text-[9px]

                  font-mono
                  tracking-[0.18em]

                  text-gray-400
                "
              >
                CONNECT
              </p>


              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                "
              >

                {socialLinks.map(
                  (social) => {

                    const Icon =
                      social.icon;


                    return (

                      <a
                        onMouseEnter={playHover}
                        key={social.name}

                        href={social.href}

                        target="_blank"

                        rel="noopener noreferrer"

                        className={`
                          group/social

                          flex
                          items-center
                          justify-center

                          gap-2

                          border

                          px-3
                          py-3

                          text-[9px]
                          font-mono
                          tracking-[0.1em]

                          transition-all
                          duration-300

                          ${isDark
                            ? `
                                border-[#262626]
                                text-[#a3a3a3]

                                hover:border-[#525252]
                                hover:text-white
                              `
                            : `
                                border-gray-200
                                text-gray-500

                                hover:border-black
                                hover:text-black
                              `
                          }
                        `}
                      >

                        <Icon size={14} />

                        {social.name}

                        <ArrowUpRight
                          size={11}

                          className="
                            text-gray-400

                            transition-all
                            duration-300

                            group-hover/social:translate-x-0.5
                            group-hover/social:-translate-y-0.5
                          "
                        />

                      </a>

                    );

                  }
                )}

              </div>

            </div>


            {/* =================================
                MOBILE BOTTOM
            ================================== */}

            <div className="mt-auto pt-8">

              <div
                className={`
                  flex
                  items-center
                  justify-between

                  border-t

                  pt-5

                  ${isDark
                    ? 'border-[#262626]'
                    : 'border-gray-200'
                  }
                `}
              >

                <span
                  className={`
                    text-[9px]
                    font-mono
                    tracking-[0.14em]

                    ${isDark
                      ? 'text-[#a3a3a3]'
                      : 'text-gray-500'
                    }
                  `}
                >
                  RAI.DEV
                </span>


                <span
                  className="
                    text-[9px]

                    font-mono
                    tracking-[0.12em]

                    text-gray-400
                  "
                >
                  PH / 2026
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}