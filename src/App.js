import Layout from './Layout';
import Content from './content';

import RequestsList from './RequestsDataContext/RequestsList';

export default function App() {
    return (
        <Layout title="GPT-4 Quota Widget">
            <Content />

            <RequestsList />
        </Layout>
    );
}
