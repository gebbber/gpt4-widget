import useRequests from '../RequestsDataContext/useRequests';
import Widget from '../Widget/Widget';
import SubmitButton from './SubmitButton';

function TextInputForm() {
    const { makeNewRequest } = useRequests();

    return (
        <form className="m-2 md:m-4 lg:mx-auto lg:max-w-3xl" onSubmit={onSubmit}>
            <Widget />
            <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-[#40414f] rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                <textarea
                    tabIndex="0"
                    rows="1"
                    className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0 focus:outline-none"
                    style={{
                        maxHeight: '200px',
                        height: '24px',
                        overflowY: 'hidden',
                    }}
                />

                <SubmitButton />
            </div>
        </form>
    );

    function onSubmit(ev) {
        ev.preventDefault();
        makeNewRequest();
    }
}

export default TextInputForm;
