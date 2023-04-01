import Section from '../Layout/Section';

function Implemented() {
    return (
        <Section title="Implemented">
            <p>
                There's actually a lot already implemented here:
                <ul className="pl-6">
                    <li className="list-disc pl-0">
                        <span className="font-bold">It's working with a realistic data store:</span>{' '}
                        An array of request times is provided as a React context. A context provider
                        could fetch a request count from a production server and the widget should
                        function as-is.
                    </li>
                    <li className="list-disc pl-0">
                        <span className="font-bold">Colors change green to red:</span> A color from{' '}
                        <span className="font-mono">positiveColor</span> to{' '}
                        <span className="font-mono">negativeColor</span> is calculated for the
                        markers. The current setting is translucent green to opaque red, and can
                        easily be changed.
                    </li>
                    <li className="list-disc pl-0">
                        <span className="font-bold">It stays live:</span> A{' '}
                        <span className="font-mono">setInterval</span> is used to periodically
                        re-filter the requests at an interval of 1 pixel of the timeline's width,
                        triggering a re-render to update the dot positions.
                    </li>
                </ul>
            </p>
        </Section>
    );
}

export default Implemented;
