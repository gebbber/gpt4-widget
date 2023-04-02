import { TIME_LIMIT, REQUEST_LIMIT } from './widget-settings';

import useRequests from '../RequestsDataContext/useRequests';
import useTimelineWidth from './useTimelineWidth';
import usePositionedMarkers from './usePositionedMarkers';

import TimeLine from './TimeLine';
import RequestMarkers from './RequestMarkers';

function Widget() {
    const { requests } = useRequests();
    const [width, ref] = useTimelineWidth();
    const markers = usePositionedMarkers(requests, width);

    return (
        <div className="flex flex-row gap-1 w-full justify-between items-center text-black/50 dark:text-white/30 text-xs">
            <div className="grow-0">{TIME_LIMIT}h</div>
            <TimeLine tlRef={ref}>
                <RequestMarkers requests={markers} />
            </TimeLine>
            <div className="grow-0">
                {requests.length}/{REQUEST_LIMIT}
            </div>
        </div>
    );
}

export default Widget;
