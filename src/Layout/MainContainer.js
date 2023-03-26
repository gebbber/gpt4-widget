import pattern from '../assets/pattern';

function Main({ children }) {
    return (
        <div className="fixed inset-0">
            <div className="overflow-hidden w-full h-full relative dark:bg-neutral-800 dark:text-neutral-500">
                <div className="flex h-full flex-1 flex-col md:pl-[260px]">
                    <main
                        className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1"
                        style={pattern}>
                        {children}
                    </main>
                </div>

                <aside className="dark hidden bg-neutral-900 md:fixed md:inset-y-0 md:flex md:w-[260px] md:flex-col"></aside>
            </div>
        </div>
    );
}

export default Main;
