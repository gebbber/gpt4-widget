import TextInputForm from './Layout/TextInputForm';
import Instructions from './assets/Introduction';
import RequestsList from './Widget/RequestsList';
import AdjustSettings from './Widget/AdjustSettings';

import { AddWidgetDataContext } from './Widget/useWidgetData';
import Main from './Layout/MainContainer';
import Header from './Header';

export default function App() {
    return (
        <Main>
            <AddWidgetDataContext>
                <div className="h-screen flex flex-col justify-between w-full">
                    <div className="overflow-y-scroll grow-1">
                        <div className="w-full md:max-w-2xl mx-auto flex flex-col gap-4 py-2 ">
                            <Header />
                            <Instructions />
                            <AdjustSettings />
                            <RequestsList />
                        </div>
                    </div>
                    <Footer />{' '}
                </div>
            </AddWidgetDataContext>
        </Main>
    );
}

function Footer() {
    const classes = [
        'grow-0',
        'w-full',
        'border-t md:border-t-0 dark:border-white/20',
        'md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient',
        'bg-white dark:bg-neutral-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2',
    ].join(' ');
    return (
        <div className={classes}>
            <TextInputForm />
        </div>
    );
}
