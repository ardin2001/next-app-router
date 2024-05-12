'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const router = useRouter();
    const [loading,setLoading] = useState(true)
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

    const HandlerRegister = async (event: any) => {
        event.preventDefault();
        setLoading(false)
        const response: any = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
        const json = await response.json()

        if (json.status) {
            message(true, "Register success")
            setTimeout(() => {
                router.push('/auth/login')
            }, 1000);
        } else {
            message(false, "Wrong email or password")
        }
        setLoading(true)

    };
    return (
        <div className="my-5">
            <h3 className="text-center text-3xl text-slate-700 font-bold pb-5">Register Page</h3>
            <form onSubmit={HandlerRegister} className="grid w-1/3 m-0-auto bg-slate-500 p-5 m-auto gap-3">
                <label className="text-white" htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label className="text-white" htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-green-500 py-1 text-white">{loading ? 'Register' : 'Loading...'}</button>
            </form>
            <ToastContainer />
        </div>
    );
}