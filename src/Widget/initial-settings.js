const timeLimit = 3; // hours
const requestLimit = 25; // requests

const requests = [];

const now = new Date().valueOf();

for (let n = 0; n < Math.max(0, requestLimit - 3); n++) {
    const elapsed = Math.random() * (timeLimit * 3600000);

    requests.push({
        time: new Date(now - elapsed),
    });
}

const sorted = requests.sort((a, b) => a.time - b.time);

const positiveColor = { r: 0, g: 255, b: 0, a: 0.5 };
const negativeColor = { r: 255, g: 0, b: 0, a: 1 };

export { requestLimit, timeLimit, sorted as requests, positiveColor, negativeColor };
