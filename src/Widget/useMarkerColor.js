import { useMemo } from 'react';
import { REQUEST_LIMIT, useColors } from './widget-settings';

export default function useMarkerColor(numRequests) {
    const [positiveColor, negativeColor] = useColors();

    const markerColor = useMemo(() => {
        const positive = { ...positiveColor, a: positiveColor.a ?? 1 };
        const negative = { ...negativeColor, a: negativeColor.a ?? 1 };

        const fraction = Math.min(1, Math.max(0, numRequests / REQUEST_LIMIT));

        const dR = negative.r - positive.r;
        const dG = negative.g - positive.g;
        const dB = negative.b - positive.b;
        const dA = negative.a - positive.a;

        const r = Math.round(positive.r + fraction * dR);
        const g = Math.round(positive.g + fraction * dG);
        const b = Math.round(positive.b + fraction * dB);
        const a = positive.a + fraction * dA;

        return `rgba(${r},${g},${b},${a})`;
    }, [numRequests, positiveColor, negativeColor]);

    return markerColor;
}
