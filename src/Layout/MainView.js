import InputArea from './InputArea';

function MainView({ children }) {
    const classes = [
        'z-0 fixed',
        'top-12 md:top-0 bottom-16 right-0 md:bottom-0 md:left-[260px]',
        'flex flex-col justify-between',
        'overflow-y-auto',
    ].join(' ');

    return (
        <div className={classes}>
            <main className="grow flex flex-col justify-start px-2 py-4">
                <div className="md:max-w-2xl mx-auto flex flex-col gap-2">{children}</div>
            </main>
            <InputArea />
        </div>
    );
}

export default MainView;
