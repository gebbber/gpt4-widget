import useMarkerColor from './useMarkerColor';

export default function RequestMarkers({ requests }) {
    const color = useMarkerColor(requests.length);

    return requests.map(({ time, ...rest }) => (
        <RequestMarker key={time.valueOf()} {...rest} color={color} />
    ));
}

function RequestMarker({ xLocation, color }) {
    const classes = [
        'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
        'w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full',
    ].join(' ');

    const dotStyle = { left: xLocation, backgroundColor: color };

    return <div className={classes} style={dotStyle} title={xLocation} />;
}
