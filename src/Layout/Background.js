import graphPaper from '../assets/graph-paper';
import useDarkMode from '../hooks/useDarkMode';

function Background({ pattern, gradient, children, className, style }) {
    const [dark] = useDarkMode();

    const iClasses = [
        'fixed inset-0',
        gradient
            ? ' bg-gradient-to-b from-white/0 to-white/100 dark:from-[#35354100] dark:to-[#353541ff]'
            : '',
    ].join(' ');

    const styles = { ...(pattern ? graphPaper(dark) : {}), ...(style || {}) };
    const classes = ['fixed inset-0', className || ''].join(' ');

    return (
        <div className="fixed inset-0 bg-white dark:bg-[#353541]">
            <div className={classes} style={styles}>
                <div className={iClasses}>{children}</div>
            </div>
        </div>
    );
}

export default Background;
