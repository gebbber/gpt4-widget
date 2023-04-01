export default function TimeLine({ tlRef, children }) {
    return (
        <div className="flex-1 h-2 relative border-l border-r dark:border-white/20" ref={tlRef}>
            <div className="absolute top-1/2 border-t inset-x-0"></div>
            <div>{children}</div>
        </div>
    );
}
