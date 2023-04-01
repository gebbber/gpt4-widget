import Widget from '../Widget/Widget';
import SubmitButton from './SubmitButton';

function TextInputForm() {
    return (
        <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-3xl ">
            <div className="relative flex h-full flex-1 flex-col ">
                <div className="flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
                <Widget />
                <div className="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
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
            </div>
        </form>
    );
}

export default TextInputForm;
