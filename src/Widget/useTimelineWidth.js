import { useEffect, useRef, useState } from 'react';

function useTimelineWidth() {
    const timelineRef = useRef(null);
    const [timelineWidth, setTimelineWidth] = useState(0);

    useEffect(() => {
        if (!timelineRef) return;
        setTimelineWidth(timelineRef.current.clientWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

        function handleResize() {
            setTimelineWidth(timelineRef.current.clientWidth);
        }
    }, [timelineRef]);

    return [timelineWidth, timelineRef];
}

export default useTimelineWidth;
