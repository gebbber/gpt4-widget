import Section from '../Layout/Section';

function Introduction() {
    return (
        <Section title="Introduction">
            <p>
                As a ChatGPT-Plus subscriber, it can be challenging to track your usage quota. This
                'request timeline' widget demonstrates a simple way to represent your recent usage
                visually on a timeline.
            </p>
            <p>
                Using the quota of 25 requests in 3 hours (as of March 26, 2023) as an example, the
                timeline shows when requests were made during the interval of concern. For the sake
                of demonstration, you can test its behavior by deleting individual requests below,
                or by adding new ones&mdash;just hit the 'submit' button.
            </p>
            <p>
                The circles representing the requests will change color from translucent green to
                opaque red as you approach the quota, making it easy to gauge your usage.
            </p>
            <p>
                See the repository at{' '}
                <a
                    href="https://github.com/gebbber/gpt4-widget"
                    className="text-teal-700 underline font-medium">
                    https://github.com/gebbber/gpt4-widget
                </a>
                .
            </p>
        </Section>
    );
}

export default Introduction;
