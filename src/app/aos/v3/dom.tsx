"use client";
import { useEffect } from 'react';

export default function Dom() {
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

    return null
};
