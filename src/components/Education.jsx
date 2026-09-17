import {
    GraduationCap,
    MapPin,
    CalendarDays,
    ArrowUpRight,
    Code2,
    BookOpen,
} from 'lucide-react';


export default function Education() {

    return (
        <section
            id="education"
            className="
        relative
        bg-white
        text-black
      "
        >

            {/* =====================================
          MAIN CONTENT
      ====================================== */}

            <div
                className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          py-20
          sm:py-24
          lg:py-28
        "
            >

                {/* =====================================
            SECTION LABEL
        ====================================== */}

                <div className="mb-10 sm:mb-12">

                    <p
                        className="
              text-[10px]
              sm:text-[11px]

              font-mono
              font-medium

              tracking-[0.18em]

              text-gray-400
            "
                    >
                        04 / EDUCATION
                    </p>

                </div>


                {/* =====================================
            MAIN GRID
        ====================================== */}

                <div
                    className="
            grid
            grid-cols-1
            lg:grid-cols-[0.8fr_1.2fr]

            gap-10
            lg:gap-20

            items-start
          "
                >

                    {/* =================================
              LEFT SIDE
          ================================== */}

                    <div>

                        <h2
                            className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-semibold

                tracking-[-0.05em]
                leading-[0.95]
              "
                        >
                            Academic

                            <br />

                            <span className="theme-heading-accent">
                                Journey.
                            </span>

                        </h2>


                        <p
                            className="
                max-w-md

                mt-6

                text-sm
                sm:text-[15px]

                leading-7

                text-gray-500
              "
                        >
                            Currently pursuing a Bachelor of Science
                            in Information Technology with a
                            specialization in{' '}

                            <span
                                className="
                  text-black
                  font-medium
                "
                            >
                                Web & Mobile Application Development
                            </span>

                            . My studies focus on web development,
                            application design, database systems,
                            software development, and building
                            practical digital solutions through
                            academic and project-based work.
                        </p>


                        {/* =================================
                SMALL META
            ================================== */}

                        <div
                            className="
                flex
                flex-wrap
                items-center

                gap-x-5
                gap-y-3

                mt-7
              "
                        >

                            <div
                                className="
                  flex
                  items-center

                  gap-2

                  text-gray-400
                "
                            >

                                <CalendarDays
                                    size={12}
                                    strokeWidth={1.7}
                                />

                                <span
                                    className="
                    text-[9px]

                    font-mono

                    tracking-[0.08em]
                  "
                                >
                                    2023 — PRESENT
                                </span>

                            </div>


                            <div
                                className="
                  flex
                  items-center

                  gap-2

                  text-gray-400
                "
                            >

                                <MapPin
                                    size={12}
                                    strokeWidth={1.7}
                                />

                                <span
                                    className="
                    text-[9px]

                    font-mono

                    tracking-[0.08em]
                  "
                                >
                                    BUSTOS, BULACAN
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =================================
              EDUCATION CARD
          ================================== */}

                    <article
                        className="
              group

              relative

              border
              border-gray-200

              bg-white

              overflow-hidden

              transition-all
              duration-300

              hover:border-gray-400
            "
                    >

                        {/* BLUE TOP ACCENT */}

                        <div
                            className="
                absolute
                top-0
                left-0

                w-full
                h-[2px]

                bg-blue-500
              "
                        />


                        {/* =================================
                CARD CONTENT
            ================================== */}

                        <div
                            className="
                p-5
                sm:p-7
                lg:p-8
              "
                        >

                            {/* =================================
                  SCHOOL HEADER
              ================================== */}

                            <div
                                className="
                  flex
                  flex-col
                  sm:flex-row

                  sm:items-start
                  sm:justify-between

                  gap-6

                  mb-10
                "
                            >

                                <div
                                    className="
                    flex
                    items-start

                    gap-4

                    min-w-0
                  "
                                >

                                    <div
                                        className="
                      w-11
                      h-11

                      shrink-0

                      border
                      border-gray-200

                      flex
                      items-center
                      justify-center

                      text-blue-500
                    "
                                    >

                                        <GraduationCap
                                            size={20}
                                            strokeWidth={1.6}
                                        />

                                    </div>


                                    <div className="min-w-0">

                                        <p
                                            className="
                        mb-2

                        text-[9px]

                        font-mono
                        font-medium

                        tracking-[0.16em]

                        text-blue-500
                      "
                                        >
                                            UNIVERSITY
                                        </p>


                                        <h3
                                            className="
                        text-xl
                        sm:text-2xl

                        font-semibold

                        tracking-[-0.035em]

                        text-black
                      "
                                        >
                                            Bulacan State University
                                        </h3>


                                        <p
                                            className="
                        mt-1

                        text-sm

                        text-gray-500
                      "
                                        >
                                            Bustos Campus
                                        </p>

                                    </div>

                                </div>


                                {/* CURRENT STATUS */}

                                <div
                                    className="
                    inline-flex
                    items-center

                    gap-2

                    self-start

                    shrink-0

                    border
                    border-gray-200

                    px-3
                    py-2
                  "
                                >

                                    <span
                                        className="
                      w-1.5
                      h-1.5

                      bg-blue-500

                      rounded-full
                    "
                                    />

                                    <span
                                        className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono
                      font-medium

                      tracking-[0.12em]

                      text-gray-500
                    "
                                    >
                                        CURRENT
                                    </span>

                                </div>

                            </div>


                            {/* =================================
                  ACADEMIC INFORMATION
              ================================== */}

                            <div
                                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2

                  gap-x-8
                  gap-y-8
                "
                            >

                                <EducationDetail
                                    icon={GraduationCap}
                                    label="DEGREE"
                                >
                                    Bachelor of Science in
                                    Information Technology
                                </EducationDetail>


                                <EducationDetail
                                    icon={Code2}
                                    label="SPECIALIZATION"
                                >
                                    Web & Mobile Application
                                    Development
                                </EducationDetail>


                                <EducationDetail
                                    icon={CalendarDays}
                                    label="ACADEMIC PERIOD"
                                >
                                    2023 — Present
                                </EducationDetail>


                                <EducationDetail
                                    icon={MapPin}
                                    label="LOCATION"
                                >
                                    Bustos, Bulacan, Philippines
                                </EducationDetail>

                            </div>


                            {/* =================================
                  ACADEMIC FOCUS
              ================================== */}

                            <div className="mt-10">

                                <div
                                    className="
                    flex
                    items-start

                    gap-3
                  "
                                >

                                    <div
                                        className="
                      w-8
                      h-8

                      shrink-0

                      border
                      border-gray-200

                      flex
                      items-center
                      justify-center

                      text-blue-500
                    "
                                    >

                                        <BookOpen
                                            size={13}
                                            strokeWidth={1.7}
                                        />

                                    </div>


                                    <div>

                                        <p
                                            className="
                        mb-2

                        text-[8px]
                        sm:text-[9px]

                        font-mono
                        font-medium

                        tracking-[0.14em]

                        text-gray-400
                      "
                                        >
                                            ACADEMIC FOCUS
                                        </p>


                                        <p
                                            className="
                        max-w-xl

                        text-[12px]
                        sm:text-[13px]

                        leading-6

                        text-gray-500
                      "
                                        >
                                            Developing practical knowledge in
                                            front-end development, web and
                                            mobile applications, database
                                            management, software development,
                                            and user-centered interface design.
                                            Academic projects are used to apply
                                            these concepts to real-world
                                            systems and digital solutions.
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* =================================
                  BOTTOM META
              ================================== */}

                            <div
                                className="
                  mt-10

                  flex
                  flex-col
                  sm:flex-row

                  sm:items-center
                  sm:justify-between

                  gap-3
                "
                            >

                                <div
                                    className="
                    flex
                    flex-wrap
                    items-center

                    gap-x-3
                    gap-y-1
                  "
                                >

                                    <span
                                        className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono

                      tracking-[0.14em]

                      text-gray-400
                    "
                                    >
                                        BSIT
                                    </span>


                                    <span className="text-gray-300">
                                        /
                                    </span>


                                    <span
                                        className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono

                      tracking-[0.14em]

                      text-gray-400
                    "
                                    >
                                        WEB & MOBILE
                                    </span>


                                    <span className="text-gray-300">
                                        /
                                    </span>


                                    <span
                                        className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono

                      tracking-[0.14em]

                      text-gray-400
                    "
                                    >
                                        2023 — PRESENT
                                    </span>

                                </div>


                                <ArrowUpRight
                                    size={15}

                                    className="
                    hidden
                    sm:block

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

                        </div>

                    </article>

                </div>

            </div>

        </section>
    );
}


/* =========================================
   EDUCATION DETAIL COMPONENT
========================================= */

function EducationDetail({
    icon: Icon,
    label,
    children,
}) {

    return (
        <div
            className="
        flex
        items-start

        gap-3

        min-w-0
      "
        >

            <div
                className="
          w-8
          h-8

          shrink-0

          border
          border-gray-200

          flex
          items-center
          justify-center

          text-blue-500
        "
            >

                <Icon
                    size={13}
                    strokeWidth={1.7}
                />

            </div>


            <div className="min-w-0">

                <p
                    className="
            mb-1.5

            text-[8px]
            sm:text-[9px]

            font-mono
            font-medium

            tracking-[0.14em]

            text-gray-400
          "
                >
                    {label}
                </p>


                <p
                    className="
            text-[12px]
            sm:text-[13px]

            leading-6

            font-medium

            text-black
          "
                >
                    {children}
                </p>

            </div>

        </div>
    );

}