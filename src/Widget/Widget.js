import { useEffect, useMemo, useRef, useState } from 'react';
import useWidgetData from './useWidgetData';

function Widget() {
    const { requests, timeLimit } = useWidgetData();
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
        <TimeLine tlRef={timelineRef}>
            <RequestMarkers requests={inScopeRequests} color={markerColor} />
        </TimeLine>
    );
}

export default Widget;

function useMarkerColor(numRequests) {
    const { positiveColor, negativeColor, requestLimit } = useWidgetData();

    const markerColor = useMemo(() => {
        const fraction = Math.min(1, Math.max(0, numRequests / requestLimit));

        const dR = negativeColor.r - positiveColor.r;
        const dG = negativeColor.g - positiveColor.g;
        const dB = negativeColor.b - positiveColor.b;
        const dA = negativeColor.a - positiveColor.a;

        const r = Math.round(positiveColor.r + fraction * dR);
        const g = Math.round(positiveColor.g + fraction * dG);
        const b = Math.round(positiveColor.b + fraction * dB);
        const a = positiveColor.a + fraction * dA;

        return { r, g, b, a };
    }, [positiveColor, negativeColor, numRequests]);

    return markerColor;
}

function TimeLine({ tlRef, children }) {
    return (
        <div
            className="group absolute -top-2 translate-y-1/2 inset-x-0 border-l border-r dark:border-white/20 h-2"
            ref={tlRef}>
            <div className="absolute top-1/2 border-t inset-x-0"></div>
            <div>{children}</div>
        </div>
    );
}

function RequestMarkers({ requests, color }) {
    return requests.map(({ time, xLocation }, i) => (
        <RequestMarker
            key={time.valueOf()}
            i={i === 0 ? requests.length : null}
            time={time}
            xLocation={xLocation}
            color={color}
        />
    ));
}

function RequestMarker({ xLocation, i, color }) {
    const classes = [
        'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
        'w-3 h-3 rounded-full',
    ].join(' ');
    const labelStyle = { left: xLocation };
    const dotStyle = { left: xLocation, backgroundColor: rgba(color) };

    return (
        <div className="text-xs">
            <div className={classes} style={dotStyle}>
                {i ? (
                    <div
                        className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-[-110%] opacity-50"
                        style={labelStyle}>
                        {i}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

function rgba({ r, g, b, a }) {
    return `rgba(${r},${g},${b},${a})`;
}
