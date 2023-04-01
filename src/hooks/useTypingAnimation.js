import { useEffect, useState } from 'react';

const START_DELAY = 1000;
const INTER_CHAR = 100;
const CHOPPINESS = 0.25; // 0 (smooth) to 1 (choppy) typing; >1.0 seems to work too
const END_DELAY = 1000;

function useTypingAnimation(children, notAnimated) {
    const title = (children || '').toString();
    const [typing, setTyping] = useState(false);
    const [contents, setContents] = useState(''); // start with useState(title) to only re-type when updated after mounting

    useEffect(() => {
        if (!title) return;
        if (notAnimated) return setContents(title);
        setContents('');
        setTyping(true);
        setTimeout(() => {
            const p = setInterval(() => {
                const keystrokeDelay = Math.random() * CHOPPINESS * INTER_CHAR;
                setTimeout(() => {
                    setContents(contents => {
                        if (contents === title) return clearInterval(p), endTyping(), title;
                        if (contents.length >= title.length) return '';
                        if (contents !== title.slice(0, contents.length)) return '';
                        return title.slice(0, contents.length + 1);
                    });
                }, keystrokeDelay);
            }, INTER_CHAR);
        }, START_DELAY);

        function endTyping() {
            setTimeout(() => setTyping(false), END_DELAY);
        }
    }, [title, notAnimated]);

    return (
        <>
            {contents || <NBSP />}
            <Cursor typing={typing} />
        </>
    );
}

export default useTypingAnimation;

function Cursor({ typing }) {
    if (!typing) return null;

    return <span className="absolute animate-blink">&#x2588;</span>;

    // "absolute" just takes it out of the document flow so
    // centered title doesn't readjust when cursor is removed.
}

function NBSP() {
    return '\u00a0';
}
