import { useEffect, useState } from 'react';
import { XIcon } from '../assets/icons';

function Section({ title, children, className, dismissable }) {
    const [dismissed, setDismissed] = useState(false);

    // allow changes to dismissable to make it reappear and need dismissing again:
    useEffect(() => {
        if (!dismissable) setDismissed(false);
    }, [dismissable]);

    if (dismissable && dismissed) return null;

    return (
        <section className="shadow rounded-lg p-4 py-3 bg-white dark:bg-[#40414f]">
            <div className={className || ''}>
                <div className="flex justify-between">
                    <h2 className="stretch text-xl mb-2 font-medium">{title}</h2>
                    {dismissable && <DismissButton onClick={() => setDismissed(true)} />}
                </div>
                <article className="flex flex-col gap-4">{children}</article>
            </div>
        </section>
    );
}

export default Section;

function DismissButton({ onClick }) {
    const classes = [
        'place-self-start',
        'scale-100 hover:scale-110',
        'opacity-30 hover:opacity-100',
        'transition-[transform,opacity]',
    ].join(' ');
    return (
        <button className={classes} onClick={onClick}>
            <XIcon />
        </button>
    );
}
