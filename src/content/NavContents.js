import { DarkToggle } from '../hooks/useDarkMode';

function NavContents() {
    const classes = ['grow flex flex-col justify-between gap-2'].join(' ');
    return (
        <div className={classes}>
            <div />
            <DarkToggle />
        </div>
    );
}

export default NavContents;
