import TextInputForm from './TextInputForm';

function InputArea() {
    const classes = ['fixed', 'left-0 md:left-[260px] bottom-0 right-0', 'shadow'].join(' ');
    return (
        <>
            <div className="min-h-[6rem] bg-white dark:bg-[#353541]" />
            <div className={classes}>
                <TextInputForm />
            </div>
        </>
    );
}

export default InputArea;
