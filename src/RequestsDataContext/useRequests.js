import { createContext, useContext, useEffect, useState } from 'react';
import { TIME_LIMIT } from '../Widget/widget-settings';
import randomRequests from './random-requests';

const RequestsContext = createContext([]);

function RequestsContextProvider({ children }) {
    const [requests, setRequests] = useState(randomRequests());

    const nextRefresh = requests.length
        ? requests[0].time.valueOf() - (new Date().valueOf() - TIME_LIMIT * 60 * 60 * 1000)
        : null;

    useEffect(() => {
        if (!nextRefresh) return;

        const p = setTimeout(purgeOldRequests, nextRefresh + 100);
        return () => clearTimeout(p);
    }, [nextRefresh]);

    const value = { requests, makeNewRequest, clearRequest };

    return <RequestsContext.Provider value={value}>{children}</RequestsContext.Provider>;

    function makeNewRequest() {
        setRequests(requests => {
            return [...requests, { time: new Date() }]; // always add to the end, no need to sort
        });
    }

    function clearRequest(requestTime) {
        setRequests(requests => {
            return requests.filter(request => request.time !== requestTime);
        });
    }

    function purgeOldRequests() {
        setRequests(requests => {
            const minTime = new Date().valueOf() - TIME_LIMIT * 3600000;
            return requests
                .filter(request => request.time.valueOf() > minTime)
                .sort((a, b) => a.time - b.time);
        });
    }
}

export { RequestsContextProvider };

export default function useRequests() {
    return useContext(RequestsContext);
}
