import Section from '../components/Section';

function Introduction() {
    return (
        <Section title="Introduction" dismissable>
            <p>
                It can be challenging for ChatGPT-Plus subscribers to track their usage relative to
                their quota. This 'request timeline' widget demonstrates a simple way to visually
                represent a user's recent usage.
            </p>
            <p>
                For the sake of demonstration, you can test its behavior by deleting individual
                requests below, or by adding new ones&mdash;just hit the 'submit' button.
            </p>
            <p>
                The circles representing the requests will change color from green to red as the
                user approaches their quota, providing intuitive visual feedback as they approach
                their limit.
            </p>

            <p>
                See the repository at{' '}
                <a
                    href="https://github.com/gebbber/gpt4-widget"
                    className="text-teal-700 dark:text-teal-500 underline font-medium">
                    https://github.com/gebbber/gpt4-widget
                </a>
                .
            </p>
        </Section>
    );
}

export default Introduction;
