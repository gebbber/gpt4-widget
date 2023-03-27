import TextInputForm from './Layout/TextInputForm';
import Instructions from './assets/Introduction';
import RequestsList from './Widget/RequestsList';
import AdjustSettings from './Widget/AdjustSettings';

import Main from './Layout/MainContainer';
import Header from './assets/Header';

export default function App() {
    return (
        <Main>
            <div className="h-screen flex flex-col justify-between w-full relative">
                <div className="overflow-y-scroll grow-1">
                    <div className="w-full md:max-w-2xl mx-auto flex flex-col gap-4 py-2">
                        <Header />
                        <Instructions />
                        <AdjustSettings />
                        <RequestsList />
                    </div>
                    <Footer />
                </div>
            </div>
        </Main>
    );
}

function Footer() {
    const classes = [
        'bg-white',
        'md:absolute md:bottom-0 md:inset-x-0',
        'w-full',
        'border-t md:border-t-0 dark:border-white/20',
        'md:border-transparent',
        'bg-white md:!bg-transparent pt-2',
    ].join(' ');
    return (
        <>
            <div className="hidden md:block h-24 border-t" />
            <div className={classes}>
                <TextInputForm />
            </div>
        </>
    );
}
