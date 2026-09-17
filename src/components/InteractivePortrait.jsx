import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import profilePic from '../images/2bg.png';
import formalPic from '../images/1bg.png';
import childhoodPic from '../images/3bg.png';

import {
  playClick,
  playToggle,
  playHover,
} from '../utils/sound';


export default function InteractivePortrait() {

  const containerRef = useRef(null);


  /* =========================================
     PORTRAIT MODE
  ========================================= */

  const [portraitMode, setPortraitMode] =
    useState('digital');


  /* =========================================
     DIGITAL MODE
  ========================================= */

  const [sliderPosition, setSliderPosition] =
    useState(95);

  const [isDragging, setIsDragging] =
    useState(false);

  const [activeFilter, setActiveFilter] =
    useState('scanline');


  /* =========================================
     MOUSE
  ========================================= */

  const [mouseCoords, setMouseCoords] =
    useState({
      x: 0,
      y: 0,
    });

  const [mousePercent, setMousePercent] =
    useState({
      x: 50,
      y: 50,
    });

  const [isHovered, setIsHovered] =
    useState(false);

  const [formalScanPlayed, setFormalScanPlayed] =
    useState(false);


  /* =========================================
     UPDATE SLIDER
  ========================================= */

  const updateSlider = useCallback(
    (clientX) => {

      if (!containerRef.current) {
        return;
      }

      const rect =
        containerRef.current
          .getBoundingClientRect();

      const x =
        clientX - rect.left;

      const percentage =
        (x / rect.width) * 100;

      const clamped =
        Math.max(
          2,
          Math.min(
            98,
            percentage
          )
        );

      setSliderPosition(clamped);

    },
    []
  );


  /* =========================================
     MOUSE MOVE
  ========================================= */

  const handleMouseMove = (event) => {

    if (!containerRef.current) {
      return;
    }

    const rect =
      containerRef.current
        .getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const percentX =
      Math.max(
        0,
        Math.min(
          100,
          (x / rect.width) * 100
        )
      );

    const percentY =
      Math.max(
        0,
        Math.min(
          100,
          (y / rect.height) * 100
        )
      );


    setMouseCoords({
      x: Math.round(x),
      y: Math.round(y),
    });


    setMousePercent({
      x: percentX,
      y: percentY,
    });


    if (isDragging) {

      updateSlider(
        event.clientX
      );

    }

  };


  /* =========================================
     TOUCH MOVE
  ========================================= */

  const handleTouchMove = (event) => {

    if (
      !event.touches ||
      event.touches.length === 0
    ) {
      return;
    }

    updateSlider(
      event.touches[0].clientX
    );

  };


  /* =========================================
     RESET SLIDER PER PORTRAIT
  ========================================= */

  useEffect(() => {

    if (portraitMode === 'formal') {
      setSliderPosition(2);
    }

    if (portraitMode === 'digital') {
      setSliderPosition(95);
    }

  }, [portraitMode]);


  /* =========================================
     STOP DRAGGING
  ========================================= */

  useEffect(() => {

    const stopDragging = () => {
      setIsDragging(false);
    };


    window.addEventListener(
      'mouseup',
      stopDragging
    );

    window.addEventListener(
      'touchend',
      stopDragging
    );


    return () => {

      window.removeEventListener(
        'mouseup',
        stopDragging
      );

      window.removeEventListener(
        'touchend',
        stopDragging
      );

    };

  }, []);


  /* =========================================
     FORMAL PARALLAX
  ========================================= */

  const normalizedX =
    (mousePercent.x - 50) / 50;

  const normalizedY =
    (mousePercent.y - 50) / 50;


  /*
    Very subtle movement.
    We don't want the formal portrait
    to feel like a game card.
  */

  const imageMoveX =
    normalizedX * -5;

  const imageMoveY =
    normalizedY * -3;

  const rotateY =
    normalizedX * 0.7;

  const rotateX =
    normalizedY * -0.5;


  return (

    <div
      ref={containerRef}

      onMouseMove={
        handleMouseMove
      }

      onMouseEnter={() => {
        setIsHovered(true);

        if (portraitMode === 'formal' && !formalScanPlayed) {
          setFormalScanPlayed(true);
        }
      }}

      onMouseLeave={() => {

        setIsHovered(false);

        setIsDragging(false);

        setMousePercent({
          x: 50,
          y: 50,
        });

      }}

      onTouchMove={
        handleTouchMove
      }

      className="
        portrait-theme

        relative
        isolate

        w-full
        h-full

        min-h-[460px]
        sm:min-h-[540px]
        lg:min-h-[580px]

        overflow-hidden

        bg-[#f7f7f5]

        select-none
      "
    >


      {/* =====================================
          BACKGROUND GRID
      ====================================== */}

      <div
        className={`
          absolute
          inset-0

          pointer-events-none

          transition-opacity
          duration-700

          ${portraitMode === 'digital'
            ? 'opacity-[0.045]'
            : 'opacity-[0.025]'
          }
        `}

        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              #000 1px,
              transparent 1px
            ),

            linear-gradient(
              to bottom,
              #000 1px,
              transparent 1px
            )
          `,

          backgroundSize:
            portraitMode === 'digital'
              ? '24px 24px'
              : '32px 32px',
        }}
      />


      {/* =====================================
          DIGITAL MODE
      ====================================== */}

      <div
        className={`
          absolute
          inset-0

          transition-all
          duration-700
          ease-out

          ${portraitMode === 'digital'
            ? `
                  opacity-100
                  translate-x-0
                  scale-100
                  pointer-events-auto
                `
            : `
                  opacity-0
                  -translate-x-5
                  scale-[0.99]
                  pointer-events-none
                `
          }
        `}
      >


        {/* =================================
            DIGITAL TOP LEFT
        ================================== */}

        <div
          className="
            absolute

            top-4
            left-4

            z-40

            pointer-events-none
          "
        >

          <div
            className="
              bg-white/90

              backdrop-blur-sm

              border
              border-gray-200

              px-2.5
              py-1.5
            "
          >

            <span
              className="
                text-[8px]
                sm:text-[9px]

                font-mono

                tracking-[0.08em]

                text-gray-500
              "
            >

              {isHovered
                ? `X: ${mouseCoords.x} Y: ${mouseCoords.y}`
                : 'INTERACTIVE PORTRAIT'
              }

            </span>

          </div>

        </div>


        {/* =================================
            DIGITAL TOP RIGHT
        ================================== */}

        <div
          className="
            absolute

            top-4
            right-4

            z-40

            pointer-events-none
          "
        >

          <div
            className="
              bg-white/90

              backdrop-blur-sm

              border
              border-gray-200

              px-2.5
              py-1.5

              text-[8px]
              sm:text-[9px]

              font-mono

              tracking-[0.08em]

              text-gray-400
            "
          >
            DRAG SLIDER
          </div>

        </div>


        {/* =================================
            CLEAN IMAGE
        ================================== */}

        <div
          className="
            absolute
            inset-0

            overflow-hidden
          "
        >

          <img
            src={profilePic}

            alt="John Railey Pael"

            draggable="false"

            className="
              absolute

              bottom-0
              left-1/2

              -translate-x-1/2

              w-auto
              h-[92%]

              max-w-none

              object-contain
              object-bottom

              contrast-[1.03]

              select-none
              pointer-events-none
            "
          />


          {/* CLEAN LABEL */}

          <div
            className="
              absolute

              bottom-4
              right-4

              z-20

              pointer-events-none
            "
          >

            <span
              className="
                bg-white/90

                border
                border-gray-200

                px-2
                py-1

                text-[8px]

                font-mono

                tracking-[0.12em]

                text-gray-400
              "
            >
              CLEAN
            </span>

          </div>

        </div>


        {/* =================================
            FILTERED IMAGE
        ================================== */}

        <div
          className="
            absolute
            inset-0

            overflow-hidden

            bg-[#ededeb]
          "

          style={{
            clipPath: `
              polygon(
                0 0,
                ${sliderPosition}% 0,
                ${sliderPosition}% 100%,
                0 100%
              )
            `,
          }}
        >

          <img
            src={profilePic}

            alt="John Railey Pael filtered"

            draggable="false"

            className={`
              absolute

              bottom-0
              left-1/2

              -translate-x-1/2

              w-auto
              h-[92%]

              max-w-none

              object-contain
              object-bottom

              select-none
              pointer-events-none

              filter

              ${activeFilter ===
                'scanline'

                ? `
                      grayscale
                      contrast-[2.15]
                      brightness-[0.92]
                    `

                : ''
              }

              ${activeFilter ===
                'contrast'

                ? `
                      grayscale
                      contrast-[2.8]
                      brightness-[0.95]
                    `

                : ''
              }

              ${activeFilter ===
                'invert'

                ? `
                      invert
                      grayscale
                      contrast-[2.2]
                    `

                : ''
              }
            `}
          />


          {/* =================================
              SCANLINES
          ================================== */}

          {activeFilter ===
            'scanline' && (

              <div
                className="
                  absolute
                  inset-0

                  z-10

                  pointer-events-none

                  opacity-[0.25]
                "

                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,

                      #000 0px,
                      #000 1px,

                      transparent 1px,
                      transparent 3px
                    )
                  `,
                }}
              />

            )}


          {/* =================================
              MICRO GRID
          ================================== */}

          {activeFilter ===
            'scanline' && (

              <div
                className="
                  absolute
                  inset-0

                  z-10

                  pointer-events-none

                  opacity-[0.08]
                "

                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      90deg,

                      #000 0px,
                      #000 1px,

                      transparent 1px,
                      transparent 4px
                    )
                  `,
                }}
              />

            )}


          {/* =================================
              CONTRAST TEXTURE
          ================================== */}

          {activeFilter ===
            'contrast' && (

              <div
                className="
                  absolute
                  inset-0

                  z-10

                  pointer-events-none

                  opacity-[0.12]
                "

                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,

                      #000 0px,
                      #000 1px,

                      transparent 1px,
                      transparent 5px
                    )
                  `,
                }}
              />

            )}


          {/* FILTER LABEL */}

          <div
            className="
              absolute

              bottom-4
              left-4

              z-20

              pointer-events-none
            "
          >

            <span
              className="
                bg-white/90

                border
                border-gray-200

                px-2
                py-1

                text-[8px]

                font-mono

                tracking-[0.12em]

                text-black
              "
            >
              {activeFilter.toUpperCase()}
            </span>

          </div>

        </div>


        {/* =================================
            SLIDER
        ================================== */}

        <div
          className="
            absolute

            top-0
            bottom-0

            z-30

            flex
            items-center
            justify-center

            cursor-ew-resize
          "

          style={{
            left:
              `${sliderPosition}%`,
          }}

          onMouseDown={(event) => {

            event.preventDefault();

            setIsDragging(true);

          }}

          onTouchStart={() => {

            setIsDragging(true);

          }}
        >

          {/* LINE */}

          <div
            className="
              absolute

              top-0
              bottom-0

              w-px

              bg-white

              shadow-[0_0_5px_rgba(0,0,0,0.15)]
            "
          />


          {/* HANDLE */}

          <div
            className="
              relative

              w-6
              h-12

              bg-white

              border
              border-gray-300

              rounded-r-full

              shadow-sm

              flex
              items-center
              justify-center

              transition-transform
              duration-200

              hover:scale-105
              active:scale-95
            "
          >

            <div
              className="
                flex
                flex-col

                items-center

                gap-1
              "
            >

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-gray-400
                "
              />

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-gray-400
                "
              />

              <span
                className="
                  w-1
                  h-1

                  rounded-full

                  bg-gray-400
                "
              />

            </div>

          </div>

        </div>


        {/* =================================
    FILTER CONTROLS — BOTTOM
================================= */}

        {portraitMode === 'digital' && (

          <div
            className="
      absolute
      bottom-5
      left-1/2
      -translate-x-1/2

      z-40

      flex
      items-center

      bg-white/95
      backdrop-blur-md

      border
      border-gray-200

      p-1

      shadow-[0_8px_30px_rgba(0,0,0,0.035)]
    "
          >

            {[
              {
                id: 'scanline',
                label: 'SCANLINE',
              },
              {
                id: 'contrast',
                label: 'CONTRAST',
              },
              {
                id: 'invert',
                label: 'INVERT',
              },
            ].map((filter) => {

              const active =
                activeFilter === filter.id;

              return (

                <button
                  key={filter.id}
                  type="button"

                  onMouseDown={(event) => {
                    event.stopPropagation();
                  }}

                  onMouseEnter={playHover}

                  onClick={(event) => {
                    event.stopPropagation();
                    playClick();

                    setActiveFilter(
                      filter.id
                    );
                  }}

                  className={`
            min-h-[32px]

            px-3
            sm:px-4

            flex
            items-center
            justify-center

            whitespace-nowrap

            text-[7px]
            sm:text-[8px]
            lg:text-[9px]

            font-mono
            font-medium

            tracking-[0.08em]

            transition-all
            duration-300

            ${active
                      ? `
                    bg-black
                    text-white
                  `
                      : `
                    bg-transparent
                    text-gray-400

                    hover:bg-gray-100
                    hover:text-black
                  `
                    }
          `}
                >
                  {filter.label}
                </button>

              );

            })}

          </div>

        )}

      </div>


      {/* =====================================
          FORMAL MODE
      ====================================== */}

      <div
        className={`
          absolute
          inset-0

          overflow-hidden

          transition-all
          duration-700
          ease-out

          ${portraitMode === 'formal'
            ? `
                  opacity-100
                  translate-x-0
                  scale-100
                  pointer-events-auto
                `
            : `
                  opacity-0
                  translate-x-5
                  scale-[0.99]
                  pointer-events-none
                `
          }
        `}
      >


        {/* =================================
            SOFT BACKGROUND
        ================================== */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-b
            from-white/30
            via-transparent
            to-black/[0.015]

            pointer-events-none
          "
        />


        {/* =================================
            CURSOR SPOTLIGHT
        ================================== */}

        <div
          className="
            absolute
            inset-0

            pointer-events-none

            transition-opacity
            duration-500
          "

          style={{
            opacity:
              isHovered
                ? 1
                : 0,

            background: `
              radial-gradient(
                320px circle at
                ${mousePercent.x}%
                ${mousePercent.y}%,

                rgba(
                  0,
                  0,
                  0,
                  0.045
                ),

                transparent 68%
              )
            `,
          }}
        />


        {/* =================================
            TOP LABEL
        ================================== */}

        <div
          className="
            absolute

            top-5
            left-5

            sm:top-6
            sm:left-6

            z-30

            flex
            items-center

            pointer-events-none
          "
        >
          <span
            className="
              text-[8px]
              sm:text-[9px]

              font-mono
              font-medium

              tracking-[0.16em]

              text-gray-500
            "
          >
            02 / FORMAL
          </span>

        </div>


        {/* =================================
            TOP RIGHT STATUS
        ================================== */}

        <div
          className="
            absolute

            top-5
            right-5

            sm:top-6
            sm:right-6

            z-30

            flex
            items-center

            gap-2

            pointer-events-none
          "
        >

          <span
            className={`
              block

              w-1.5
              h-1.5

              rounded-full

              transition-all
              duration-500

              ${isHovered
                ? `
                      bg-black
                      scale-100
                    `
                : `
                      bg-gray-300
                      scale-75
                    `
              }
            `}
          />


          <span
            className="
              hidden
              sm:block

              text-[8px]

              font-mono

              tracking-[0.12em]

              text-gray-400
            "
          >
            PORTRAIT
          </span>

        </div>


        {/* =================================
            FORMAL IMAGE
        ================================== */}

        <div
          className="
            absolute
            inset-0

            flex
            items-end
            justify-center

            pointer-events-none

            [perspective:1200px]
          "
        >

          <img
            src={formalPic}

            alt="John Railey Pael formal portrait"

            draggable="false"

            className="
              absolute

              bottom-0
              left-1/2

              w-auto

              h-[94%]
              sm:h-[95%]
              lg:h-[96%]

              max-w-none

              object-contain
              object-bottom

              select-none

              transition-transform
              duration-500
              ease-out

              drop-shadow-[0_20px_35px_rgba(0,0,0,0.04)]
            "

            style={{
              transform: `
                translateX(
                  calc(
                    -50% +
                    ${imageMoveX}px
                  )
                )

                translateY(
                  ${imageMoveY}px
                )

                rotateX(
                  ${rotateX}deg
                )

                rotateY(
                  ${rotateY}deg
                )

                scale(
                  ${isHovered
                  ? 1.008
                  : 1
                }
                )
              `,
            }}
          />

        </div>



        {/* =================================
            CHILDHOOD REVEAL
            DEFAULT = FORMAL 1BG.PNG
            DRAG RIGHT = REVEAL 3BG.PNG
        ================================== */}

        <div
          className="
            absolute
            inset-0
            z-[8]
            overflow-hidden
            pointer-events-none
          "
          style={{
            clipPath: `
              polygon(
                0 0,
                ${sliderPosition}% 0,
                ${sliderPosition}% 100%,
                0 100%
              )
            `,
          }}
        >
          <div
            className="
              absolute
              inset-0
              bg-[#f7f7f5]
            "
          >
            <div
              className="
                absolute
                inset-0
                pointer-events-none
                opacity-[0.035]
              "
              style={{
                backgroundImage: `
                  linear-gradient(
                    to right,
                    #000 1px,
                    transparent 1px
                  ),
                  linear-gradient(
                    to bottom,
                    #000 1px,
                    transparent 1px
                  )
                `,
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div
            className="
              absolute
              inset-0
              flex
              items-end
              justify-center
              [perspective:1200px]
            "
          >
            <img
              src={childhoodPic}
              alt="John Railey Pael childhood graduation portrait"
              draggable="false"
              className="
                absolute
                bottom-0
                left-1/2
                w-auto
                h-[94%]
                sm:h-[95%]
                lg:h-[96%]
                max-w-none
                object-contain
                object-bottom
                select-none
                pointer-events-none
                transition-transform
                duration-500
                ease-out
                drop-shadow-[0_20px_35px_rgba(0,0,0,0.04)]
              "
              style={{
                transform: `
                  translateX(
                    calc(
                      -50% +
                      ${imageMoveX}px
                    )
                  )
                  translateY(
                    ${imageMoveY}px
                  )
                  rotateX(
                    ${rotateX}deg
                  )
                  rotateY(
                    ${rotateY}deg
                  )
                  scale(
                    ${isHovered ? 1.008 : 1}
                  )
                `,
              }}
            />
          </div>
        </div>


        {/* =================================
            FORMAL REVEAL SLIDER
        ================================== */}

        <div
          className="
            absolute
            top-0
            bottom-0
            z-30
            flex
            items-center
            justify-center
            cursor-ew-resize
          "
          style={{
            left: `${sliderPosition}%`,
          }}
          onMouseDown={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsDragging(true);
          }}
          onTouchStart={(event) => {
            event.stopPropagation();
            setIsDragging(true);
          }}
        >
          <div
            className="
              absolute
              top-0
              bottom-0
              w-px
              bg-black
              shadow-[0_0_6px_rgba(0,0,0,0.18)]
            "
          />

          <div
            className="
              relative
              w-6
              h-12
              bg-[#f7f7f5]
              border
              border-gray-300
              rounded-r-full
              shadow-sm
              flex
              items-center
              justify-center
              transition-transform
              duration-200
              hover:scale-105
              active:scale-95
            "
          >
            <div className="flex flex-col items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span className="w-1 h-1 rounded-full bg-gray-400" />
            </div>
          </div>
        </div>


        {/* =================================
            SOFT FOCUS LENS
            Only appears while exploring portrait 02.
        ================================== */}

        <div
          className="
            absolute
            inset-0
            z-10
            pointer-events-none
            transition-opacity
            duration-300
          "
          style={{
            opacity: isHovered ? 1 : 0,
            background: `
              radial-gradient(
                105px circle at
                ${mousePercent.x}%
                ${mousePercent.y}%,
                rgba(255,255,255,0.13) 0%,
                rgba(255,255,255,0.055) 42%,
                transparent 72%
              )
            `,
          }}
        />


        {/* =================================
            ONE-TIME BLUE SCAN REVEAL
        ================================== */}

        {formalScanPlayed && (
          <div
            className="
              formal-scan-line
              absolute
              left-[8%]
              right-[8%]
              top-0
              z-20
              h-px
              bg-black/70
              pointer-events-none
              shadow-[0_0_14px_rgba(59,130,246,0.28)]
            "
          />
        )}


        {/* =================================
            SUBTLE BOTTOM FADE
        ================================== */}

        <div
          className="
            absolute

            left-0
            right-0
            bottom-0

            h-24

            bg-gradient-to-t
            from-[#f7f7f5]/35
            to-transparent

            pointer-events-none
          "
        />

      </div>


      {/* =====================================
    PORTRAIT SWITCHER — TOP CENTER
====================================== */}

      <div
        className="
    absolute

    top-4
    sm:top-5

    left-1/2
    -translate-x-1/2

    z-50

    flex
    items-center

    bg-white/95
    backdrop-blur-md

    border
    border-gray-200

    p-1

    shadow-[0_8px_30px_rgba(0,0,0,0.025)]
  "
      >

        {[
          {
            id: 'digital',
            number: '01',
          },
          {
            id: 'formal',
            number: '02',
          },
        ].map((item) => {

          const active =
            portraitMode === item.id;

          return (

            <button
              onMouseEnter={playHover}
              key={item.id}
              type="button"

              onMouseDown={(event) => {
                event.stopPropagation();
              }}

              onClick={(event) => {
                event.stopPropagation();
                playToggle();

                setPortraitMode(
                  item.id
                );
              }}

              aria-label={
                item.id === 'digital'
                  ? 'View digital portrait'
                  : 'View formal portrait'
              }

              className={`
          min-w-[46px]
          sm:min-w-[52px]

          h-8

          flex
          items-center
          justify-center

          text-[8px]
          sm:text-[9px]

          font-mono
          font-semibold

          tracking-[0.1em]

          transition-all
          duration-300

          ${active
                  ? `
                  bg-black
                  text-white
                `
                  : `
                  bg-transparent
                  text-gray-400

                  hover:bg-gray-100
                  hover:text-black
                `
                }
        `}
            >
              {item.number}
            </button>

          );

        })}

      </div>

      <style>{`
        @keyframes formalPortraitScan {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          8% {
            opacity: 0.75;
          }
          88% {
            opacity: 0.55;
          }
          100% {
            transform: translateY(560px);
            opacity: 0;
          }
        }

        .formal-scan-line {
          animation: formalPortraitScan 1.15s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        @media (min-width: 640px) {
          @keyframes formalPortraitScan {
            0% { transform: translateY(0); opacity: 0; }
            8% { opacity: 0.75; }
            88% { opacity: 0.55; }
            100% { transform: translateY(650px); opacity: 0; }
          }
        }
      `}</style>

    </div>

  );

}