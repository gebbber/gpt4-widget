import { rgba } from './useMarkerColor';

export default function RequestMarker({ xLocation, i, color }) {
    const classes = [
        'absolute top-1/2 -translate-y-1/2 -translate-x-1/2',
        'w-1.5 h-1.5 md:w-3 md:h-3 rounded-full',
    ].join(' ');

    const dotStyle = { left: xLocation, backgroundColor: rgba(color) };

    return (
        <div className="text-xs">
            <div className={classes} style={dotStyle}></div>
        </div>
    );
}
