import Section from '../components/Section';

function WidgetSettings() {
    return (
        <Section title="Widget Settings" dismissable>
            <p>
                Widget settings can be adjusted in the <code>src/Widget/widget-settings.js</code>{' '}
                file in the repository.
            </p>
        </Section>
    );
}

export default WidgetSettings;
