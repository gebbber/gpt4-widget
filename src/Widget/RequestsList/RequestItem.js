import useWidgetData from '../useWidgetData';
import TrashIcon from '../../assets/TrashIcon';

function RequestItem({ time }) {
    const { clearRequest } = useWidgetData();
    return (
        <li className="px-2 py-0.5 border rounded-md flex flex-row justify-between shadow-sm">
            <div>{time.toLocaleString()}</div>
            <button
                className="p-0.5 rounded border bg-red-700/20 text-red-700/80 border-red-700/60"
                onClick={remove(time)}>
                <TrashIcon />
            </button>
        </li>
    );

    function remove(time) {
        return ev => {
            clearRequest(time);
        };
    }
}

export default RequestItem;
