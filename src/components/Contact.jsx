import {
  useState,
} from 'react';

import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  ArrowUpRight,
  Send,
  ExternalLink,
} from 'lucide-react';

import {
  GithubIcon,
  LinkedinIcon,
} from './Icons';

import {
  playClick,
  playHover,
  playKeypress,
} from '../utils/sound';


/* =========================================
   FACEBOOK ICON
========================================= */

function FacebookIcon({
  className = '',
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  );
}


export default function Contact() {

  /* =========================================
     CONTACT DETAILS
  ========================================= */

  const email =
    'johnrailey550@gmail.com';

  const facebook =
    'https://www.facebook.com/john.railey.129';

  const github =
    'https://github.com/saintjohn31';

  const linkedin =
    'https://www.linkedin.com/in/john-railey-pael-865224437/';


  /* =========================================
     STATE
  ========================================= */

  const [copied, setCopied] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: '',
      email: '',
      message: '',
    });


  /* =========================================
     COPY EMAIL
  ========================================= */

  const copyEmail = async () => {

    try {

      await navigator.clipboard.writeText(
        email
      );

      playClick();

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);

    } catch (error) {

      console.error(
        'Unable to copy email:',
        error
      );

    }

  };


  /* =========================================
     FORM CHANGE
  ========================================= */

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;

    setFormData((current) => ({
      ...current,

      [name]:
        name === 'message'
          ? value.slice(0, 500)
          : value,
    }));

  };


  /* =========================================
     FORM KEYBOARD SOUND
  ========================================= */

  const handleFormKeyDown = (event) => {

    if (
      event.key.length === 1 ||
      event.key === 'Backspace' ||
      event.key === 'Delete'
    ) {
      playKeypress(event.key);
    }

  };


  /* =========================================
     FORM SUBMIT
  ========================================= */

  const handleSubmit = (event) => {

    event.preventDefault();

    const subject =
      encodeURIComponent(
        `Portfolio message from ${formData.name}`
      );

    const body =
      encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `${formData.message}`
      );

    window.location.href =
      `mailto:${email}?subject=${subject}&body=${body}`;

  };


  /* =========================================
     BACK TO TOP
  ========================================= */

  const backToTop = () => {

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

        bg-[#f7f7f5]
        text-black

        border-t
        border-gray-200
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

        <div
          className="
            mb-10
            sm:mb-12
          "
        >

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
            05 / GET IN TOUCH
          </p>

        </div>


        {/* =====================================
            CONTACT GRID
        ====================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[0.9fr_1.1fr]

            gap-12
            lg:gap-20
          "
        >

          {/* =================================
              LEFT SIDE
          ================================== */}

          <div>

            {/* HEADING */}

            <h2
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl

                font-semibold

                tracking-[-0.05em]
                leading-[0.95]

                mb-6
              "
            >

              Let's build

              <br />

              <span className="theme-heading-accent">
                something great.
              </span>

            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                max-w-lg

                text-sm
                sm:text-[15px]

                leading-7

                text-gray-500

                mb-8
              "
            >
              Have a project, idea, or opportunity
              you'd like to discuss? Feel free to
              reach out. I'm always interested in
              building thoughtful digital experiences
              and collaborating on meaningful work.
            </p>


            {/* =================================
                EMAIL CARD
            ================================== */}

            <div
              className="
                group/email

                relative

                border
                border-gray-200

                bg-white

                p-4
                sm:p-5

                mb-5

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
                  right-0

                  h-px

                  bg-blue-500
                "
              />


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

                {/* EMAIL INFO */}

                <div className="min-w-0">

                  <div
                    className="
                      flex
                      items-center

                      gap-2

                      mb-2

                      text-gray-500
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

                        tracking-[0.16em]

                        uppercase
                      "
                    >
                      Email
                    </span>

                  </div>


                  <a
                    onMouseEnter={playHover}
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
                  onMouseEnter={playHover}
                  type="button"

                  onClick={copyEmail}

                  className="
                    shrink-0

                    inline-flex
                    items-center
                    justify-center

                    gap-2

                    min-h-[42px]

                    px-5

                    bg-black
                    text-white

                    text-[9px]
                    sm:text-[10px]

                    font-mono
                    font-semibold

                    tracking-[0.1em]

                    transition-all
                    duration-300

                    hover:bg-blue-600
                  "
                >

                  {copied ? (
                    <Check size={13} />
                  ) : (
                    <Copy size={13} />
                  )}

                  <span>
                    {copied
                      ? 'COPIED'
                      : 'COPY'
                    }
                  </span>

                </button>

              </div>

            </div>


            {/* =================================
                SOCIAL LINKS
                ALPHABETICAL ORDER:
                FACEBOOK → GITHUB → LINKEDIN
            ================================== */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-3

                gap-2
              "
            >

              {/* FACEBOOK */}

              <a
                onMouseEnter={playHover}
                href={facebook}

                target="_blank"
                rel="noopener noreferrer"

                className="
                  group/social

                  flex
                  items-center
                  justify-between

                  gap-3

                  min-h-[58px]

                  px-4

                  border
                  border-gray-200

                  bg-white

                  transition-all
                  duration-300

                  hover:border-gray-400
                "
              >

                <div
                  className="
                    flex
                    items-center

                    gap-3

                    min-w-0
                  "
                >

                  <FacebookIcon
                    className="
                      w-4
                      h-4

                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      xl:text-[10px]

                      font-mono
                      font-medium

                      tracking-[0.06em]

                      whitespace-nowrap
                    "
                  >
                    FACEBOOK
                  </span>

                </div>


                <ArrowUpRight
                  size={13}

                  className="
                    shrink-0

                    text-gray-400

                    transition-all
                    duration-300

                    group-hover/social:text-blue-500

                    group-hover/social:translate-x-0.5
                    group-hover/social:-translate-y-0.5
                  "
                />

              </a>


              {/* GITHUB */}

              <a
                onMouseEnter={playHover}
                href={github}

                target="_blank"
                rel="noopener noreferrer"

                className="
                  group/social

                  flex
                  items-center
                  justify-between

                  gap-3

                  min-h-[58px]

                  px-4

                  border
                  border-gray-200

                  bg-white

                  transition-all
                  duration-300

                  hover:border-gray-400
                "
              >

                <div
                  className="
                    flex
                    items-center

                    gap-3

                    min-w-0
                  "
                >

                  <GithubIcon
                    className="
                      w-4
                      h-4

                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      xl:text-[10px]

                      font-mono
                      font-medium

                      tracking-[0.06em]

                      whitespace-nowrap
                    "
                  >
                    GITHUB
                  </span>

                </div>


                <ArrowUpRight
                  size={13}

                  className="
                    shrink-0

                    text-gray-400

                    transition-all
                    duration-300

                    group-hover/social:text-blue-500

                    group-hover/social:translate-x-0.5
                    group-hover/social:-translate-y-0.5
                  "
                />

              </a>


              {/* LINKEDIN */}

              <a
                onMouseEnter={playHover}
                href={linkedin}

                target="_blank"
                rel="noopener noreferrer"

                className="
                  group/social

                  flex
                  items-center
                  justify-between

                  gap-3

                  min-h-[58px]

                  px-4

                  border
                  border-gray-200

                  bg-white

                  transition-all
                  duration-300

                  hover:border-gray-400
                "
              >

                <div
                  className="
                    flex
                    items-center

                    gap-3

                    min-w-0
                  "
                >

                  <LinkedinIcon
                    className="
                      w-4
                      h-4

                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      xl:text-[10px]

                      font-mono
                      font-medium

                      tracking-[0.06em]

                      whitespace-nowrap
                    "
                  >
                    LINKEDIN
                  </span>

                </div>


                <ArrowUpRight
                  size={13}

                  className="
                    shrink-0

                    text-gray-400

                    transition-all
                    duration-300

                    group-hover/social:text-blue-500

                    group-hover/social:translate-x-0.5
                    group-hover/social:-translate-y-0.5
                  "
                />

              </a>

            </div>

          </div>


          {/* =================================
              RIGHT SIDE — MESSAGE FORM
          ================================== */}

          <div
            className="
              border
              border-gray-200

              bg-white

              p-5
              sm:p-7
              lg:p-8
            "
          >

            {/* FORM HEADER */}

            <div
              className="
                flex
                items-center
                justify-between

                gap-4

                pb-5
                mb-6

                border-b
                border-gray-200
              "
            >

              <div>

                <p
                  className="
                    text-[9px]

                    font-mono

                    tracking-[0.16em]

                    text-gray-400

                    mb-1
                  "
                >
                  SEND A MESSAGE
                </p>

                <p
                  className="
                    text-sm

                    font-medium

                    text-black
                  "
                >
                  Start a conversation.
                </p>

              </div>


              <Mail
                size={18}

                className="
                  text-blue-500
                "
              />

            </div>


            {/* FORM */}

            <form
              onSubmit={handleSubmit}

              className="
                space-y-5
              "
            >

              {/* NAME */}

              <div>

                <label
                  htmlFor="contact-name"

                  className="
                    block

                    text-[9px]

                    font-mono
                    font-medium

                    tracking-[0.12em]

                    text-gray-500

                    mb-2
                  "
                >
                  NAME
                </label>


                <input
                  id="contact-name"

                  name="name"

                  type="text"

                  required

                  value={formData.name}

                  onChange={handleChange}

                  onKeyDown={handleFormKeyDown}

                  placeholder="Your name"

                  className="
                    w-full

                    min-h-[46px]

                    px-3.5

                    bg-transparent

                    border
                    border-gray-300

                    text-sm
                    text-black

                    outline-none

                    placeholder:text-gray-400

                    transition-all
                    duration-300

                    focus:border-blue-500
                  "
                />

              </div>


              {/* EMAIL */}

              <div>

                <label
                  htmlFor="contact-email"

                  className="
                    block

                    text-[9px]

                    font-mono
                    font-medium

                    tracking-[0.12em]

                    text-gray-500

                    mb-2
                  "
                >
                  EMAIL
                </label>


                <input
                  id="contact-email"

                  name="email"

                  type="email"

                  required

                  value={formData.email}

                  onChange={handleChange}

                  onKeyDown={handleFormKeyDown}

                  placeholder="your@email.com"

                  className="
                    w-full

                    min-h-[46px]

                    px-3.5

                    bg-transparent

                    border
                    border-gray-300

                    text-sm
                    text-black

                    outline-none

                    placeholder:text-gray-400

                    transition-all
                    duration-300

                    focus:border-blue-500
                  "
                />

              </div>


              {/* MESSAGE */}

              <div>

                <div
                  className="
                    flex
                    items-center
                    justify-between

                    gap-3

                    mb-2
                  "
                >

                  <label
                    htmlFor="contact-message"

                    className="
                      text-[9px]

                      font-mono
                      font-medium

                      tracking-[0.12em]

                      text-gray-500
                    "
                  >
                    MESSAGE
                  </label>


                  <span
                    className="
                      text-[8px]

                      font-mono

                      text-gray-400
                    "
                  >
                    {formData.message.length}/500
                  </span>

                </div>


                <textarea
                  id="contact-message"

                  name="message"

                  required

                  rows={7}

                  maxLength={500}

                  value={formData.message}

                  onChange={handleChange}

                  onKeyDown={handleFormKeyDown}

                  placeholder="Tell me about your project or idea..."

                  className="
                    w-full

                    resize-none

                    p-3.5

                    bg-transparent

                    border
                    border-gray-300

                    text-sm
                    text-black

                    leading-6

                    outline-none

                    placeholder:text-gray-400

                    transition-all
                    duration-300

                    focus:border-blue-500
                  "
                />

              </div>


              {/* SUBMIT */}

              <button
                onMouseEnter={playHover}
                type="submit"

                className="
                  group/send

                  w-full

                  min-h-[48px]

                  flex
                  items-center
                  justify-center

                  gap-2

                  bg-black
                  text-white

                  px-5
                  py-3

                  text-[10px]

                  font-mono
                  font-semibold

                  tracking-[0.12em]

                  transition-all
                  duration-300

                  hover:bg-blue-600
                "
              >

                <Send
                  size={13}

                  className="
                    transition-transform
                    duration-300

                    group-hover/send:translate-x-0.5
                    group-hover/send:-translate-y-0.5
                  "
                />

                SEND MESSAGE

              </button>


              {/* NOTE */}

              <p
                className="
                  text-[8px]
                  sm:text-[9px]

                  font-mono

                  leading-4

                  text-gray-400
                "
              >
                This opens your default email application
                with the message automatically prepared.
              </p>

            </form>

          </div>

        </div>

      </div>


      {/* =====================================
          BOTTOM FOOTER
      ====================================== */}

      <div
        className="
          relative
          z-10

          border-t
          border-gray-200
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto

            px-4
            sm:px-6

            min-h-[78px]

            flex
            flex-col
            sm:flex-row

            items-start
            sm:items-center

            justify-between

            gap-5

            py-5
          "
        >

          {/* COPYRIGHT */}

          <div>

            <p
              className="
                text-[9px]
                sm:text-[10px]

                font-mono
                font-medium

                tracking-[0.08em]

                text-black
              "
            >
              © 2026 JOHN RAILEY PAEL
            </p>

            <p
              className="
                mt-1

                text-[8px]
                sm:text-[9px]

                font-mono

                tracking-[0.06em]

                text-gray-400
              "
            >
              CREATIVE FRONT-END DEVELOPER ·
              AI-ASSISTED DEVELOPER
            </p>

          </div>


          {/* RIGHT */}

          <div
            className="
              flex
              items-center

              gap-3
            "
          >

            <a
              onMouseEnter={playHover}
              href={`mailto:${email}`}

              className="
                hidden
                sm:inline-flex

                items-center

                gap-1.5

                text-[9px]

                font-mono

                tracking-[0.06em]

                text-gray-500

                transition-colors
                duration-300

                hover:text-blue-500
              "
            >

              EMAIL ME

              <ExternalLink size={10} />

            </a>


            <button
              onMouseEnter={playHover}
              type="button"

              onClick={backToTop}

              className="
                group/top

                inline-flex
                items-center
                justify-center

                gap-2

                min-h-[38px]

                px-3

                border
                border-gray-300

                bg-white

                text-[9px]

                font-mono
                font-medium

                tracking-[0.08em]

                text-black

                transition-all
                duration-300

                hover:border-blue-500
                hover:text-blue-500
              "
            >

              BACK TO TOP

              <ArrowUp
                size={11}

                className="
                  transition-transform
                  duration-300

                  group-hover/top:-translate-y-0.5
                "
              />

            </button>

          </div>

        </div>

      </div>

    </footer>

  );

}