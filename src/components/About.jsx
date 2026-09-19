import {
  useEffect,
  useState,
} from 'react';

import {
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

import InteractivePortrait from './InteractivePortrait';

import { projects } from '../data/projectsData';
import { skills } from '../data/skillsData';

import {
  playClick,
  playHover,
} from '../utils/sound';


export default function About() {

  const projectCount = projects.length;
  const skillCount = skills.length;


  /* =========================================
     TYPEWRITER TEXT
  ========================================= */

  const introText = "I'm";

  const nameText =
    'John Railey Pael';

  const roleText =
    'FULL-STACK DEVELOPER — FRONT-END FOCUSED · AI-ASSISTED DEVELOPER';


  /* =========================================
     TYPEWRITER STATE
  ========================================= */

  const [typedIntro, setTypedIntro] =
    useState('');

  const [typedName, setTypedName] =
    useState('');

  const [typedRole, setTypedRole] =
    useState('');

  const [introFinished, setIntroFinished] =
    useState(false);

  const [nameFinished, setNameFinished] =
    useState(false);

  const [roleFinished, setRoleFinished] =
    useState(false);


  /* =========================================
     TYPE "I'M"
  ========================================= */

  useEffect(() => {

    let interval;

    const startDelay = setTimeout(() => {

      let index = 0;

      interval = setInterval(() => {

        index += 1;

        setTypedIntro(
          introText.slice(0, index)
        );

        if (index >= introText.length) {

          clearInterval(interval);

          setTimeout(() => {
            setIntroFinished(true);
          }, 250);

        }

      }, 110);

    }, 350);


    return () => {

      clearTimeout(startDelay);

      if (interval) {
        clearInterval(interval);
      }

    };

  }, []);


  /* =========================================
     TYPE NAME
  ========================================= */

  useEffect(() => {

    if (!introFinished) return;

    let interval;

    const startDelay = setTimeout(() => {

      let index = 0;

      interval = setInterval(() => {

        index += 1;

        setTypedName(
          nameText.slice(0, index)
        );

        if (index >= nameText.length) {

          clearInterval(interval);

          setTimeout(() => {
            setNameFinished(true);
          }, 250);

        }

      }, 70);

    }, 150);


    return () => {

      clearTimeout(startDelay);

      if (interval) {
        clearInterval(interval);
      }

    };

  }, [introFinished]);


  /* =========================================
     TYPE ROLE
  ========================================= */

  useEffect(() => {

    if (!nameFinished) return;

    let interval;

    const startDelay = setTimeout(() => {

      let index = 0;

      interval = setInterval(() => {

        index += 1;

        setTypedRole(
          roleText.slice(0, index)
        );

        if (index >= roleText.length) {

          clearInterval(interval);

          setTimeout(() => {
            setRoleFinished(true);
          }, 200);

        }

      }, 35);

    }, 300);


    return () => {

      clearTimeout(startDelay);

      if (interval) {
        clearInterval(interval);
      }

    };

  }, [nameFinished]);


  return (

    <section
      id="about"
      className="
        min-h-screen
        bg-white
        text-black
        pt-28
        sm:pt-32
        pb-16
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >

        {/* =====================================
            TOP LABEL
        ====================================== */}

        <div
          className="
            flex
            items-center
            justify-end

            mb-6

            text-[10px]
            sm:text-[11px]

            font-mono
            text-gray-400
          "
        >

          <span className="tracking-[0.15em]">
            ABOUT / 01
          </span>

        </div>


        {/* =====================================
            MAIN ABOUT CARD
        ====================================== */}

        <div
          className="
            grid
            lg:grid-cols-2

            border
            border-gray-200

            bg-white
          "
        >

          {/* =================================
              LEFT
          ================================== */}

          <div
            className="
              relative

              min-h-[460px]
              sm:min-h-[540px]
              lg:min-h-[580px]

              overflow-hidden

              border-b
              lg:border-b-0
              lg:border-r

              border-gray-200
            "
          >

            <InteractivePortrait />

          </div>


          {/* =================================
              RIGHT
          ================================== */}

          <div
            className="
              p-6
              sm:p-10
              lg:p-12
              xl:p-14

              flex
              flex-col
              justify-between
            "
          >

            <div>

              {/* =================================
                  OVERVIEW
              ================================== */}

              <div className="mb-9">

                <p
                  className="
                    text-[10px]
                    sm:text-[11px]

                    font-mono

                    tracking-[0.2em]

                    text-gray-400
                  "
                >
                  OVERVIEW
                </p>

              </div>


              {/* =================================
                  I'M — TYPEWRITER
              ================================== */}

              <p
                className="
                  text-xl
                  sm:text-2xl

                  font-light

                  text-gray-400

                  mb-2

                  min-h-[32px]
                "
              >

                {typedIntro}

                {!introFinished && (

                  <span
                    className="
                      inline-block

                      w-[2px]
                      h-[1em]

                      ml-1

                      bg-blue-500

                      align-[-0.08em]

                      animate-pulse
                    "
                  />

                )}

              </p>


              {/* =================================
                  NAME — TYPEWRITER
              ================================== */}

              <div
                className="
                  flex
                  items-center

                  gap-3

                  flex-wrap

                  mb-5
                "
              >

                <h1
                  className="
                    text-[clamp(2.5rem,5vw,4.1rem)]

                    leading-[0.96]

                    font-semibold

                    tracking-[-0.05em]

                    text-black

                    min-h-[1em]
                  "
                >

                  {typedName}


                  {/* BLUE PERIOD */}

                  {nameFinished && (

                    <span className="text-blue-500">
                      .
                    </span>

                  )}


                  {/* NAME CURSOR */}

                  {introFinished &&
                    !nameFinished && (

                      <span
                        className="
                          inline-block

                          w-[3px]
                          h-[0.85em]

                          ml-1.5

                          bg-blue-500

                          align-[-0.05em]

                          animate-pulse
                        "
                      />

                    )}

                </h1>


                {/* =================================
                    VERIFIED BADGE
                ================================== */}

                <span
                  className={`
                    w-7
                    h-7

                    sm:w-8
                    sm:h-8

                    rounded-full

                    bg-blue-500
                    text-white

                    flex
                    items-center
                    justify-center

                    shrink-0

                    transition-all
                    duration-500

                    ${nameFinished
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75 pointer-events-none'
                    }
                  `}
                  title="BSIT Student"
                >

                  <svg
                    viewBox="0 0 24 24"
                    className="
                      w-4
                      h-4
                      fill-current
                    "
                  >

                    <path
                      d="
                        M9 16.17
                        4.83 12
                        l-1.42 1.41
                        L9 19
                        21 7
                        l-1.41-1.41
                        z
                      "
                    />

                  </svg>

                </span>

              </div>


              {/* =================================
                  ROLE — TYPEWRITER
              ================================== */}

              <p
                className="
                  text-[10px]
                  sm:text-[11px]

                  font-mono

                  tracking-[0.12em]

                  text-black

                  mb-6

                  min-h-[18px]
                "
              >

                {typedRole}


                {/* ROLE CURSOR */}

                {nameFinished &&
                  !roleFinished && (

                    <span
                      className="
                        inline-block

                        w-[1px]
                        h-[1em]

                        ml-1

                        bg-blue-500

                        align-[-0.1em]

                        animate-pulse
                      "
                    />

                  )}

              </p>


              {/* =================================
                  BIO
              ================================== */}

              <p
                className="
                  max-w-lg

                  text-sm
                  sm:text-[15px]

                  leading-7

                  text-gray-500
                "
              >

                I'm an{' '}

                <span
                  className="
                    text-black
                    font-medium
                  "
                >
                  Information Technology student at Bulacan State University — Bustos Campus
                </span>

                , majoring in{' '}

                <span
                  className="
                    text-black
                    font-medium
                  "
                >
                  Web & Mobile Application Development
                </span>

                . I'm a{' '}

                <span
                  className="
                    text-black
                    font-medium
                  "
                >
                  full-stack developer
                </span>

                {' '}focused on the front end and an{' '}

                <span
                  className="
                    text-black
                    font-medium
                  "
                >
                  AI-assisted developer
                </span>

                {' '}who loves making things{' '}

                <span
                  className="
                    text-black
                    font-medium
                  "
                >
                  interactive
                </span>

                .

                <br />
                <br />

                I enjoy turning ideas into modern web and mobile experiences
                that are simple, responsive, and actually useful.

              </p>


              {/* =================================
                  LOCATION
              ================================== */}

              <div
                className="
                  flex
                  items-center

                  gap-2

                  mt-5

                  text-[10px]
                  sm:text-[11px]

                  font-mono

                  text-gray-400
                "
              >

                <MapPin size={13} />

                <span>
                  Bustos, Bulacan, Philippines
                </span>

              </div>


              {/* =================================
                  BUTTONS
              ================================== */}

              <div
                className="
                  flex
                  flex-wrap

                  gap-3

                  mt-9
                "
              >

                {/* PROJECTS */}

                <a
                  href="#projects"
                  onClick={playClick}
                  onMouseEnter={playHover}

                  className="
                    group

                    inline-flex
                    items-center
                    justify-center

                    gap-3

                    bg-black
                    text-white

                    px-6
                    py-3.5

                    text-[10px]
                    sm:text-xs

                    font-mono

                    tracking-[0.1em]

                    transition-colors
                    duration-300

                    hover:bg-blue-600
                  "
                >

                  PROJECTS

                  <ArrowUpRight
                    size={14}

                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                </a>


                {/* CONTACT */}

                <a
                  href="#contact"
                  onClick={playClick}
                  onMouseEnter={playHover}

                  className="
                    inline-flex
                    items-center
                    justify-center

                    border
                    border-gray-300

                    bg-white
                    text-black

                    px-6
                    py-3.5

                    text-[10px]
                    sm:text-xs

                    font-mono

                    tracking-[0.1em]

                    transition-colors
                    duration-300

                    hover:border-black
                    hover:bg-gray-50
                  "
                >
                  CONTACT
                </a>

              </div>

            </div>


            {/* =================================
                REALTIME STATS
            ================================== */}

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-4

                mt-10
                sm:mt-12

                pt-6
                sm:pt-7

                border-t
                border-gray-200
              "
            >

              <Stat
                value="4th"
                label="YEAR"
                index={0}
              />

              <Stat
                value={projectCount}
                label="PROJECTS"
                index={1}
              />

              <Stat
                value={skillCount}
                label="SKILLS"
                index={2}
              />

              <Stat
                value="BSIT"
                label="PROGRAM"
                index={3}
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}


/* =========================================
   STAT
========================================= */

function Stat({
  value,
  label,
  index,
}) {

  return (

    <div
      className={`
        group
        min-w-0

        py-4
        sm:py-0

        ${index % 2 === 0
          ? 'pr-4'
          : 'pl-4 border-l border-gray-200'
        }

        ${index >= 2
          ? 'border-t border-gray-200 mt-4 pt-4'
          : ''
        }

        sm:mt-0
        sm:pt-0
        sm:border-t-0

        ${index === 0
          ? 'sm:pl-0 sm:pr-4 sm:border-l-0'
          : 'sm:px-4 sm:border-l sm:border-gray-200'
        }
      `}
    >

      <div
        className="
          flex
          items-center

          gap-1

          min-w-0
        "
      >

        <span
          className="
            text-xl
            sm:text-xl
            lg:text-2xl

            font-semibold

            tracking-[-0.04em]

            whitespace-nowrap
          "
        >
          {value}
        </span>


        <ArrowUpRight
          size={11}

          className="
            shrink-0

            text-gray-300

            transition-all
            duration-300

            group-hover:text-blue-500
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
          "
        />

      </div>


      <p
        className="
          mt-1

          text-[8px]
          sm:text-[8px]
          lg:text-[9px]

          font-mono

          tracking-[0.12em]
          sm:tracking-[0.15em]

          text-gray-400

          whitespace-nowrap
        "
      >
        {label}
      </p>

    </div>

  );

}