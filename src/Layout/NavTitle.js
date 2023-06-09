import useTypingAnimation from '../hooks/useTypingAnimation';

function NavTitle({ children }) {
    const contents = useTypingAnimation(children);

    const classes = ['px-1 font-medium'].join(' ');
    return <div className={classes}>{contents}</div>;
}

export default NavTitle;
