import { REQUEST_LIMIT, TIME_LIMIT } from '../Widget/widget-settings';

function randomRequests() {
    const requests = [];

    const now = new Date().valueOf();

    for (let n = 0; n < Math.max(0, REQUEST_LIMIT - 3); n++) {
        const elapsed = Math.random() * (TIME_LIMIT * 3600000);

        requests.push({
            time: new Date(now - elapsed),
        });
    }

    requests.push({ time: new Date(now - TIME_LIMIT * 3600000 + 15000) });

    return requests.sort((a, b) => a.time - b.time);
}

export default randomRequests;
