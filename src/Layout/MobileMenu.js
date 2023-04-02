import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { BarsIcon, XIcon } from '../assets/icons';

import NavContents from '../content/NavContents';

function MobileMenuButton() {
    const [open, setOpen] = useState(false);

    const classes = [
        'md:hidden',
        'border border-neutral-500/50',
        'rounded p-0.5',
        'hover:bg-neutral-500/20',
    ].join(' ');

    return (
        <>
            <button onClick={onClick} className={classes}>
                <MenuIcon open={open} />
            </button>
            {open && (
                <PortalInject target="#mobile-portal-target">
                    <Panel />
                </PortalInject>
            )}
        </>
    );

    function onClick() {
        setOpen(open => !open);
    }
}

export default MobileMenuButton;

function MenuIcon({ open, ...props }) {
    if (open) return <XIcon {...props} />;
    return <BarsIcon {...props} />;
}

export function MobileMenuPanelTarget() {
    return <div id="mobile-portal-target" className="dark bg-neutral-800 text-white md:hidden" />;
}

function Panel() {
    const classes = [
        'md:hidden',
        'dark bg-neutral-900',
        'z-10 fixed',
        'inset-0 top-12',
        'p-2',
        'flex flex-col justify-between',
    ].join(' ');
    return (
        <div className={classes}>
            <NavContents />
        </div>
    );
}

function PortalInject({ target, children }) {
    const [found, setFound] = useState(null);

    useEffect(() => {
        setFound(document.querySelector(target));
    }, [target]);

    if (!found) return null;

    return createPortal(children, found);
}
