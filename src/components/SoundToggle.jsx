import { useEffect, useState } from 'react';

import {
    Volume2,
    VolumeX,
} from 'lucide-react';

import {
    isSoundEnabled,
    setSoundEnabled,
    playToggle,
    playHover,
} from '../utils/sound';

export default function SoundToggle({
    mobile = false,
}) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(isSoundEnabled());

        const handleSoundChange = () => {
            setEnabled(isSoundEnabled());
        };

        window.addEventListener(
            'rai-sound-change',
            handleSoundChange
        );

        window.addEventListener(
            'storage',
            handleSoundChange
        );

        return () => {
            window.removeEventListener(
                'rai-sound-change',
                handleSoundChange
            );

            window.removeEventListener(
                'storage',
                handleSoundChange
            );
        };
    }, []);

    const toggleSound = () => {
        const next = !enabled;

        setEnabled(next);
        setSoundEnabled(next);

        window.dispatchEvent(
            new CustomEvent('rai-sound-change')
        );

        if (next) {
            setTimeout(() => {
                playToggle();
            }, 0);
        }
    };

    /*
      MOBILE VERSION
      Designed for the full-width Appearance panel.
    */
    if (mobile) {
        return (
            <button
                onMouseEnter={playHover}
                type="button"
                onClick={toggleSound}
                className="
                    group/sound-mobile
                    relative
                    w-full
                    min-h-[54px]
                    flex
                    items-center
                    justify-between
                    gap-4
                    border
                    border-gray-200
                    bg-white
                    px-3
                    text-black
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:border-gray-400
                    hover:bg-gray-50
                    active:scale-[0.99]
                "
                aria-label={
                    enabled
                        ? 'Turn sound off'
                        : 'Turn sound on'
                }
            >
                <span
                    className={`
                        absolute
                        top-0
                        left-0
                        h-[2px]
                        bg-blue-500
                        origin-left
                        transition-all
                        duration-300
                        ${enabled
                            ? 'w-full opacity-100'
                            : 'w-0 opacity-0 group-hover/sound-mobile:w-full group-hover/sound-mobile:opacity-100'
                        }
                    `}
                />

                <span
                    className="
                        flex
                        items-center
                        gap-3
                        min-w-0
                    "
                >
                    <span
                        className="
                            w-7
                            h-7
                            shrink-0
                            flex
                            items-center
                            justify-center
                            border
                            border-gray-200
                            bg-white
                        "
                    >
                        {enabled ? (
                            <Volume2
                                size={13}
                                strokeWidth={1.7}
                                className="text-blue-500"
                            />
                        ) : (
                            <VolumeX
                                size={13}
                                strokeWidth={1.7}
                                className="text-black"
                            />
                        )}
                    </span>

                    <span className="text-left min-w-0">
                        <span
                            className="
                                block
                                text-[7px]
                                font-mono
                                tracking-[0.14em]
                                text-gray-400
                                mb-1
                            "
                        >
                            SOUND
                        </span>

                        <span
                            className="
                                block
                                text-[9px]
                                font-mono
                                tracking-[0.12em]
                                text-black
                                whitespace-nowrap
                            "
                        >
                            {enabled
                                ? 'SOUND ON'
                                : 'SOUND OFF'}
                        </span>
                    </span>
                </span>

                <span
                    className="
                        shrink-0
                        text-[7px]
                        font-mono
                        tracking-[0.12em]
                        text-gray-400
                        transition-colors
                        duration-300
                        group-hover/sound-mobile:text-black
                    "
                >
                    SWITCH
                </span>
            </button>
        );
    }

    /*
      DESKTOP VERSION
    */
    return (
        <div className="relative group/sound">
            <button
                onMouseEnter={playHover}
                type="button"
                onClick={toggleSound}
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
                    enabled
                        ? 'Turn sound off'
                        : 'Turn sound on'
                }
            >
                <span
                    className={`
                        absolute
                        top-0
                        left-0
                        w-full
                        h-[2px]
                        bg-blue-500
                        origin-left
                        transition-transform
                        duration-300
                        ${enabled
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover/sound:scale-x-100'
                        }
                    `}
                />

                {enabled ? (
                    <Volume2
                        size={14}
                        strokeWidth={1.7}
                        className="
                            text-blue-500
                            transition-all
                            duration-300
                        "
                    />
                ) : (
                    <VolumeX
                        size={14}
                        strokeWidth={1.7}
                        className="
                            text-black
                            transition-all
                            duration-300
                        "
                    />
                )}
            </button>

            <div
                className="
                    pointer-events-none
                    absolute
                    top-[calc(100%+10px)]
                    left-1/2
                    -translate-x-1/2
                    opacity-0
                    translate-y-1
                    group-hover/sound:opacity-100
                    group-hover/sound:translate-y-0
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
                SOUND / {enabled ? 'OFF' : 'ON'}

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
