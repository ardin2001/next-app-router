'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useSearchParams } from "next/navigation";
export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [loading,setLoading] = useState(true)
    const callBack = searchParams.get('callbackUrl') || 'http://localhost:3000'
    const message = (statusCode: boolean, data: string) => {
        if (statusCode) {
            toast.success(data, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
            })
        }else{
            toast.error(data, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: "colored",
                transition: Bounce,
                });
        }
    }

    const HandlerLogin = async (event: any) => {
        event.preventDefault();
        setLoading(prev => !prev)
        const response: any = await signIn("credentials", {
            email: event.target.email.value,
            password: event.target.password.value,
            redirect: false,
            callbackUrl: "/products"
        });

        if (response.ok) {
            message(true, "Login success")
            router.push(callBack)
        } else {
            message(false, "Wrong email or password")
        }
        setLoading(prev => !prev)
    };
    return (
        <div className="my-5">
            <h3 className="text-center text-3xl text-slate-700 font-bold pb-5">Login Page</h3>
            <form onSubmit={HandlerLogin} className="grid w-1/3 m-0-auto bg-slate-500 p-5 m-auto gap-3">
                <label className="text-white" htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label className="text-white" htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-green-500 py-1 text-white">{loading ? 'Login' : 'Loading...'}</button>
            </form>
            <p className="text-center font-semibold text-white text-lg w-1/3 bg-red-500 m-auto py-3 cursor-pointer" onClick={() => signIn("google", { callbackUrl: callBack,redirect: false })}>Login With Google</p>
            <ToastContainer />
        </div>
    );
}