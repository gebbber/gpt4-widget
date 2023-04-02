import { createContext, useContext, useState } from 'react';
import { MoonIcon, SunIcon } from '../assets/icons';

const DarkModeContext = createContext();

function AddDarkModeContext({ children }) {
    const [dark, setDark] = useState(false);

    const classes = ['text-black dark:text-white', dark ? 'dark' : ''].join(' ');

    return (
        <DarkModeContext.Provider value={[dark, setDark]}>
            <div className={classes}>{children}</div>
        </DarkModeContext.Provider>
    );
}

export default function useDarkMode() {
    return useContext(DarkModeContext);
}

function DarkToggle() {
    const [dark, setDark] = useDarkMode();

    const classes = [].join(' ');

    return (
        <button className={classes} onClick={onClick}>
            <LightDarkIcon dark={dark} />
        </button>
    );

    function onClick() {
        setDark(dark => !dark);
    }
}

export { AddDarkModeContext, DarkToggle };

function LightDarkIcon({ dark }) {
    if (dark) return <SunIcon />;
    return <MoonIcon />;
}
