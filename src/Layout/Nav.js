import MobileMenu from './MobileMenu';
import NavTitle from '../Components/NavTitle';
import MenuContents from '../NavContents';

function Nav({ title }) {
    const classes = [
        'z-10 fixed',
        'left-0 top-0 right-0 h-12',
        'md:h-auto md:right-auto md:w-[260px] md:bottom-0',

        'md:shadow-[inset_-4rem_0_2rem_-4rem_black]',

        'p-2 sm:p-2',

        'flex flex-row justify-between items-center',
        'md:flex-col md:gap-2 md:justify-between md:items-stretch',

        'dark bg-neutral-800 text-white',
    ].join(' ');

    return (
        <div className={classes}>
            <div className="md:hidden" />

            <NavTitle animated>{title}</NavTitle>

            <nav className="grow hidden md:flex flex-col gap-1">
                <MenuContents />
            </nav>
            <MobileMenu />
        </div>
    );
}

export default Nav;
