import { createContext, useContext, useState } from 'react';

import {
    requestLimit as defaultRequestLimit,
    timeLimit as defaultTimeLimit,
    requests as startingRequests,
    positiveColor as defaultPositiveColor,
    negativeColor as defaultNegativeColor,
} from './initial-settings';

const WidgetDataContext = createContext();

export function AddWidgetDataContext({ children }) {
    const [timeLimit, setTimeLimit] = useState(defaultTimeLimit);
    const [requestLimit, setRequestLimit] = useState(defaultRequestLimit);
    const [requests, setRequests] = useState(startingRequests);
    const [positiveColor, setPositiveColor] = useState(defaultPositiveColor);
    const [negativeColor, setNegativeColor] = useState(defaultNegativeColor);

    const value = {
        timeLimit,
        setTimeLimit,
        requestLimit,
        setRequestLimit,
        requests,
        setRequests,
        positiveColor,
        setPositiveColor,
        negativeColor,
        setNegativeColor,
        filterRequests: function () {
            setRequests(requests => filterRequests(requests));
        },
        makeNewRequest: function () {
            setRequests(requests => {
                return [...filterRequests(requests), { time: new Date() }];
            });
        },
        clearRequest: function (requestTime) {
            setRequests(requests => {
                return requests.filter(request => request.time !== requestTime);
            });
        },
        clearAllRequests: function () {
            setRequests([]);
        },
    };

    return <WidgetDataContext.Provider value={value}>{children}</WidgetDataContext.Provider>;

    function filterRequests(requests) {
        const minTime = new Date().valueOf() - timeLimit * 3600000;
        return requests
            .filter(request => request.time.valueOf() > minTime)
            .sort((a, b) => a.time.valueOf() - b.time.valueOf());
    }
}

export default function useWidgetData() {
    const widgetContext = useContext(WidgetDataContext);
    if (!widgetContext) throw new Error(`useWidgetData used outside of <AddWidgetDataContext>`);
    return widgetContext;
}
