import TextInputForm from './Input';

function Footer() {
    const classes = [
        'bg-white',
        'md:absolute md:bottom-0 md:inset-x-0',
        'w-full',
        'border-t md:border-t-0 dark:border-white/20',
        'md:border-transparent',
        'bg-white dark:bg-[#40414f] md:!bg-transparent pt-2',
    ].join(' ');

    return (
        <footer>
            <div className="hidden md:block h-24 bg-white dark:bg-[#40414f]" />
            <div className={classes}>
                <TextInputForm />
            </div>
        </footer>
    );
}

export default Footer;
