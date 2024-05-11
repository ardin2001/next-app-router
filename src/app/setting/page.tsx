'use client'
import Header from "./header";
import Footer from "./footer";
import { useRef,useEffect } from "react";
import { MutableRefObject } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Setting = () => {
    const {data,status}:any = useSession()
    const router = useRouter()
    const countRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    useEffect(() =>{
        if(status == 'unauthenticated'){
            router.push('/')
        }
        if(data != undefined && data.user.role !== 'admin'){
            router.push('/')
        }
        countRef.current.style.backgroundColor = 'blue';
    },[status])
    
    return (
        <div>
            <Header/>
            <h1 ref={countRef} className="bg-green-300">Setting</h1>
            <p>Content Harus Login</p>
            <Footer/>
        </div>
    );
};
export default Setting