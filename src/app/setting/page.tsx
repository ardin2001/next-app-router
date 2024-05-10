'use client'
import Header from "./header";
import Footer from "./footer";
import { useRef,useEffect } from "react";
import { MutableRefObject } from "react";
const Setting = () => {
    const countRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    useEffect(() =>{
        countRef.current.style.backgroundColor = 'blue';
    },[])
    
    return (
        <div>
            <Header/>
            <h1 ref={countRef} className="bg-green-300">Setting</h1>
            <Footer/>
        </div>
    );
};
export default Setting