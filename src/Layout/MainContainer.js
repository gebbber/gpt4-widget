import pattern from '../assets/pattern';

function Main({ children }) {
    return (
        <div className="fixed inset-0" style={pattern}>
            <div className="bg-gradient-to-b from-white/0 to-white/100">
                <div className="overflow-hidden w-full h-full relative">
                    <aside className="hidden md:fixed bg-neutral-900 md:inset-y-0 md:flex md:w-[260px] md:flex-col"></aside>
                    <div className="flex h-full flex-1 flex-col md:pl-[260px]">
                        <main className="relative h-full w-full overflow-hidden">{children}</main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
