import useTypingAnimation from '../hooks/useTypingAnimation';

function NavTitle({ children, animated }) {
    const contents = useTypingAnimation(children, !animated);

    const classes = ['px-1 font-medium'].join(' ');
    return <div className={classes}>{contents}</div>;
}

export default NavTitle;
