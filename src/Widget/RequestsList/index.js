import Section from '../../Layout/Section';
import RequestItem from './RequestItem';
import useWidgetData from '../useWidgetData';

function RequestsList() {
    const { requests } = useWidgetData();

    return (
        <Section>
            <h2 className="text-xl mb-2 font-medium">List of GPT-4 Requests</h2>
            <ul className="flex flex-col gap-1">
                {requests.map(request => (
                    <RequestItem key={request.time.valueOf()} time={request.time} />
                ))}
            </ul>
        </Section>
    );
}

export default RequestsList;
