import { useEffect, useRef, useState } from 'react';

const useVirtualGrid = ({ width, height, overscan = 0 }: { width: number; height: number; overscan?: number }) => {
    const parentRef = useRef<HTMLElement | null>(null);
    const [state, setState] = useState(() => ({
        fromRow: 0,
        toRow: 0,
        fromCol: 0,
        toCol: 0
    }));

    useEffect(() => {
        let frameId: any;
        const frame = () => {
            if (parentRef.current) {
                const rect = parentRef.current.getBoundingClientRect();
                const nextFromRow = Math.max(Math.floor(parentRef.current.scrollTop / height) - overscan, 0);
                const nextToRow = Math.max(
                    (Math.ceil(parentRef.current.scrollTop + rect.height) + overscan) / height,
                    0
                );
                const nextFromCol = Math.max(Math.floor(parentRef.current.scrollLeft / width) - overscan, 0);
                const nextToCol = Math.max(
                    (Math.ceil(parentRef.current.scrollLeft + rect.width) + overscan) / width,
                    0
                );

                setState((currentState) => {
                    if (
                        currentState.fromRow === nextFromRow &&
                        currentState.toRow === nextToRow &&
                        currentState.fromCol === nextFromCol &&
                        currentState.toCol === nextToCol
                    ) {
                        return currentState;
                    }

                    return {
                        fromRow: nextFromRow,
                        toRow: nextToRow,
                        fromCol: nextFromCol,
                        toCol: nextToCol
                    };
                });
            }
            frameId = requestAnimationFrame(frame);
        };

        frame();

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [height, width]);

    return [parentRef, state] as const;
};

export default useVirtualGrid;
