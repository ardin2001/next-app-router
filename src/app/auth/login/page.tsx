'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
export default function Login() {
    const router = useRouter();
    const [loading,setLoading] = useState(true)
    // const [message,setMesssage] = useState('')
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

        const response: any = await signIn("credentials", {
            email: event.target.email.value,
            password: event.target.password.value,
            redirect: false,
            callbackUrl: "/products"
        });

        if (response.ok) {
            message(true, "Login success")
            router.push('/products')
        } else {
            message(false, "Wrong email or password")
        }

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
            <ToastContainer />
        </div>
    );
}