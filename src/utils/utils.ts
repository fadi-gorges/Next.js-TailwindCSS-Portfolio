import {useEffect, useState} from 'react';

const isBrowser = typeof window !== `undefined`;

const getScrollPosition = () => {
    return isBrowser ? document.body.scrollTop - (document.body.clientTop || 0) : 0
}

export const useScrollPosition = () => {
    const [position, setScrollPosition] = useState(getScrollPosition());

    useEffect(() => {
        let requestRunning: number | null = null;

        function handleScroll() {
            if (isBrowser && requestRunning === null) {
                requestRunning = window.requestAnimationFrame(() => {
                    setScrollPosition(getScrollPosition());
                    requestRunning = null;
                });
            }
        }

        if (isBrowser) {
            document.body.addEventListener('scroll', handleScroll);
            return () => document.body.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return position;
}


export const scrollIntoView = (id: string, offset: number) => {
    const e = document.getElementById(id)
    const y = e!.offsetTop + offset

    document.body.scrollTo({top: y, behavior: "smooth"})

    const elem = document.activeElement;
    if (elem instanceof HTMLElement) {
        elem.blur();
    }
}

export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}