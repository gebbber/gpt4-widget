import Section from '../Layout/Section';
// import useWidgetData from './useWidgetData';

function AdjustSettings() {
    // const {
    //     timeLimit,
    //     setTimeLimit,
    //     requestLimit,
    //     setRequestLimit,
    //     positiveColor,
    //     setPositiveColor,
    //     negativeColor,
    //     setNegativeColor,
    // } = useWidgetData();

    return (
        <Section title="Settings" className="opacity-50">
            <p>
                Later: add widgets to change 'positiveColor', 'negativeColor', 'timeLimit', and
                'requestLimit'.
            </p>
        </Section>
    );
}

export default AdjustSettings;
