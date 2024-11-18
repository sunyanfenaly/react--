import { useRef, useEffect } from "react";


export const useUpdate = (callback, deps) => {
    const isFirst = useRef(true);

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
        } else {
            return callback();
        }
    }, deps);

}