import {
    Moon,
    Sun,
} from 'lucide-react';

export default function ThemeToggle({
    theme,
    toggleTheme,
    mobile = false,
}) {
    const isDark = theme === 'dark';

    if (mobile) {
        return (
            <button
                type="button"
                onClick={toggleTheme}
                className="
          group
          w-full

          flex
          items-center
          justify-between

          border
          border-gray-200

          bg-white

          px-4
          py-4

          transition-all
          duration-300

          hover:border-gray-400
        "
                aria-label={
                    isDark
                        ? 'Switch to light mode'
                        : 'Switch to dark mode'
                }
            >
                <div className="flex items-center gap-3">
                    <div
                        className="
              w-9
              h-9

              flex
              items-center
              justify-center

              border
              border-gray-200

              transition-colors
              duration-300
            "
                    >
                        {isDark ? (
                            <Moon
                                key="moon"
                                size={15}
                                className="
                  theme-icon-enter
                  text-blue-500
                "
                            />
                        ) : (
                            <Sun
                                key="sun"
                                size={15}
                                className="
                  theme-icon-enter
                  text-black
                "
                            />
                        )}
                    </div>

                    <div className="text-left">
                        <p
                            className="
                text-[8px]
                font-mono
                tracking-[0.16em]
                text-gray-400
                mb-1
              "
                        >
                            APPEARANCE
                        </p>

                        <p
                            className="
                text-[11px]
                font-mono
                tracking-[0.1em]
                text-black
              "
                        >
                            {isDark
                                ? 'DARK MODE'
                                : 'LIGHT MODE'}
                        </p>
                    </div>
                </div>

                <span
                    className="
            text-[9px]
            font-mono
            tracking-[0.12em]
            text-gray-400
          "
                >
                    SWITCH
                </span>
            </button>
        );
    }

    return (
        <div className="relative group/theme">
            <button
                type="button"
                onClick={toggleTheme}
                className="
          relative

          w-9
          h-9

          flex
          items-center
          justify-center

          border
          border-gray-200

          bg-white
          text-black

          overflow-hidden

          transition-all
          duration-300

          hover:border-gray-400
          hover:bg-gray-50

          active:scale-95
        "
                aria-label={
                    isDark
                        ? 'Switch to light mode'
                        : 'Switch to dark mode'
                }
            >
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
            duration-300

            group-hover/theme:scale-x-100
          "
                />

                {isDark ? (
                    <Moon
                        key="moon"
                        size={14}
                        strokeWidth={1.7}
                        className="
              theme-icon-enter
              text-blue-500
            "
                    />
                ) : (
                    <Sun
                        key="sun"
                        size={14}
                        strokeWidth={1.7}
                        className="
              theme-icon-enter
            "
                    />
                )}
            </button>

            {/* TOOLTIP */}
            <div
                className="
          pointer-events-none

          absolute
          top-[calc(100%+10px)]
          left-1/2
          -translate-x-1/2

          opacity-0
          translate-y-1

          group-hover/theme:opacity-100
          group-hover/theme:translate-y-0

          transition-all
          duration-200

          whitespace-nowrap

          bg-black
          text-white

          px-2.5
          py-1.5

          text-[8px]
          font-mono
          tracking-[0.12em]

          z-[1100]
        "
            >
                THEME / {isDark ? 'LIGHT' : 'DARK'}

                <span
                    className="
            absolute
            -top-1
            left-1/2
            -translate-x-1/2

            w-2
            h-2

            bg-black
            rotate-45
          "
                />
            </div>
        </div>
    );
}