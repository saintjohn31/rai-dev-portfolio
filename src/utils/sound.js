const STORAGE_KEY = 'rai-dev-sound';

let audioContext = null;
let lastHoverTime = 0;
let lastKeypressTime = 0;

/* =========================================
   SOUND SETTINGS
========================================= */

const MASTER_VOLUME = 4.0;

export function isSoundEnabled() {
    return localStorage.getItem(STORAGE_KEY) === 'on';
}

export function setSoundEnabled(enabled) {
    localStorage.setItem(
        STORAGE_KEY,
        enabled ? 'on' : 'off'
    );
}

/* =========================================
   AUDIO CONTEXT
========================================= */

function getAudioContext() {
    if (typeof window === 'undefined') {
        return null;
    }

    const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

    if (!AudioContext) {
        return null;
    }

    if (!audioContext) {
        audioContext = new AudioContext();
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    return audioContext;
}

/* =========================================
   SMOOTH TONE
   Pure sine wave only.
========================================= */

function smoothTone({
    frequency = 300,
    endFrequency = null,
    duration = 0.06,
    volume = 0.025,
    delay = 0,
}) {
    if (!isSoundEnabled()) {
        return;
    }

    const ctx = getAudioContext();

    if (!ctx) {
        return;
    }

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    const start = ctx.currentTime + delay;
    const end = start + duration;

    oscillator.type = 'sine';

    oscillator.frequency.setValueAtTime(
        frequency,
        start
    );

    if (endFrequency) {
        oscillator.frequency.exponentialRampToValueAtTime(
            Math.max(1, endFrequency),
            end
        );
    }

    gain.gain.setValueAtTime(
        0.0001,
        start
    );

    gain.gain.exponentialRampToValueAtTime(
        volume * MASTER_VOLUME,
        start + Math.min(0.01, duration * 0.3)
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        end
    );

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(start);
    oscillator.stop(end + 0.02);
}

/* =========================================
   CLICK
========================================= */

export function playClick() {
    smoothTone({
        frequency: 240,
        endFrequency: 190,
        duration: 0.055,
        volume: 0.028,
    });
}

/* =========================================
   HOVER
========================================= */

export function playHover() {
    const now = Date.now();

    if (now - lastHoverTime < 150) {
        return;
    }

    lastHoverTime = now;

    smoothTone({
        frequency: 330,
        endFrequency: 300,
        duration: 0.035,
        volume: 0.009,
    });
}

/* =========================================
   KEYPRESS
   Soft keyboard-style feedback for Terminal.
   No noise, square wave, or retro beep.
========================================= */

export function playKeypress(key = '') {
    const now = performance.now();

    // Prevent an accidental audio pile-up when a key repeats very fast.
    if (now - lastKeypressTime < 18) {
        return;
    }

    lastKeypressTime = now;

    if (key === ' ') {
        smoothTone({
            frequency: 165,
            endFrequency: 145,
            duration: 0.028,
            volume: 0.015,
        });
        return;
    }

    if (key === 'Backspace' || key === 'Delete') {
        smoothTone({
            frequency: 185,
            endFrequency: 155,
            duration: 0.032,
            volume: 0.017,
        });
        return;
    }

    // Tiny pitch variation makes repeated typing feel less synthetic.
    const variation = Math.random() * 18 - 9;

    smoothTone({
        frequency: 225 + variation,
        endFrequency: 205 + variation,
        duration: 0.026,
        volume: 0.014,
    });
}

/* =========================================
   TOGGLE
========================================= */

export function playToggle() {
    smoothTone({
        frequency: 220,
        endFrequency: 280,
        duration: 0.07,
        volume: 0.026,
    });

    smoothTone({
        frequency: 310,
        endFrequency: 350,
        duration: 0.065,
        volume: 0.015,
        delay: 0.035,
    });
}

/* =========================================
   OPEN
========================================= */

export function playOpen() {
    smoothTone({
        frequency: 180,
        endFrequency: 250,
        duration: 0.11,
        volume: 0.028,
    });

    smoothTone({
        frequency: 280,
        endFrequency: 330,
        duration: 0.09,
        volume: 0.014,
        delay: 0.045,
    });
}

/* =========================================
   CLOSE
========================================= */

export function playClose() {
    smoothTone({
        frequency: 280,
        endFrequency: 190,
        duration: 0.1,
        volume: 0.026,
    });

    smoothTone({
        frequency: 210,
        endFrequency: 170,
        duration: 0.07,
        volume: 0.012,
        delay: 0.035,
    });
}

/* =========================================
   TERMINAL COMMAND / ENTER
========================================= */

export function playTerminal() {
    smoothTone({
        frequency: 260,
        endFrequency: 220,
        duration: 0.045,
        volume: 0.022,
    });
}

/* =========================================
   READY
========================================= */

export function playReady() {
    smoothTone({
        frequency: 260,
        endFrequency: 300,
        duration: 0.09,
        volume: 0.022,
    });

    smoothTone({
        frequency: 390,
        endFrequency: 430,
        duration: 0.12,
        volume: 0.02,
        delay: 0.065,
    });
}
