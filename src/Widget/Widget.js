import { useEffect, useMemo, useRef, useState } from 'react';
import RequestMarkers from './RequestMarkers';
import TimeLine from './TimeLine';
import useMarkerColor from './useMarkerColor';
import useWidgetData from './useWidgetData';

function Widget() {
    const { requests, timeLimit, requestLimit } = useWidgetData();
    const [inScopeRequests, setISR] = useState([]);
    const timelineRef = useRef(null);

    useEffect(() => {
        if (!timelineRef) return;
        const width = timelineRef.current.clientWidth;

        filterRequests();

        const p = setInterval(filterRequests, (timeLimit * 3600000) / width);
        return () => clearInterval(p);

        function filterRequests() {
            const minTime = new Date().valueOf() - timeLimit * 3600000;
            setISR(() => {
                return requests
                    .filter(request => request.time.valueOf() > minTime)
                    .sort((a, b) => a.time.valueOf() - b.time.valueOf())
                    .map((request, n) => {
                        return {
                            time: request.time,
                            n,
                            xLocation:
                                (100 * (request.time.valueOf() - minTime)) / (timeLimit * 3600000) +
                                '%',
                        };
                    });
            });
        }
    }, [requests, timeLimit, timelineRef]);

    const markerColor = useMarkerColor(inScopeRequests.length);

    return (
        <div className="flex flex-row gap-1 w-full justify-between items-center">
            <div className="grow-0 text-xs opacity-30">{timeLimit}h</div>
            <TimeLine tlRef={timelineRef}>
                <RequestMarkers requests={inScopeRequests} color={markerColor} />
            </TimeLine>
            <div className="grow-0 text-xs opacity-30">
                {inScopeRequests.length}/{requestLimit}
            </div>
        </div>
    );
}

export default Widget;
