import RequestMarker from './RequestMarker';

export default function RequestMarkers({ requests, color }) {
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
