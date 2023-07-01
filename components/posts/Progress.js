"use client"; 

import React from 'react'
import { useEffect, useState } from 'react'

const Progress = () => {

    const [scrollValue, setScrollValue] = useState(0);  

    useEffect(() => {
        const onScroll = (e) => {
        const { height } = articleRef.current.getBoundingClientRect();
        setScrollValue(e.target.documentElement.scrollTop / (height - window.innerHeight));
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [scrollValue]);

    const position = Math.max(1 - scrollValue, 0);
    const complete = position === 0;
    const notMoved = position === 1;
    
    return (
        <div id="prog_id" className={(scrollValue < 0.15) || (scrollValue >= 1.15) ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
            <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />
            </svg>  
        </div> 
    )
}

export default Progress