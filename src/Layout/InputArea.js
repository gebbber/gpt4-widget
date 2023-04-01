import TextInputForm from '../Components/Input';

function InputArea() {
    const classes = [
        'fixed',
        'left-0 md:left-[260px] bottom-0 right-0',
        // 'h-16',

        'shadow',
    ].join(' ');
    return (
        <>
            <div className="min-h-[6rem] bg-white" />
            <div className={classes}>
                <TextInputForm />
            </div>
        </>
    );
}

export default InputArea;
