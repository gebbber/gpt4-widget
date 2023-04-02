import { useEffect, useState } from 'react';

const START_DELAY = 1000;
const INTER_CHAR = 100;
const CHOPPINESS = 0.25; // 0 to 1+
const END_DELAY = 1000;

function useTypingAnimation(children) {
    const title = (children || '').toString();
    const [typing, setTyping] = useState(false);
    const [contents, setContents] = useState(''); // start with useState(title) to only re-type when updated after mounting

    useEffect(() => {
        setContents('');
        if (!title) return;
        setTyping(true);
        setTimeout(() => {
            const p = setInterval(() => {
                const keystrokeDelay = Math.random() * CHOPPINESS * INTER_CHAR;
                setTimeout(() => {
                    setContents(contents => {
                        if (contents === title) {
                            clearInterval(p);
                            endTyping();
                            return title;
                        }
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
    }, [title]);

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
