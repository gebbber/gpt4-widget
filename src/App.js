import Introduction from './assets/Introduction';
import RequestsList from './Widget/RequestsList';
import AdjustSettings from './Widget/AdjustSettings';

import Layout from './Layout';
import Header from './Layout/Header';
import Implemented from './assets/Implemented';

export default function App() {
    return (
        <Layout title="GPT-4 Quota Widget">
            <Header />
            <Introduction />
            <Implemented />
            <AdjustSettings />
            <RequestsList />
        </Layout>
    );
}
