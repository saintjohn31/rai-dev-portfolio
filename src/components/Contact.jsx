import { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MapPin,
  GraduationCap,
  ArrowUp,
  ArrowUpRight,
  Send,
  ExternalLink,
} from 'lucide-react';

import { GithubIcon, LinkedinIcon } from './Icons';


export default function Contact() {
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const email = 'johnrailey550@gmail.com';

  const github =
    'https://github.com/saintjohn31';

  const linkedin =
    'https://www.linkedin.com/in/john-railey-pael-865224437/';


  /* =========================================
     COPY EMAIL
  ========================================= */
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2200);
    } catch (error) {
      console.error('Unable to copy email:', error);
    }
  };


  /* =========================================
     FORM SUBMIT
     Opens visitor's email application
  ========================================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Hi John Railey,

${formData.message}

---
From: ${formData.name}
Email: ${formData.email}`
    );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;
  };


  /* =========================================
     INPUT HANDLER
  ========================================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  /* =========================================
     BACK TO TOP
  ========================================= */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <footer
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        text-black
        border-t
        border-gray-200
        pt-20
        sm:pt-24
        lg:pt-32
        pb-8
        sm:pb-10
      "
    >

      {/* =====================================
          SUBTLE BACKGROUND GRID
      ===================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
          [background-size:32px_32px]
        "
      />


      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
        "
      >

        {/* =====================================
            SECTION HEADER
        ===================================== */}
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
              04 / GET IN TOUCH
            </p>


            <h2
              className="
                text-[clamp(2.7rem,6vw,4.6rem)]
                font-semibold
                tracking-[-0.055em]
                leading-[0.92]
              "
            >
              Let's build

              <br />

              <span className="text-gray-400">
                something great.
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
              Have an idea, project, collaboration, or opportunity?
              I'm always interested in creating thoughtful digital
              experiences and exploring new possibilities.
            </p>

          </div>

        </div>


        {/* =====================================
            MAIN CONTACT GRID
        ===================================== */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2

            border
            border-gray-200

            bg-white
          "
        >

          {/* =====================================
              LEFT SIDE
          ===================================== */}
          <div
            className="
              p-5
              sm:p-8
              lg:p-10
              xl:p-12

              border-b
              lg:border-b-0
              lg:border-r
              border-gray-200

              flex
              flex-col
            "
          >

            {/* LABEL */}
            <div className="mb-7">

              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  tracking-[0.18em]
                  text-gray-400
                  mb-2
                "
              >
                DIRECT CONTACT
              </p>

              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                Prefer email? Reach me directly.
              </p>

            </div>


            {/* =================================
                EMAIL CARD
            ================================== */}
            <div
              className="
                group/email
                relative

                border
                border-gray-200

                bg-[#fafafa]

                p-4
                sm:p-5

                transition-all
                duration-300

                hover:border-gray-400
                hover:bg-white
              "
            >

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                "
              >

                <div className="min-w-0">

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                      mb-2
                    "
                  >

                    <Mail
                      size={13}
                      className="
                        text-blue-500
                        shrink-0
                      "
                    />

                    <span
                      className="
                        text-[9px]
                        font-mono
                        tracking-[0.15em]
                        text-gray-400
                      "
                    >
                      EMAIL
                    </span>

                  </div>


                  <a
                    href={`mailto:${email}`}
                    className="
                      block

                      text-[12px]
                      sm:text-sm
                      font-mono
                      font-medium

                      text-black

                      break-all

                      transition-colors
                      duration-300

                      hover:text-blue-600
                    "
                  >
                    {email}
                  </a>

                </div>


                {/* COPY BUTTON */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`
                    shrink-0

                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    min-w-[94px]

                    px-4
                    py-2.5

                    border

                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    tracking-[0.1em]

                    transition-all
                    duration-300

                    ${copied
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-black border-gray-300 hover:bg-black hover:text-white hover:border-black'
                    }
                  `}
                >

                  {copied ? (
                    <>
                      <Check
                        size={13}
                        className="text-emerald-400"
                      />

                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy size={13} />

                      COPY
                    </>
                  )}

                </button>

              </div>


              {/* HOVER LINE */}
              <span
                className="
                  absolute
                  bottom-0
                  left-0

                  w-0
                  h-[2px]

                  bg-blue-500

                  transition-all
                  duration-500

                  group-hover/email:w-full
                "
              />

            </div>


            {/* =================================
                EDUCATION
            ================================== */}
            <div
              className="
                mt-5

                border
                border-gray-200

                p-5

                transition-colors
                duration-300

                hover:border-gray-400
              "
            >

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

                    flex
                    items-center
                    justify-center

                    border
                    border-gray-200
                  "
                >
                  <GraduationCap
                    size={15}
                    className="text-blue-500"
                  />
                </div>


                <div>

                  <p
                    className="
                      text-xs
                      sm:text-[13px]
                      font-medium
                      text-black
                      leading-5
                    "
                  >
                    Bulacan State University
                    <span className="text-gray-400">
                      {' '}— Bustos Campus
                    </span>
                  </p>


                  <p
                    className="
                      mt-2
                      text-[11px]
                      sm:text-xs
                      leading-5
                      text-gray-500
                    "
                  >
                    Bachelor of Science in Information Technology
                    <br />

                    Web & Mobile Application Development
                  </p>


                  <div
                    className="
                      flex
                      items-center
                      gap-1.5

                      mt-3

                      text-[9px]
                      sm:text-[10px]

                      font-mono
                      text-gray-400
                    "
                  >
                    <MapPin size={12} />

                    <span>
                      Bustos, Bulacan, Philippines
                    </span>
                  </div>

                </div>

              </div>

            </div>


            {/* =================================
                SOCIAL PROFILES
            ================================== */}
            <div
              className="
                mt-8
                lg:mt-auto
                lg:pt-10
              "
            >

              <p
                className="
                  text-[9px]
                  sm:text-[10px]
                  font-mono
                  tracking-[0.18em]
                  text-gray-400
                  mb-3
                "
              >
                ELSEWHERE
              </p>


              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-2
                "
              >

                {/* GITHUB */}
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    justify-between
                    gap-3

                    border
                    border-gray-200

                    p-4

                    text-black

                    transition-all
                    duration-300

                    hover:bg-black
                    hover:text-white
                    hover:border-black
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <GithubIcon
                      className="
                        w-4
                        h-4
                      "
                    />

                    <div>

                      <span
                        className="
                          block

                          text-[10px]
                          font-mono
                          tracking-[0.1em]
                        "
                      >
                        GITHUB
                      </span>

                      <span
                        className="
                          block

                          mt-1

                          text-[9px]
                          text-gray-400

                          transition-colors
                          group-hover:text-gray-400
                        "
                      >
                        @saintjohn31
                      </span>

                    </div>

                  </div>


                  <ExternalLink
                    size={13}
                    className="
                      text-gray-300

                      transition-all
                      duration-300

                      group-hover:text-white
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                </a>


                {/* LINKEDIN */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group

                    flex
                    items-center
                    justify-between
                    gap-3

                    border
                    border-gray-200

                    p-4

                    text-black

                    transition-all
                    duration-300

                    hover:bg-blue-600
                    hover:text-white
                    hover:border-blue-600
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <LinkedinIcon
                      className="
                        w-4
                        h-4
                      "
                    />

                    <div>

                      <span
                        className="
                          block

                          text-[10px]
                          font-mono
                          tracking-[0.1em]
                        "
                      >
                        LINKEDIN
                      </span>

                      <span
                        className="
                          block

                          mt-1

                          text-[9px]
                          text-gray-400

                          transition-colors
                          group-hover:text-blue-100
                        "
                      >
                        John Railey Pael
                      </span>

                    </div>

                  </div>


                  <ExternalLink
                    size={13}
                    className="
                      text-gray-300

                      transition-all
                      duration-300

                      group-hover:text-white
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                </a>

              </div>

            </div>

          </div>


          {/* =====================================
              RIGHT SIDE — FORM
          ===================================== */}
          <div
            className="
              p-5
              sm:p-8
              lg:p-10
              xl:p-12
            "
          >

            {/* FORM HEADER */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-start
                sm:justify-between
                gap-4
                mb-9
              "
            >

              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-medium
                    tracking-[-0.03em]
                  "
                >
                  Send an inquiry
                  <span className="text-blue-500">.</span>
                </h3>


                <p
                  className="
                    mt-2

                    text-[9px]
                    sm:text-[10px]

                    font-mono
                    tracking-[0.1em]

                    text-gray-400
                  "
                >
                  YOUR MESSAGE → MY INBOX
                </p>

              </div>


              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  gap-2

                  text-[9px]
                  font-mono
                  text-gray-400
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

                EMAIL DISPATCH

              </div>

            </div>


            {/* =================================
                FORM
            ================================== */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* NAME */}
              <div className="group">

                <label
                  htmlFor="contact-name"
                  className="
                    block

                    text-[9px]
                    sm:text-[10px]

                    font-mono
                    tracking-[0.15em]

                    text-gray-400

                    mb-2

                    transition-colors

                    group-focus-within:text-blue-500
                  "
                >
                  YOUR NAME
                </label>


                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required

                  value={formData.name}
                  onChange={handleChange}

                  placeholder="e.g. Maria Santos"

                  className="
                    w-full

                    px-4
                    sm:px-5

                    py-4

                    bg-white

                    border
                    border-gray-200

                    text-sm
                    text-black

                    placeholder:text-gray-300

                    outline-none

                    transition-all
                    duration-300

                    hover:border-gray-400

                    focus:border-black
                    focus:ring-1
                    focus:ring-black
                  "
                />

              </div>


              {/* EMAIL */}
              <div className="group">

                <label
                  htmlFor="contact-email"
                  className="
                    block

                    text-[9px]
                    sm:text-[10px]

                    font-mono
                    tracking-[0.15em]

                    text-gray-400

                    mb-2

                    transition-colors

                    group-focus-within:text-blue-500
                  "
                >
                  YOUR EMAIL
                </label>


                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required

                  value={formData.email}
                  onChange={handleChange}

                  placeholder="e.g. maria@company.com"

                  className="
                    w-full

                    px-4
                    sm:px-5

                    py-4

                    bg-white

                    border
                    border-gray-200

                    text-sm
                    text-black

                    placeholder:text-gray-300

                    outline-none

                    transition-all
                    duration-300

                    hover:border-gray-400

                    focus:border-black
                    focus:ring-1
                    focus:ring-black
                  "
                />

              </div>


              {/* MESSAGE */}
              <div className="group">

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                    mb-2
                  "
                >

                  <label
                    htmlFor="contact-message"
                    className="
                      text-[9px]
                      sm:text-[10px]

                      font-mono
                      tracking-[0.15em]

                      text-gray-400

                      transition-colors

                      group-focus-within:text-blue-500
                    "
                  >
                    MESSAGE
                  </label>


                  <span
                    className="
                      text-[8px]
                      sm:text-[9px]

                      font-mono
                      text-gray-300
                    "
                  >
                    {formData.message.length}/500
                  </span>

                </div>


                <textarea
                  id="contact-message"
                  name="message"

                  rows={6}
                  required
                  maxLength={500}

                  value={formData.message}
                  onChange={handleChange}

                  placeholder="Tell me about your project, team, or opportunity..."

                  className="
                    w-full

                    min-h-[150px]

                    px-4
                    sm:px-5

                    py-4

                    bg-white

                    border
                    border-gray-200

                    text-sm
                    leading-6
                    text-black

                    placeholder:text-gray-300

                    resize-none

                    outline-none

                    transition-all
                    duration-300

                    hover:border-gray-400

                    focus:border-black
                    focus:ring-1
                    focus:ring-black
                  "
                />

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  group

                  relative
                  overflow-hidden

                  w-full

                  flex
                  items-center
                  justify-center
                  gap-3

                  bg-black
                  text-white

                  py-4

                  text-[10px]
                  sm:text-[11px]

                  font-mono
                  tracking-[0.12em]

                  transition-all
                  duration-300

                  hover:bg-blue-600
                  hover:-translate-y-[2px]

                  active:translate-y-0
                "
              >

                <Send
                  size={13}
                  className="
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />


                <span>
                  SEND INQUIRY
                </span>


                <ArrowUpRight
                  size={14}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </button>


              {/* FORM NOTE */}
              <p
                className="
                  text-[9px]
                  sm:text-[10px]

                  font-mono

                  text-gray-400

                  leading-5
                "
              >
                Clicking send will open your default email application
                with the message prepared for you.
              </p>

            </form>

          </div>

        </div>


        {/* =====================================
            FOOTER BOTTOM
        ===================================== */}
        <div
          className="
            mt-12
            sm:mt-16

            pt-6

            border-t
            border-gray-200

            flex
            flex-col
            sm:flex-row

            sm:items-center
            sm:justify-between

            gap-5

            text-[9px]
            sm:text-[10px]

            font-mono
            tracking-[0.08em]

            text-gray-400
          "
        >

          <div
            className="
              flex
              flex-col
              sm:flex-row
              sm:items-center
              gap-1
              sm:gap-3
            "
          >

            <span>
              © 2026 JOHN RAILEY PAEL
            </span>

            <span className="hidden sm:inline">
              /
            </span>

            <span>
              CREATIVE FRONT-END DEVELOPER
            </span>

          </div>


          <button
            type="button"
            onClick={scrollToTop}
            className="
              group

              self-start
              sm:self-auto

              inline-flex
              items-center
              gap-2

              text-gray-400

              transition-colors
              duration-300

              hover:text-black
            "
          >
            BACK TO TOP

            <span
              className="
                w-7
                h-7

                border
                border-gray-200

                flex
                items-center
                justify-center

                transition-all
                duration-300

                group-hover:bg-black
                group-hover:text-white
                group-hover:border-black
              "
            >
              <ArrowUp
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />
            </span>

          </button>

        </div>

      </div>
    </footer>
  );
}