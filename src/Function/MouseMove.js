import { useEffect, useState } from 'react';

export default function MouseMove() {


    const [mouse, setMouse] = useState({ x: null, y: null });

    const handleMouseMove = e => {

        setMouse({
            x: e.pageX,
            y: e.pageY
        });
    };

    useEffect(() => {

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [])


    return mouse;
};

