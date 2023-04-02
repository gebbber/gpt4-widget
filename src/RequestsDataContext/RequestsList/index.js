import RequestItem from './RequestItem';

import Section from '../../components/Section';
import useRequests from '../useRequests';

function RequestsList() {
    const { requests } = useRequests();

    return (
        <Section title="List of GPT-4 Requests" dismissable={!requests.length}>
            <p>
                Delete these requests to see how the timeline is affected, or use the 'submit'
                button below to add new requests:
            </p>
            <ul className="flex flex-col gap-1">
                {requests.map((request, i) => (
                    <RequestItem
                        key={request.time.valueOf()}
                        time={request.time}
                        showCount={i === 0}
                    />
                ))}
            </ul>
        </Section>
    );
}

export default RequestsList;
