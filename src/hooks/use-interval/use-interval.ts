import React from "react";

export function useInterval(callback: () => void, delay: number) {
    const savedCallback = React.useRef();

    // Remember the latest callback.
    React.useEffect(() => {
        // @ts-ignore
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    React.useEffect(() => {
        const tick = () => {
            // @ts-ignore
            savedCallback.current();
        };
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default null;
