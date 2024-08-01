"use client";
import React, { useEffect } from 'react';

export default function Coba() {
    useEffect(() => {
        const handleScroll = () => {
            // const header: any = document.querySelector('.header');
            const header: any = document.getElementsByClassName('header')[0];
            if (window.scrollY > 1) {
                header.style.borderBottomColor = 'red';
                header.style.borderBottomWidth = '5px';
                header.style.borderBottomStyle = 'solid';
            } else {
                header.style.border = 'none';
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='header bg-green-400 h-32 mb-10 sticky top-0'></div>
            <div className="bg-blue-300 h-screen mb-10"></div>
            <div className="bg-red-300 h-screen mb-10"></div>
            <div className="bg-yellow-300 h-screen mb-10"></div>
        </div>
    );
};
