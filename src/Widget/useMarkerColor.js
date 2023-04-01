import { useMemo } from 'react';
import useWidgetData from './useWidgetData';

export default function useMarkerColor(numRequests) {
    const { positiveColor, negativeColor, requestLimit } = useWidgetData();

    const markerColor = useMemo(() => {
        const fraction = Math.min(1, Math.max(0, numRequests / requestLimit));

        const dR = negativeColor.r - positiveColor.r;
        const dG = negativeColor.g - positiveColor.g;
        const dB = negativeColor.b - positiveColor.b;
        const dA = negativeColor.a - positiveColor.a;

        const r = Math.round(positiveColor.r + fraction * dR);
        const g = Math.round(positiveColor.g + fraction * dG);
        const b = Math.round(positiveColor.b + fraction * dB);
        const a = positiveColor.a + fraction * dA;

        return { r, g, b, a };
    }, [positiveColor, negativeColor, numRequests, requestLimit]);

    return markerColor;
}

export function rgba({ r, g, b, a }) {
    return `rgba(${r},${g},${b},${a})`;
}
