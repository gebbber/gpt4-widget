import useWidgetData from '../Widget/useWidgetData';

function SubmitButton({}) {
    const { makeNewRequest } = useWidgetData();

    const classes = [
        'absolute',
        'bottom-1.5 md:bottom-2.5',
        'right-1 md:right-2',
        'p-1 rounded-md',
        'text-gray-500',
        'hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900',
        'disabled:hover:bg-transparent dark:disabled:hover:bg-transparent',
    ].join(' ');
    return (
        <button className={classes} onClick={onClick}>
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        </button>
    );
    function onClick(ev) {
        ev.preventDefault();

        makeNewRequest();
    }
}

export default SubmitButton;
