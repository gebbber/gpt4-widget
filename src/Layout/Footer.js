import TextInputForm from './Input';

function Footer() {
    const classes = [
        'bg-white',
        'md:absolute md:bottom-0 md:inset-x-0',
        'w-full',
        'border-t md:border-t-0 dark:border-white/20',
        'md:border-transparent',
        'bg-white md:!bg-transparent pt-2',
    ].join(' ');

    return (
        <footer>
            <div className="hidden md:block h-24 border-t" />
            <div className={classes}>
                <TextInputForm />
            </div>
        </footer>
    );
}

export default Footer;
