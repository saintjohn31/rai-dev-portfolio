import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';

import profilePic from '../images/2bg.png';

export default function InteractivePortrait() {
  const containerRef = useRef(null);

  const [sliderPosition, setSliderPosition] = useState(60);
  const [isDragging, setIsDragging] = useState(false);
  const [activeFilter, setActiveFilter] = useState('scanline');

  const [mouseCoords, setMouseCoords] = useState({
    x: 0,
    y: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  /* =========================================================
     SLIDER POSITION
  ========================================================= */

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const rawX = clientX - rect.left;
    const percentage = (rawX / rect.width) * 100;

    const clamped = Math.max(
      5,
      Math.min(95, percentage)
    );

    setSliderPosition(clamped);
  }, []);

  /* =========================================================
     MOUSE MOVE
  ========================================================= */

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setMouseCoords({
      x: Math.round(x),
      y: Math.round(y),
    });

    if (isDragging) {
      handleMove(event.clientX);
    }
  };

  /* =========================================================
     TOUCH MOVE
  ========================================================= */

  const handleTouchMove = (event) => {
    if (
      event.touches &&
      event.touches.length > 0
    ) {
      handleMove(event.touches[0].clientX);
    }
  };

  /* =========================================================
     STOP DRAGGING
  ========================================================= */

  useEffect(() => {
    const stopDragging = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener(
        'mouseup',
        stopDragging
      );

      window.addEventListener(
        'touchend',
        stopDragging
      );
    }

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
  }, [isDragging]);

  return (
    <div
      ref={containerRef}

      onMouseMove={handleMouseMove}

      onMouseEnter={() => {
        setIsHovered(true);
      }}

      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}

      onTouchMove={handleTouchMove}

      className="
        relative
        w-full
        h-full

        min-h-[460px]
        sm:min-h-[540px]
        lg:min-h-[580px]

        bg-[#f5f5f3]

        overflow-hidden
        select-none
        cursor-ew-resize
        group
      "
    >

      {/* =====================================================
          MINIMAL BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          pointer-events-none
          opacity-[0.045]
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

          backgroundSize: '24px 24px',
        }}
      />


      {/* =====================================================
          TOP LEFT STATUS
      ====================================================== */}

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
            flex
            items-center
            gap-2

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
              w-1.5
              h-1.5
              rounded-full
              bg-emerald-500
            "
          />

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
              : 'INTERACTIVE PORTRAIT'}
          </span>
        </div>
      </div>


      {/* =====================================================
          TOP RIGHT INSTRUCTION
      ====================================================== */}

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


      {/* =====================================================
          CLEAN PORTRAIT
      ====================================================== */}

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


      {/* =====================================================
          FILTERED PORTRAIT
      ====================================================== */}

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

        {/* IMPORTANT:
            Same exact positioning as CLEAN image.
            This keeps both portraits aligned.
        */}

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

            ${activeFilter === 'scanline'
              ? `
                  grayscale
                  contrast-[2.15]
                  brightness-[0.92]
                `
              : ''
            }

            ${activeFilter === 'contrast'
              ? `
                  grayscale
                  contrast-[2.8]
                  brightness-[0.95]
                `
              : ''
            }

            ${activeFilter === 'invert'
              ? `
                  invert
                  grayscale
                  contrast-[2.2]
                `
              : ''
            }
          `}
        />


        {/* =================================================
            HORIZONTAL SCANLINES
        ================================================== */}

        {activeFilter === 'scanline' && (
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


        {/* =================================================
            MICRO GRID
        ================================================== */}

        {activeFilter === 'scanline' && (
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


        {/* =================================================
            CONTRAST TEXTURE
        ================================================== */}

        {activeFilter === 'contrast' && (
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


        {/* =================================================
            FILTER LABEL
        ================================================== */}

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


      {/* =====================================================
          SLIDER DIVIDER
      ====================================================== */}

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


      {/* =====================================================
          FILTER CONTROLS
      ====================================================== */}

      <div
        className="
          absolute

          bottom-4
          left-1/2
          -translate-x-1/2

          z-40

          flex
          items-center

          bg-white/95
          backdrop-blur-sm

          border
          border-gray-200

          p-1
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

        ].map((mode) => (

          <button
            key={mode.id}

            type="button"

            onMouseDown={(event) => {
              event.stopPropagation();
            }}

            onClick={(event) => {
              event.stopPropagation();

              setActiveFilter(mode.id);
            }}

            className={`
              px-2.5
              py-1.5

              whitespace-nowrap

              text-[7px]
              sm:text-[8px]
              lg:text-[9px]

              font-mono
              tracking-[0.08em]

              transition-colors
              duration-200

              ${activeFilter === mode.id
                ? `
                    bg-black
                    text-white
                  `
                : `
                    bg-transparent
                    text-gray-400

                    hover:text-black
                    hover:bg-gray-100
                  `
              }
            `}
          >
            {mode.label}
          </button>

        ))}

      </div>

    </div>
  );
}