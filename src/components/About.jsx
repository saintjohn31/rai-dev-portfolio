import {
  ArrowUpRight,
  MapPin,
} from 'lucide-react';

import InteractivePortrait from './InteractivePortrait';

import { projects } from '../data/projectsData';
import { skills } from '../data/skillsData';

export default function About() {
  const projectCount = projects.length;
  const skillCount = skills.length;

  return (
    <section
      id="about"
      className="min-h-screen bg-white text-black pt-28 sm:pt-32 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* TOP LABEL */}
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

        {/* MAIN ABOUT CARD */}
        <div
          className="
            grid
            lg:grid-cols-2
            border
            border-gray-200
            bg-white
          "
        >

          {/* LEFT */}
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

          {/* RIGHT */}
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

              {/* OVERVIEW */}
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

              {/* I'M */}
              <p
                className="
                  text-xl
                  sm:text-2xl
                  font-light
                  text-gray-400
                  mb-2
                "
              >
                I'm
              </p>

              {/* NAME */}
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
                  "
                >
                  John Railey Pael

                  <span className="text-blue-500">
                    .
                  </span>
                </h1>

                {/* VERIFIED BADGE */}
                <span
                  className="
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
                  "
                  title="BSIT Student"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
              </div>

              {/* ROLE */}
              <p
                className="
                  text-[10px]
                  sm:text-[11px]
                  font-mono
                  tracking-[0.12em]
                  text-black
                  mb-6
                "
              >
                CREATIVE FRONT-END DEVELOPER · AI-ASSISTED DEVELOPER
              </p>

              {/* BIO */}
              <p
                className="
    max-w-lg
    text-sm
    sm:text-[15px]
    leading-7
    text-gray-500
  "
              >
                Information Technology student at{' '}

                <span className="text-black font-medium">
                  Bulacan State University — Bustos Campus
                </span>

                , majoring in{' '}

                <span className="text-black font-medium">
                  Web & Mobile Application Development
                </span>

                , with a focus on{' '}

                <span className="text-black font-medium">
                  front-end development
                </span>

                . I combine creativity, modern web technologies, and{' '}

                <span className="text-black font-medium">
                  AI-assisted development
                </span>

                {' '}to turn ideas into clean, responsive, and interactive
                digital experiences. I enjoy building interfaces that are
                visually engaging, intuitive, and thoughtfully crafted.
              </p>

              {/* LOCATION */}
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

              {/* BUTTONS */}
              <div
                className="
                  flex
                  flex-wrap
                  gap-3
                  mt-9
                "
              >

                <a
                  href="#projects"
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

                <a
                  href="#contact"
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

            {/* ========================================
    REALTIME STATS
========================================= */}

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