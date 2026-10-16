export const CV_OPEN_EVENT = 'cv:open';
export const openCv = () => window.dispatchEvent(new Event(CV_OPEN_EVENT));
