import { useEffect, useRef, useState } from 'react';
import {
    Terminal as TerminalIcon,
    X,
    Minus,
    ArrowUpRight,
} from 'lucide-react';

import {
    playTerminal,
    playOpen,
    playHover,
    playKeypress,
} from '../utils/sound';

const COMMANDS = {
    help: [
        { command: 'about', description: 'Who is John?' },
        { command: 'projects', description: 'View featured projects' },
        { command: 'skills', description: 'Show technology stack' },
        { command: 'contact', description: 'Contact information' },
        { command: 'github', description: 'Open GitHub profile' },
        { command: 'linkedin', description: 'Open LinkedIn profile' },
        { command: 'email', description: 'Show email address' },
        { command: 'whoami', description: 'Current developer identity' },
        { command: 'date', description: 'Show local date & time' },
        { command: 'clear', description: 'Clear terminal' },
        { command: 'exit', description: 'Close terminal' },
    ],
};

const INITIAL_LINES = [
    {
        type: 'system',
        content: 'rai.dev terminal v1.0',
    },
    {
        type: 'muted',
        content: 'Type "help" to see available commands.',
    },
];

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);

    const [input, setInput] = useState('');
    const [lines, setLines] = useState(INITIAL_LINES);

    const [history, setHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);

    /* =====================================================
       OPEN TERMINAL EVENT
       Allows other components to open terminal
    ====================================================== */
    useEffect(() => {
        const openTerminal = () => {
            playOpen();
            setIsOpen(true);
            setIsMinimized(false);
        };

        window.addEventListener('open-terminal', openTerminal);

        return () => {
            window.removeEventListener(
                'open-terminal',
                openTerminal
            );
        };
    }, []);

    /* =====================================================
       KEYBOARD SHORTCUT
       Ctrl + `
    ====================================================== */
    useEffect(() => {
        const handleShortcut = (event) => {
            if (
                event.ctrlKey &&
                event.key === '`'
            ) {
                event.preventDefault();

                setIsOpen((current) => !current);
                setIsMinimized(false);
            }

            if (
                event.key === 'Escape' &&
                isOpen
            ) {
                setIsOpen(false);
            }
        };

        window.addEventListener(
            'keydown',
            handleShortcut
        );

        return () => {
            window.removeEventListener(
                'keydown',
                handleShortcut
            );
        };
    }, [isOpen]);

    /* =====================================================
       AUTO FOCUS
    ====================================================== */
    useEffect(() => {
        if (!isOpen || isMinimized) return;

        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 150);

        return () => clearTimeout(timer);
    }, [isOpen, isMinimized]);

    /* =====================================================
       AUTO SCROLL
    ====================================================== */
    useEffect(() => {
        if (!terminalBodyRef.current) return;

        terminalBodyRef.current.scrollTop =
            terminalBodyRef.current.scrollHeight;
    }, [lines]);

    /* =====================================================
       NAVIGATION
    ====================================================== */
    const goToSection = (id) => {
        const section = document.getElementById(id);

        if (!section) {
            return false;
        }

        setIsOpen(false);

        setTimeout(() => {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }, 150);

        return true;
    };

    /* =====================================================
       ADD OUTPUT
    ====================================================== */
    const addLines = (newLines) => {
        setLines((current) => [
            ...current,
            ...newLines,
        ]);
    };

    /* =====================================================
       COMMAND EXECUTION
    ====================================================== */
    const executeCommand = (rawCommand) => {
        const command = rawCommand
            .trim()
            .toLowerCase();

        if (!command) return;

        playTerminal();

        setHistory((current) => [
            ...current,
            rawCommand,
        ]);

        setHistoryIndex(-1);

        const commandLine = {
            type: 'command',
            content: rawCommand,
        };

        /* CLEAR */
        if (command === 'clear') {
            setLines([]);
            return;
        }

        setLines((current) => [
            ...current,
            commandLine,
        ]);

        /* ===================================================
           HELP
        ==================================================== */
        if (command === 'help') {
            addLines([
                {
                    type: 'label',
                    content: 'AVAILABLE COMMANDS',
                },
                {
                    type: 'commands',
                    content: COMMANDS.help,
                },
            ]);

            return;
        }

        /* ===================================================
           ABOUT
        ==================================================== */
        if (command === 'about') {
            addLines([
                {
                    type: 'text',
                    content:
                        'John Railey Pael is an Information Technology student at Bulacan State University — Bustos Campus, focused on front-end development and building clean, responsive, interactive digital experiences.',
                },
            ]);

            return;
        }

        /* ===================================================
           PROJECTS
        ==================================================== */
        if (command === 'projects') {
            addLines([
                {
                    type: 'success',
                    content:
                        'Opening featured projects...',
                },
            ]);

            setTimeout(() => {
                goToSection('projects');
            }, 350);

            return;
        }

        /* ===================================================
           SKILLS
        ==================================================== */
        if (command === 'skills') {
            addLines([
                {
                    type: 'success',
                    content:
                        'Opening skills & technologies...',
                },
            ]);

            setTimeout(() => {
                goToSection('skills');
            }, 350);

            return;
        }

        /* ===================================================
           CONTACT
        ==================================================== */
        if (command === 'contact') {
            addLines([
                {
                    type: 'success',
                    content:
                        'Opening contact section...',
                },
            ]);

            setTimeout(() => {
                goToSection('contact');
            }, 350);

            return;
        }

        /* ===================================================
           GITHUB
        ==================================================== */
        if (command === 'github') {
            addLines([
                {
                    type: 'success',
                    content:
                        'Opening github.com/saintjohn31...',
                },
            ]);

            window.open(
                'https://github.com/saintjohn31',
                '_blank',
                'noopener,noreferrer'
            );

            return;
        }

        /* ===================================================
           LINKEDIN
        ==================================================== */
        if (command === 'linkedin') {
            addLines([
                {
                    type: 'success',
                    content:
                        'Opening LinkedIn profile...',
                },
            ]);

            window.open(
                'https://www.linkedin.com/in/john-railey-pael-865224437/',
                '_blank',
                'noopener,noreferrer'
            );

            return;
        }

        /* ===================================================
           EMAIL
        ==================================================== */
        if (command === 'email') {
            addLines([
                {
                    type: 'text',
                    content:
                        'johnrailey550@gmail.com',
                },
                {
                    type: 'muted',
                    content:
                        'Use the contact section to send an inquiry.',
                },
            ]);

            return;
        }

        /* ===================================================
           WHOAMI
        ==================================================== */
        if (command === 'whoami') {
            addLines([
                {
                    type: 'accent',
                    content:
                        'john@rai.dev',
                },
                {
                    type: 'text',
                    content:
                        'Creative Front-End Developer · AI-Assisted Vibe Coder',
                },
                {
                    type: 'muted',
                    content:
                        'BSIT · Bustos, Bulacan, Philippines',
                },
            ]);

            return;
        }

        /* ===================================================
           DATE
        ==================================================== */
        if (command === 'date') {
            addLines([
                {
                    type: 'text',
                    content:
                        new Date().toLocaleString(
                            'en-PH',
                            {
                                dateStyle: 'full',
                                timeStyle: 'medium',
                            }
                        ),
                },
            ]);

            return;
        }

        /* ===================================================
           EXIT
        ==================================================== */
        if (
            command === 'exit' ||
            command === 'quit'
        ) {
            addLines([
                {
                    type: 'muted',
                    content:
                        'Closing terminal...',
                },
            ]);

            setTimeout(() => {
                setIsOpen(false);
            }, 250);

            return;
        }

        /* ===================================================
           EASTER EGGS
        ==================================================== */
        if (
            command === 'sudo hire john' ||
            command === 'hire john'
        ) {
            addLines([
                {
                    type: 'accent',
                    content:
                        'ACCESS GRANTED.',
                },
                {
                    type: 'text',
                    content:
                        'Excellent choice.',
                },
                {
                    type: 'success',
                    content:
                        'Redirecting to contact...',
                },
            ]);

            setTimeout(() => {
                goToSection('contact');
            }, 800);

            return;
        }

        if (command === 'hello') {
            addLines([
                {
                    type: 'text',
                    content:
                        'Hello! Welcome to rai.dev 👋',
                },
            ]);

            return;
        }

        if (command === 'coffee') {
            addLines([
                {
                    type: 'text',
                    content:
                        'Compiling...',
                },
                {
                    type: 'muted',
                    content:
                        'Error: coffee not found. Developer productivity reduced by 87%.',
                },
            ]);

            return;
        }

        /* ===================================================
           UNKNOWN COMMAND
        ==================================================== */
        addLines([
            {
                type: 'error',
                content: `command not found: ${command}`,
            },
            {
                type: 'muted',
                content:
                    'Type "help" for available commands.',
            },
        ]);
    };

    /* =====================================================
       SUBMIT
    ====================================================== */
    const handleSubmit = (event) => {
        event.preventDefault();

        const command = input;

        setInput('');

        executeCommand(command);
    };

    /* =====================================================
       HISTORY
    ====================================================== */
    const handleKeyDown = (event) => {
        // Soft keyboard feedback only for keys that edit the command.
        // Enter keeps the existing command/terminal sound, while
        // modifiers and navigation keys stay silent.
        if (
            event.key.length === 1 ||
            event.key === 'Backspace' ||
            event.key === 'Delete'
        ) {
            playKeypress(event.key);
        }

        if (
            event.key === 'ArrowUp' &&
            history.length > 0
        ) {
            event.preventDefault();

            const nextIndex =
                historyIndex === -1
                    ? history.length - 1
                    : Math.max(0, historyIndex - 1);

            setHistoryIndex(nextIndex);
            setInput(history[nextIndex]);
        }

        if (
            event.key === 'ArrowDown' &&
            history.length > 0
        ) {
            event.preventDefault();

            if (
                historyIndex === -1 ||
                historyIndex >= history.length - 1
            ) {
                setHistoryIndex(-1);
                setInput('');
                return;
            }

            const nextIndex =
                historyIndex + 1;

            setHistoryIndex(nextIndex);
            setInput(history[nextIndex]);
        }
    };

    /* =====================================================
       LINE RENDERER
    ====================================================== */
    const renderLine = (line, index) => {
        if (line.type === 'command') {
            return (
                <div
                    key={index}
                    className="
            flex
            items-start
            gap-2
          "
                >
                    <span
                        className="
              text-blue-500
              shrink-0
            "
                    >
                        &gt;
                    </span>

                    <span className="text-white">
                        {line.content}
                    </span>
                </div>
            );
        }

        if (line.type === 'commands') {
            return (
                <div
                    key={index}
                    className="
            my-2
            border-y
            border-white/10
          "
                >
                    {line.content.map((item) => (
                        <button
                            onMouseEnter={playHover}
                            key={item.command}
                            type="button"
                            onClick={() =>
                                executeCommand(
                                    item.command
                                )
                            }
                            className="
                group

                w-full

                min-h-[38px]

                grid
                grid-cols-[90px_1fr]
                sm:grid-cols-[110px_1fr]

                gap-3

                items-center

                text-left

                border-b
                border-white/[0.06]

                last:border-b-0

                transition-colors

                hover:bg-white/[0.05]
              "
                        >
                            <span
                                className="
                  text-white

                  group-hover:text-blue-400

                  transition-colors
                "
                            >
                                {item.command}
                            </span>

                            <span
                                className="
                  text-gray-600
                  truncate
                "
                            >
                                {item.description}
                            </span>
                        </button>
                    ))}
                </div>
            );
        }

        const styles = {
            system:
                'text-white font-medium',

            muted:
                'text-gray-600',

            text:
                'text-gray-300',

            label:
                'text-gray-500 tracking-[0.15em] text-[9px]',

            success:
                'text-gray-300',

            accent:
                'text-blue-400',

            error:
                'text-red-400',
        };

        return (
            <p
                key={index}
                className={`
          leading-5
          sm:leading-6

          break-words

          ${styles[line.type] ||
                    'text-gray-300'
                    }
        `}
            >
                {line.type === 'success' && (
                    <span
                        className="
              text-blue-500
              mr-2
            "
                    >
                        ✓
                    </span>
                )}

                {line.content}
            </p>
        );
    };

    return (
        <>
            {/* =================================================
          FLOATING TERMINAL BUTTON
      ================================================== */}
            {!isOpen && (
                <button
                    onMouseEnter={playHover}
                    type="button"
                    onClick={() => {
                        setIsOpen(true);
                        setIsMinimized(false);
                    }}
                    className="
            group

            fixed

            right-4
            sm:right-6
            lg:right-8

            bottom-4
            sm:bottom-6
            lg:bottom-8

            z-[900]

            min-h-[44px]

            inline-flex
            items-center
            justify-center

            gap-2.5

            px-4
            sm:px-5

            bg-black
            text-white

            border
            border-black

            font-mono

            text-[9px]
            sm:text-[10px]

            tracking-[0.12em]

            shadow-[0_8px_30px_rgba(0,0,0,0.12)]

            transition-all
            duration-300

            hover:bg-blue-600
            hover:border-blue-600

            hover:-translate-y-1

            active:translate-y-0
          "
                    aria-label="Open developer terminal"
                >
                    <TerminalIcon
                        size={14}
                        strokeWidth={1.8}
                    />

                    <span>
                        TERMINAL
                    </span>

                    <span
                        className="
              hidden
              sm:inline

              text-white/40

              transition-colors

              group-hover:text-white/70
            "
                    >
                        CTRL+`
                    </span>
                </button>
            )}

            {/* =================================================
          BACKDROP
      ================================================== */}
            {isOpen && !isMinimized && (
                <button
                    onMouseEnter={playHover}
                    type="button"
                    aria-label="Close terminal"
                    onClick={() => setIsOpen(false)}
                    className="
            fixed
            inset-0

            z-[1198]

            bg-black/20

            backdrop-blur-[2px]

            cursor-default
          "
                />
            )}

            {/* =================================================
          TERMINAL WINDOW
      ================================================== */}
            {isOpen && (
                <section
                    className={`
            fixed

            z-[1200]

            overflow-hidden

            bg-[#090909]
            text-white

            border
            border-white/10

            shadow-[0_30px_100px_rgba(0,0,0,0.35)]

            font-mono

            transition-all
            duration-300

            ${isMinimized
                            ? `
                  right-4
                  sm:right-6

                  bottom-4
                  sm:bottom-6

                  w-[calc(100%-2rem)]
                  sm:w-[360px]
                `
                            : `
                  left-3
                  right-3

                  bottom-3

                  sm:left-auto
                  sm:right-6
                  sm:bottom-6

                  sm:w-[min(620px,calc(100vw-3rem))]
                `
                        }
          `}
                >
                    {/* =============================================
              WINDOW HEADER
          ============================================== */}
                    <div
                        className="
              h-11
              sm:h-12

              px-3
              sm:px-4

              border-b
              border-white/10

              flex
              items-center
              justify-between

              gap-3

              bg-[#0d0d0d]
            "
                    >
                        {/* LEFT */}
                        <div
                            className="
                flex
                items-center
                gap-3

                min-w-0
              "
                        >
                            <div
                                className="
                  flex
                  items-center
                  gap-1.5
                "
                            >
                                <span
                                    className="
                    w-2
                    h-2

                    bg-blue-500
                  "
                                />

                                <span
                                    className="
                    w-2
                    h-2

                    bg-white/15
                  "
                                />

                                <span
                                    className="
                    w-2
                    h-2

                    bg-white/15
                  "
                                />
                            </div>

                            <span
                                className="
                  text-[9px]

                  tracking-[0.12em]

                  text-gray-500

                  truncate
                "
                            >
                                JOHN@RAI.DEV:~
                            </span>
                        </div>

                        {/* WINDOW CONTROLS */}
                        <div
                            className="
                flex
                items-center
              "
                        >
                            <button
                                onMouseEnter={playHover}
                                type="button"
                                onClick={() =>
                                    setIsMinimized(
                                        (current) => !current
                                    )
                                }
                                className="
                  w-9
                  h-9

                  flex
                  items-center
                  justify-center

                  text-gray-600

                  transition-colors

                  hover:text-white
                  hover:bg-white/[0.05]
                "
                                aria-label={
                                    isMinimized
                                        ? 'Restore terminal'
                                        : 'Minimize terminal'
                                }
                            >
                                {isMinimized ? (
                                    <TerminalIcon
                                        size={13}
                                    />
                                ) : (
                                    <Minus size={14} />
                                )}
                            </button>

                            <button
                                onMouseEnter={playHover}
                                type="button"
                                onClick={() =>
                                    setIsOpen(false)
                                }
                                className="
                  w-9
                  h-9

                  flex
                  items-center
                  justify-center

                  text-gray-600

                  transition-colors

                  hover:text-white
                  hover:bg-white/[0.05]
                "
                                aria-label="Close terminal"
                            >
                                <X size={14} />
                            </button>
                        </div>
                    </div>

                    {/* =============================================
              TERMINAL CONTENT
          ============================================== */}
                    {!isMinimized && (
                        <>
                            <div
                                ref={terminalBodyRef}
                                onClick={() =>
                                    inputRef.current?.focus()
                                }
                                className="
                  h-[min(430px,60dvh)]

                  overflow-y-auto

                  overscroll-contain

                  p-4
                  sm:p-5

                  text-[10px]
                  sm:text-[11px]

                  leading-5

                  scrollbar-thin
                "
                            >
                                {/* TOP INFO */}
                                <div
                                    className="
                    flex
                    items-start
                    justify-between

                    gap-4

                    pb-4
                    mb-4

                    border-b
                    border-white/10
                  "
                                >
                                    <div>
                                        <p
                                            className="
                        text-white
                        font-medium

                        mb-1
                      "
                                        >
                                            rai.dev terminal
                                        </p>

                                        <p className="text-gray-600">
                                            Interactive developer
                                            interface v1.0
                                        </p>
                                    </div>

                                    <div
                                        className="
                      flex
                      items-center
                      gap-2

                      shrink-0
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

                          bg-blue-500/50

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
                        text-[8px]

                        tracking-[0.12em]

                        text-gray-600
                      "
                                        >
                                            ONLINE
                                        </span>
                                    </div>
                                </div>

                                {/* OUTPUT */}
                                <div className="space-y-2">
                                    {lines.map(
                                        (line, index) =>
                                            renderLine(
                                                line,
                                                index
                                            )
                                    )}
                                </div>

                                {/* =========================================
                    INPUT
                ========================================== */}
                                <form
                                    onSubmit={handleSubmit}
                                    className="
                    mt-3

                    flex
                    items-center
                    gap-2
                  "
                                >
                                    <span
                                        className="
                      text-blue-500

                      shrink-0
                    "
                                    >
                                        &gt;
                                    </span>

                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(event) =>
                                            setInput(
                                                event.target.value
                                            )
                                        }
                                        onKeyDown={
                                            handleKeyDown
                                        }
                                        spellCheck="false"
                                        autoComplete="off"
                                        autoCapitalize="off"
                                        aria-label="Terminal command"
                                        className="
                      flex-1
                      min-w-0

                      bg-transparent

                      text-white

                      outline-none

                      border-none

                      p-0

                      text-[10px]
                      sm:text-[11px]

                      font-mono

                      caret-blue-500

                      placeholder:text-gray-800
                    "
                                        placeholder="type a command..."
                                    />

                                    <span
                                        className="
                      hidden
                      sm:block

                      text-[8px]

                      text-gray-700

                      shrink-0
                    "
                                    >
                                        ENTER ↵
                                    </span>
                                </form>
                            </div>

                            {/* =========================================
                  TERMINAL FOOTER
              ========================================== */}
                            <div
                                className="
                  min-h-9

                  px-3
                  sm:px-4

                  border-t
                  border-white/10

                  flex
                  items-center
                  justify-between

                  gap-3

                  text-[7px]
                  sm:text-[8px]

                  tracking-[0.1em]

                  text-gray-700
                "
                            >
                                <span>
                                    ↑↓ HISTORY
                                </span>

                                <button
                                    onMouseEnter={playHover}
                                    type="button"
                                    onClick={() =>
                                        executeCommand(
                                            'help'
                                        )
                                    }
                                    className="
                    inline-flex
                    items-center
                    gap-1.5

                    min-h-[32px]

                    transition-colors

                    hover:text-white
                  "
                                >
                                    HELP

                                    <ArrowUpRight
                                        size={9}
                                    />
                                </button>
                            </div>
                        </>
                    )}
                </section>
            )}
        </>
    );
}