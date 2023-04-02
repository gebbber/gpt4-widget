import useDarkMode from '../hooks/useDarkMode';

export const TIME_LIMIT = 3; // hours
export const REQUEST_LIMIT = 25; // requests
export const MILLISECONDS_PER_HOUR = 3600000;

// These colors rely on transparency to adapt to light/dark background:
export const TRANSLUCENT_POSITIVE_COLOR = { r: 0, g: 255, b: 0, a: 0.3 };
export const TRANSLUCENT_NEGATIVE_COLOR = { r: 255, g: 0, b: 0, a: 0.5 };

// If some 'dark mode' value is available via context (as in this demo),
// they could be more carefully selected as separate solid colors:
export const LIGHT_NEGATIVE_COLOR = { r: 255, g: 127, b: 127 };
export const LIGHT_POSITIVE_COLOR = { r: 127, g: 255, b: 127 };
export const DARK_NEGATIVE_COLOR = { r: 127, g: 0, b: 0 };
export const DARK_POSITIVE_COLOR = { r: 0, g: 127, b: 0 };

const FORCE_TRANSPARENT = true;

// The following hook chooses color constants based on whether dark mode context is available:
export function useColors() {
    const darkContext = useDarkMode();

    if (!darkContext || FORCE_TRANSPARENT)
        return [TRANSLUCENT_POSITIVE_COLOR, TRANSLUCENT_NEGATIVE_COLOR];

    const [dark] = darkContext;

    return [
        dark ? DARK_POSITIVE_COLOR : LIGHT_POSITIVE_COLOR,
        dark ? DARK_NEGATIVE_COLOR : LIGHT_NEGATIVE_COLOR,
    ];
}
