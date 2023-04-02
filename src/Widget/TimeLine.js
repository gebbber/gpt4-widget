export default function TimeLine({ tlRef, children }) {
    const timelineColors = 'border-black/30 dark:border-white/20';

    return (
        <div
            className={`flex-1 min-h-full relative border-l border-r ${timelineColors}`}
            ref={tlRef}>
            <div className={`absolute top-1/2 border-t inset-x-0 ${timelineColors}`}></div>
            <div>{children}</div>
        </div>
    );
}
