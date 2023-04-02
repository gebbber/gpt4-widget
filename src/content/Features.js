import Section from '../components/Section';

function Features() {
    return (
        <Section title="Features" dismissable>
            <div className="flex flex-col gap-2">
                <p>Here are some features that may not be immediately obvious:</p>
                <ul className="pl-6 flex flex-col gap-1">
                    <li className="list-disc pl-0">
                        <span className="font-bold">It's working with a plausible data model:</span>{' '}
                        An array of request times is provided using a React context. To adapt it for
                        production, a context provider could <code>fetch</code> a request count, and
                        the widget should function as-is.
                    </li>
                    <li className="list-disc pl-0">
                        <span className="font-bold">
                            Colors change green to red as the user approaches their quota:
                        </span>{' '}
                        A color from <code>positiveColor</code> to <code>negativeColor</code> is
                        calculated for the markers. For the demo, I've chosen saturated green and
                        saturated red, with transparency so that they self-adjust for dark mode.
                    </li>
                    <li className="list-disc pl-0">
                        <span className="font-bold">The request timeline is animated:</span> A{' '}
                        <code>setInterval</code> is used to periodically re-render the timeline. The
                        render interval is calculated to coincide with 1 pixel of movement.
                    </li>
                </ul>
            </div>
        </Section>
    );
}

export default Features;
