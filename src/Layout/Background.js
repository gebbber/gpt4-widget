import graphPaper from '../assets/graph-paper';

function Background({ pattern, gradient, children, className, style }) {
    const iClasses =
        'fixed inset-0' + (gradient ? ' bg-gradient-to-b from-white/0 to-white/100' : '');

    const styles = { ...(pattern ? graphPaper : {}), ...(style || {}) };
    const classes = ['fixed inset-0', className || ''].join(' ');

    return (
        <div className={classes} style={styles}>
            <div className={iClasses}>{children}</div>
        </div>
    );
}

export default Background;
