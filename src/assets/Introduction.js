import Section from '../Layout/Section';

function Introduction() {
    return (
        <Section title="Introduction">
            <p>
                As a ChatGPT-Plus subscriber, it can be challenging to track your usage quota. This
                'request timeline' widget demonstrates a simple way to represent your recent usage
                visibly on a timeline.
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
        </Section>
    );
}

export default Introduction;
