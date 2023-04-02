import { useEffect, useState } from 'react';

import { MILLISECONDS_PER_HOUR, TIME_LIMIT } from './widget-settings';

function usePositionedMarkers(requests, timelineWidth) {
    const [markers, setMarkers] = useState(addPositions(requests));

    useEffect(() => {
        setMarkers(addPositions(requests));
        const refreshInterval = (TIME_LIMIT * MILLISECONDS_PER_HOUR) / timelineWidth;
        const p = setInterval(() => setMarkers(addPositions(requests)), refreshInterval);
        return () => clearInterval(p);
    }, [requests, timelineWidth]);

    function addPositions(requests) {
        const minTime = new Date().valueOf() - TIME_LIMIT * MILLISECONDS_PER_HOUR;
        return requests.map((request, i) => ({
            ...request,

            xLocation: `${
                (100 * (request.time.valueOf() - minTime)) / (TIME_LIMIT * MILLISECONDS_PER_HOUR)
            }%`,
        }));
    }

    return markers;
}

export default usePositionedMarkers;
