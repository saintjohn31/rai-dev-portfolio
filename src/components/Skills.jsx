import { useState } from 'react';
import { skills } from '../data/skillsData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = [
    { id: 'ALL', label: 'ALL SKILLS' },
    { id: 'WEB', label: 'FRONT-END' },
    { id: 'BACKEND', label: 'BACKEND & DATA' },
    { id: 'TOOLS', label: 'TOOLS' },
  ];



  const filteredSkills =
    selectedCategory === 'ALL'
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="
        bg-[#f7f7f5]
        text-black
        py-20
        sm:py-24
        lg:py-32
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* =========================================
            HEADER
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            lg:gap-20
            mb-12
            sm:mb-16
          "
        >
          {/* LEFT */}
          <div>
            <p
              className="
                text-[10px]
                sm:text-[11px]
                font-mono
                tracking-[0.18em]
                text-gray-400
                mb-5
              "
            >
              03 / SKILLS & TECHNOLOGIES
            </p>

            <h2
              className="
                text-[clamp(2.6rem,6vw,4.5rem)]
                font-semibold
                tracking-[-0.05em]
                leading-[0.92]
              "
            >
              Tools behind
              <br />

              <span className="text-gray-400">
                the interfaces.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              justify-end
              lg:items-end
              gap-7
            "
          >
            <p
              className="
                max-w-lg
                text-sm
                sm:text-[15px]
                leading-7
                text-gray-500
                lg:text-right
              "
            >
              A focused set of technologies I use to turn ideas into
              responsive, interactive, and thoughtfully built digital
              experiences.
            </p>

            {/* FILTER BUTTONS */}
            <div
              className="
                flex
                flex-wrap
                gap-2
                w-full
                lg:w-auto
              "
            >
              {categories.map((category) => {
                const active = selectedCategory === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      px-4
                      py-2.5
                      text-[9px]
                      sm:text-[10px]
                      font-mono
                      tracking-[0.12em]
                      border
                      transition-all
                      duration-300
                      ${active
                        ? 'bg-black text-white border-black'
                        : 'bg-transparent text-gray-400 border-gray-300 hover:border-black hover:text-black'
                      }
                    `}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>


        {/* =========================================
            SKILLS GRID
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            border-t
            border-l
            border-gray-200
          "
        >
          {filteredSkills.map((skill) => (
            <article
              key={skill.number}
              className="
                group
                relative

                min-h-[250px]
                sm:min-h-[270px]

                bg-white

                border-r
                border-b
                border-gray-200

                p-6
                sm:p-7
                lg:p-8

                flex
                flex-col
                justify-between

                overflow-hidden

                transition-all
                duration-500
                ease-out

                hover:bg-[#111111]
                hover:text-white
                hover:-translate-y-1
                hover:z-10
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
              "
            >

              {/* =====================================
                  BLUE HOVER ACCENT
              ===================================== */}
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
                  duration-500
                  ease-out

                  group-hover:scale-x-100
                "
              />


              {/* =====================================
                  TOP CONTENT
              ===================================== */}
              <div>

                {/* NUMBER + CATEGORY */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    mb-10
                  "
                >
                  <span
                    className="
                      text-[9px]
                      font-mono
                      tracking-[0.12em]
                      text-gray-400

                      transition-colors
                      duration-500

                      group-hover:text-gray-500
                    "
                  >
                    {skill.number}
                  </span>

                  <span
                    className="
                      text-[9px]
                      font-mono
                      tracking-[0.12em]
                      text-blue-500
                    "
                  >
                    {skill.label}
                  </span>
                </div>


                {/* SKILL NAME */}
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-medium
                    tracking-[-0.03em]
                    mb-3

                    transition-colors
                    duration-500

                    group-hover:text-white
                  "
                >
                  {skill.name}
                </h3>


                {/* DESCRIPTION */}
                <p
                  className="
                    max-w-sm

                    text-xs
                    sm:text-[13px]
                    leading-6

                    text-gray-500

                    transition-colors
                    duration-500

                    group-hover:text-gray-300
                  "
                >
                  {skill.description}
                </p>
              </div>


              {/* =====================================
                  TECHNOLOGY TAGS
              ===================================== */}
              <div
                className="
                  mt-8
                  pt-5

                  border-t
                  border-gray-100

                  flex
                  flex-wrap

                  gap-x-4
                  gap-y-2

                  transition-colors
                  duration-500

                  group-hover:border-white/15
                "
              >
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono
                      tracking-[0.1em]

                      text-gray-400

                      transition-colors
                      duration-500

                      group-hover:text-gray-400
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>


              {/* =====================================
                  SUBTLE BACKGROUND DETAIL
              ===================================== */}
              <span
                className="
                  absolute
                  -right-10
                  -bottom-10

                  w-28
                  h-28

                  border
                  border-white/0

                  rounded-full

                  transition-all
                  duration-700

                  group-hover:w-40
                  group-hover:h-40
                  group-hover:border-white/[0.05]
                "
              />
            </article>
          ))}
        </div>


        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between

            gap-3

            mt-6

            text-[9px]
            sm:text-[10px]

            font-mono
            tracking-[0.12em]

            text-gray-400
          "
        >
          <span>
            {String(filteredSkills.length).padStart(2, '0')} TECHNOLOGIES
          </span>

          <span>
            FRONT-END FOCUSED · CONTINUOUSLY LEARNING
          </span>
        </div>

      </div>
    </section>
  );
}