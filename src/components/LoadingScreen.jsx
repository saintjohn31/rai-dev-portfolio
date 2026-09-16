import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const getStatus = () => {
        if (progress < 25) return 'INITIALIZING';
        if (progress < 50) return 'LOADING PROJECTS';
        if (progress < 75) return 'LOADING INTERFACE';
        if (progress < 100) return 'ALMOST READY';

        return 'READY';
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((current) => {
                if (current >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                const increment = Math.floor(Math.random() * 5) + 2;

                return Math.min(current + increment, 100);
            });
        }, 45);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress !== 100) return;

        const leaveTimer = setTimeout(() => {
            setLeaving(true);
        }, 300);

        const completeTimer = setTimeout(() => {
            sessionStorage.setItem('rai-dev-loaded', 'true');
            onComplete?.();
        }, 950);

        return () => {
            clearTimeout(leaveTimer);
            clearTimeout(completeTimer);
        };
    }, [progress, onComplete]);

    return (
        <div
            className={`
        fixed
        inset-0
        z-[99999]

        bg-white
        text-black

        overflow-hidden

        transition-all
        duration-700
        ease-[cubic-bezier(0.76,0,0.24,1)]

        ${leaving
                    ? 'opacity-0 scale-[1.02] pointer-events-none'
                    : 'opacity-100 scale-100'
                }
      `}
        >
            {/* ==================================================
          VERY SUBTLE BACKGROUND GRID
      =================================================== */}
            <div
                className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.35]
        "
                style={{
                    backgroundImage: `
            linear-gradient(
              to right,
              rgba(0,0,0,0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.035) 1px,
              transparent 1px
            )
          `,
                    backgroundSize: '48px 48px',
                }}
            />

            {/* ==================================================
          TOP
      =================================================== */}
            <div
                className="
          absolute
          top-0
          left-0
          right-0

          px-5
          sm:px-8
          lg:px-12

          py-5
          sm:py-7

          flex
          items-center
          justify-between

          font-mono
          text-[8px]
          sm:text-[9px]

          tracking-[0.18em]

          text-gray-400
        "
            >
                <span>
                    RAI.DEV
                </span>

                <span>
                    PORTFOLIO / 2026
                </span>
            </div>

            {/* ==================================================
          CENTER
      =================================================== */}
            <main
                className="
          relative
          z-10

          w-full
          min-h-[100dvh]

          flex
          items-center
          justify-center

          px-5
          sm:px-8
        "
            >
                <div
                    className="
            w-full
            max-w-[620px]
          "
                >
                    {/* ==============================================
              SMALL STATUS
          =============================================== */}
                    <div
                        className="
              flex
              items-center
              gap-2

              mb-5
              sm:mb-6
            "
                    >
                        <span
                            className="
                relative
                flex

                w-1.5
                h-1.5
              "
                        >
                            <span
                                className="
                  absolute
                  inset-0

                  bg-blue-500/40

                  animate-ping
                "
                            />

                            <span
                                className="
                  relative

                  w-1.5
                  h-1.5

                  bg-blue-500
                "
                            />
                        </span>

                        <span
                            className="
                font-mono

                text-[8px]
                sm:text-[9px]

                tracking-[0.18em]

                text-gray-400
              "
                        >
                            SYSTEM BOOT
                        </span>
                    </div>

                    {/* ==============================================
              BRAND
          =============================================== */}
                    <h1
                        className="
              text-[clamp(4rem,13vw,7.5rem)]

              font-semibold

              tracking-[-0.075em]
              leading-[0.8]

              text-black
            "
                    >
                        rai<span className="text-blue-500">.</span>dev
                    </h1>

                    {/* ==============================================
              ROLE
          =============================================== */}
                    <p
                        className="
              mt-7
              sm:mt-8

              font-mono

              text-[8px]
              sm:text-[9px]

              tracking-[0.16em]

              text-gray-400
            "
                    >
                        CREATIVE FRONT-END DEVELOPER
                    </p>

                    {/* ==============================================
              LOADING INFORMATION
          =============================================== */}
                    <div
                        className="
              mt-10
              sm:mt-12
            "
                    >
                        <div
                            className="
                flex
                items-end
                justify-between

                gap-5

                mb-3
              "
                        >
                            {/* STATUS */}
                            <p
                                className="
                  min-w-0

                  font-mono

                  text-[9px]
                  sm:text-[10px]

                  tracking-[0.12em]

                  text-gray-500
                "
                            >
                                <span className="text-black">
                                    &gt;
                                </span>{' '}

                                {getStatus()}

                                <span
                                    className="
                    inline-block

                    ml-1

                    w-[5px]
                    h-[10px]

                    bg-blue-500

                    animate-pulse

                    align-middle
                  "
                                />
                            </p>

                            {/* PERCENTAGE */}
                            <div
                                className="
                  flex
                  items-start

                  shrink-0
                "
                            >
                                <span
                                    className="
                    text-2xl
                    sm:text-3xl

                    font-medium

                    tracking-[-0.05em]

                    tabular-nums
                  "
                                >
                                    {String(progress).padStart(3, '0')}
                                </span>

                                <span
                                    className="
                    mt-0.5
                    ml-1

                    font-mono

                    text-[8px]

                    text-gray-400
                  "
                                >
                                    %
                                </span>
                            </div>
                        </div>

                        {/* ============================================
                PROGRESS
            ============================================= */}
                        <div
                            className="
                relative

                w-full
                h-[2px]

                bg-gray-200

                overflow-hidden
              "
                        >
                            <div
                                className="
                  absolute
                  top-0
                  bottom-0
                  left-0

                  bg-blue-500

                  transition-[width]
                  duration-150
                  ease-out
                "
                                style={{
                                    width: `${progress}%`,
                                }}
                            />
                        </div>
                    </div>

                    {/* ==============================================
              BINARY DECORATION
          =============================================== */}
                    <div
                        className="
              mt-6

              overflow-hidden
            "
                    >
                        <p
                            className="
                whitespace-nowrap

                font-mono

                text-[7px]
                sm:text-[8px]

                tracking-[0.12em]

                text-gray-300
              "
                            style={{
                                transform: `translateX(-${progress * 0.35}px)`,
                            }}
                        >
                            01010010 01000001 01001001 00101110 01000100
                            01000101 01010110 00100000 01010000 01001111
                            01010010 01010100 01000110 01001111 01001100
                            01001001 01001111
                        </p>
                    </div>

                    {/* ==============================================
              SMALL BOTTOM LINE
          =============================================== */}
                    <div
                        className="
              mt-8
              sm:mt-10

              pt-4

              border-t
              border-gray-200

              flex
              items-center
              justify-between

              gap-4

              font-mono

              text-[7px]
              sm:text-[8px]

              tracking-[0.12em]

              text-gray-400
            "
                    >
                        <span>
                            JOHN RAILEY PAEL
                        </span>

                        <span>
                            {progress === 100
                                ? 'ENTERING'
                                : 'LOADING'}
                        </span>
                    </div>
                </div>
            </main>

            {/* ==================================================
          BOTTOM CORNER DECORATION
      =================================================== */}
            <div
                className="
          absolute

          bottom-5
          sm:bottom-7

          left-5
          sm:left-8
          lg:left-12

          flex
          items-center
          gap-2
        "
            >
                <span className="w-5 h-px bg-gray-300" />

                <span
                    className="
            font-mono

            text-[7px]
            sm:text-[8px]

            tracking-[0.14em]

            text-gray-300
          "
                >
                    00 / INIT
                </span>
            </div>
        </div>
    );
}