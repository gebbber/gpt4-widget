import { useEffect, useState } from 'react';
import { TrashIcon } from '../../assets/icons';
import { MILLISECONDS_PER_HOUR, TIME_LIMIT } from '../../Widget/widget-settings';
import useRequests from '../useRequests';

function RequestItem({ time, showCount }) {
    const { clearRequest } = useRequests();
    return (
        <li className="px-2 py-0.5 border border-neutral-500/30 rounded-md flex flex-row justify-between items-center shadow-sm">
            <div className="flex flex-col sm:flex-row">
                <span>{time.toLocaleString()}</span>
                {showCount && <Count time={time} />}
            </div>
            <button
                className="p-0.5 rounded border bg-red-500/20 text-red-500/60 border-red-500/40"
                onClick={() => clearRequest(time)}>
                <TrashIcon />
            </button>
        </li>
    );
}

export default RequestItem;

function calculateTime(time) {
    const purgeTime = Date.now() - TIME_LIMIT * MILLISECONDS_PER_HOUR;
    return Math.ceil((time - purgeTime) / 1000);
}

function Count({ time }) {
    const [seconds, setSeconds] = useState(calculateTime(time));

    useEffect(() => {
        const p = setInterval(() => setSeconds(calculateTime(time)), 1000);
        return () => clearInterval(p);
    }, [time]);

    return <span className="opacity-50 text-sm italic"> (to be removed in {seconds} seconds)</span>;
}
