import { useState } from 'react';

import {
  Globe,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react';

import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';

import { projects } from '../data/projectsData';

import {
  playOpen,
  playClick,
  playHover,
} from '../utils/sound';


export default function Projects() {

  const [selectedProject, setSelectedProject] =
    useState(null);


  /* =========================================
     PROJECT PREVIEW CLICK
  ========================================= */

  const handleProjectPreview = (project) => {

    // Projects with a live website/game
    if (project.liveUrl) {
      playOpen();
      setSelectedProject(project);
      return;
    }

    // GitHub-only projects
    if (project.repoUrl) {
      playClick();
      window.open(
        project.repoUrl,
        '_blank',
        'noopener,noreferrer'
      );
    }

  };


  /* =========================================
     PROJECT DISPLAY URL
  ========================================= */

  const getProjectUrl = (project) => {

    if (project.liveUrl) {
      return project.liveUrl.replace(
        /^https?:\/\//,
        ''
      );
    }

    if (project.repoUrl) {
      return project.repoUrl.replace(
        /^https?:\/\//,
        ''
      );
    }

    return 'PROJECT PREVIEW';

  };


  /* =========================================
     PRIMARY ACTION LABEL
  ========================================= */

  const getPrimaryLabel = (project) => {

    if (project.category === 'GAME DEVELOPMENT') {
      return 'PLAY GAME';
    }

    return 'VISIT WEBSITE';

  };


  return (

    <section
      id="projects"
      className="
        bg-white
        text-black

        py-20
        sm:py-24
        lg:py-28
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
            SECTION HEADER
        ====================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            gap-8
            lg:gap-20

            mb-12
            sm:mb-14
            lg:mb-16
          "
        >


          {/* LEFT */}

          <div>

            <p
              className="
                text-[10px]
                sm:text-[11px]

                font-medium
                font-mono

                tracking-[0.18em]

                text-gray-400

                mb-4
              "
            >
              02 / FEATURED PROJECTS
            </p>


            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-semibold

                tracking-[-0.04em]
                leading-[0.95]
              "
            >

              Selected

              <br />

              <span className="theme-heading-accent">
                Projects & Systems.
              </span>

            </h2>

          </div>


          {/* RIGHT */}

          <div
            className="
              lg:flex
              lg:flex-col
              lg:justify-end
              lg:items-end
            "
          >

            <p
              className="
                text-sm
                sm:text-[15px]

                text-gray-500

                leading-7

                max-w-md

                lg:text-right
              "
            >
              Selected projects across web development,
              game development, desktop applications,
              academic work, and community-based systems.
            </p>

          </div>

        </div>


        {/* =====================================
            PROJECT GRID
        ====================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            border-t
            border-l
            border-gray-200
          "
        >


          {projects.map((project) => (

            <article
              key={project.id}
              className="
                group

                relative

                p-5
                sm:p-7
                lg:p-8
                xl:p-10

                border-r
                border-b
                border-gray-200

                bg-white

                flex
                flex-col
                justify-between

                transition-all
                duration-300
              "
            >


              {/* =================================
                  MAIN CONTENT
              ================================== */}

              <div>


                {/* TOP */}

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    gap-4

                    mb-5
                  "
                >


                  {/* NUMBER */}

                  <span
                    className="
                      text-[10px]
                      sm:text-xs

                      font-mono

                      text-gray-400
                    "
                  >
                    {project.number}
                  </span>


                  {/* CATEGORY */}

                  <span
                    className="
                      text-[8px]
                      sm:text-[10px]

                      font-mono
                      tracking-[0.1em]

                      px-2.5
                      py-1

                      border
                      border-gray-200

                      text-gray-600
                      bg-gray-50

                      uppercase
                    "
                  >
                    {project.category}
                  </span>

                </div>


                {/* =================================
                    PROJECT PREVIEW
                ================================== */}

                <div
                  onClick={() =>
                    handleProjectPreview(project)
                  }

                  className="
                    group/preview

                    relative

                    w-full

                    bg-gray-50

                    border
                    border-gray-200

                    overflow-hidden

                    mb-6

                    cursor-pointer

                    shadow-sm

                    transition-all
                    duration-300

                    hover:border-gray-400
                    hover:shadow-md
                  "
                >


                  {/* ===============================
                      BROWSER / PROJECT BAR
                  ================================ */}

                  <div
                    className="
                      h-8

                      bg-gray-100

                      border-b
                      border-gray-200

                      px-3

                      flex
                      items-center
                      justify-between

                      gap-2

                      text-[9px]
                      sm:text-[10px]

                      font-mono
                      text-gray-500

                      select-none
                    "
                  >


                    {/* DOTS */}

                    <div
                      className="
                        flex
                        items-center
                        gap-1.5

                        shrink-0
                      "
                    >

                      <span
                        className="
                          w-2
                          h-2

                          sm:w-2.5
                          sm:h-2.5

                          rounded-full

                          bg-gray-300

                          transition-colors

                          group-hover/preview:bg-gray-400
                        "
                      />

                      <span
                        className="
                          w-2
                          h-2

                          sm:w-2.5
                          sm:h-2.5

                          rounded-full

                          bg-gray-300

                          transition-colors

                          group-hover/preview:bg-gray-400
                        "
                      />

                      <span
                        className="
                          w-2
                          h-2

                          sm:w-2.5
                          sm:h-2.5

                          rounded-full

                          bg-gray-300

                          transition-colors

                          group-hover/preview:bg-gray-400
                        "
                      />

                    </div>


                    {/* URL / REPOSITORY */}

                    <div
                      className="
                        flex
                        items-center
                        gap-1.5

                        min-w-0

                        px-2
                        sm:px-3

                        py-0.5

                        bg-white

                        border
                        border-gray-200

                        text-gray-600

                        max-w-[190px]
                        sm:max-w-xs
                      "
                    >

                      {project.liveUrl ? (

                        <Globe
                          size={10}
                          className="
                            text-gray-400
                            shrink-0
                          "
                        />

                      ) : (

                        <GithubIcon
                          className="
                            w-2.5
                            h-2.5

                            text-gray-400
                            shrink-0
                          "
                        />

                      )}


                      <span className="truncate">
                        {getProjectUrl(project)}
                      </span>

                    </div>


                    {/* ACTION ICON */}

                    <span
                      className="
                        shrink-0

                        text-gray-400

                        transition-colors

                        group-hover/preview:text-black
                      "
                      title={
                        project.liveUrl
                          ? 'View Project'
                          : 'View Repository'
                      }
                    >

                      {project.liveUrl ? (

                        <Maximize2 size={12} />

                      ) : (

                        <ArrowUpRight size={12} />

                      )}

                    </span>

                  </div>


                  {/* =================================
                      PROJECT IMAGE
                  ================================== */}

                  <div
                    className="
                      relative

                      w-full

                      aspect-[16/10]
                      sm:aspect-[16/9]

                      bg-gray-100

                      overflow-hidden
                    "
                  >

                    <img
                      src={project.image}

                      alt={`${project.title} project preview`}

                      loading="lazy"

                      className="
                        w-full
                        h-full

                        object-cover
                        object-top

                        transition-transform
                        duration-700
                        ease-out

                        group-hover/preview:scale-[1.025]
                      "
                    />


                    {/* =================================
                        HOVER OVERLAY
                    ================================== */}

                    <div
                      className="
                        absolute
                        inset-0

                        bg-black/45

                        opacity-0

                        flex
                        items-center
                        justify-center

                        transition-all
                        duration-300

                        group-hover/preview:opacity-100
                      "
                    >

                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2

                          px-4
                          py-2.5

                          bg-white
                          text-black

                          text-[9px]
                          sm:text-xs

                          font-mono
                          font-semibold

                          tracking-[0.08em]

                          translate-y-3

                          transition-transform
                          duration-300

                          group-hover/preview:translate-y-0
                        "
                      >

                        {project.repoUrl && !project.liveUrl ? (

                          <GithubIcon
                            className="
                              w-3.5
                              h-3.5
                            "
                          />

                        ) : (

                          <Maximize2 size={13} />

                        )}


                        {project.repoUrl && !project.liveUrl
                          ? 'VIEW REPOSITORY'
                          : project.category === 'GAME DEVELOPMENT'
                            ? 'VIEW GAME'
                            : 'VIEW PROJECT'
                        }

                      </span>

                    </div>

                  </div>

                </div>


                {/* =================================
                    PROJECT TITLE
                ================================== */}

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    lg:text-[28px]

                    font-medium

                    tracking-[-0.03em]
                    leading-tight

                    text-black

                    mb-2
                  "
                >
                  {project.title}
                </h3>


                {/* SUBTITLE */}

                {project.subtitle && (

                  <p
                    className="
                      text-[9px]
                      sm:text-[10px]

                      font-mono

                      tracking-[0.05em]

                      text-blue-600

                      mb-4
                    "
                  >
                    {project.subtitle}
                  </p>

                )}


                {/* DESCRIPTION */}

                <p
                  className="
                    text-sm

                    leading-6

                    text-gray-500

                    mb-6
                  "
                >
                  {project.description}
                </p>

              </div>


              {/* =================================
                  BOTTOM CONTENT
              ================================== */}

              <div>


                {/* TAGS */}

                <div
                  className="
                    flex
                    flex-wrap

                    gap-1.5

                    mb-6

                    pt-4

                    border-t
                    border-gray-100
                  "
                >

                  {project.tags.map((tag) => (

                    <span
                      key={tag}

                      className="
                        text-[8px]
                        sm:text-[9px]

                        font-mono

                        tracking-[0.04em]

                        text-gray-500

                        bg-gray-50

                        px-2
                        py-1

                        border
                        border-gray-200
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                {/* =================================
                    ACTION BUTTONS
                ================================== */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-[1fr_auto]

                    gap-2

                    pt-3

                    border-t
                    border-gray-200
                  "
                >


                  {/* ===============================
                      LIVE WEBSITE / GAME
                  ================================ */}

                  {project.liveUrl && (

                    <>

                      <a
                        onMouseEnter={playHover}
                        href={project.liveUrl}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="
                          group/button

                          inline-flex
                          items-center
                          justify-center

                          gap-2

                          min-h-[44px]

                          bg-black
                          text-white

                          px-5
                          py-3

                          text-[9px]
                          sm:text-[10px]

                          font-mono
                          tracking-[0.1em]

                          transition-all
                          duration-300

                          hover:bg-blue-600
                        "
                      >

                        <span>
                          {getPrimaryLabel(project)}
                        </span>


                        <ArrowUpRight
                          size={13}

                          className="
                            transition-transform
                            duration-300

                            group-hover/button:translate-x-0.5
                            group-hover/button:-translate-y-0.5
                          "
                        />

                      </a>


                      {/* RESPONSIVE VIEW */}

                      <button
                        onMouseEnter={playHover}
                        type="button"

                        onClick={() =>
                          setSelectedProject(project)
                        }

                        className="
                          group/button

                          inline-flex
                          items-center
                          justify-center

                          gap-2

                          min-h-[44px]

                          border
                          border-gray-300

                          bg-white
                          text-black

                          px-4
                          py-3

                          text-[9px]
                          sm:text-[10px]

                          font-mono
                          tracking-[0.08em]

                          transition-all
                          duration-300

                          hover:bg-gray-100
                          hover:border-gray-400
                        "
                        title="Open responsive device preview"
                      >

                        <Maximize2
                          size={13}

                          className="
                            transition-transform
                            duration-300

                            group-hover/button:scale-110
                          "
                        />

                        <span>
                          RESPONSIVE VIEW
                        </span>

                      </button>

                    </>

                  )}


                  {/* ===============================
                      GITHUB-ONLY PROJECT
                  ================================ */}

                  {!project.liveUrl &&
                    project.repoUrl && (

                      <a
                        onMouseEnter={playHover}
                        href={project.repoUrl}

                        target="_blank"

                        rel="noopener noreferrer"

                        className="
                          group/button

                          sm:col-span-2

                          inline-flex
                          items-center
                          justify-center

                          gap-2

                          min-h-[44px]

                          bg-black
                          text-white

                          px-5
                          py-3

                          text-[9px]
                          sm:text-[10px]

                          font-mono
                          tracking-[0.1em]

                          transition-all
                          duration-300

                          hover:bg-blue-600
                        "
                      >

                        <GithubIcon
                          className="
                            w-3.5
                            h-3.5
                          "
                        />

                        <span>
                          VIEW REPOSITORY
                        </span>


                        <ArrowUpRight
                          size={13}

                          className="
                            transition-transform
                            duration-300

                            group-hover/button:translate-x-0.5
                            group-hover/button:-translate-y-0.5
                          "
                        />

                      </a>

                    )}

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* =====================================
          RESPONSIVE PROJECT MODAL
      ====================================== */}

      {selectedProject && (

        <ProjectModal
          project={selectedProject}

          onClose={() =>
            setSelectedProject(null)
          }
        />

      )}

    </section>

  );

}