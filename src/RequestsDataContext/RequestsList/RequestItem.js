import { TrashIcon } from '../../assets/icons';
import useRequests from '../useRequests';

function RequestItem({ time }) {
    const { clearRequest } = useRequests();
    return (
        <li className="px-2 py-0.5 border border-neutral-500/30 rounded-md flex flex-row justify-between items-center shadow-sm">
            <div>{time.toLocaleString()}</div>
            <button
                className="p-0.5 rounded border bg-red-500/20 text-red-500/60 border-red-500/40"
                onClick={() => clearRequest(time)}>
                <TrashIcon />
            </button>
        </li>
    );
}

export default RequestItem;
