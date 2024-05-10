'use client'
export default function Login() {
    const HandlerLogin = async (event: any) => {
        event.preventDefault();
        const response = await fetch(`https://app-router-nu.vercel.app/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value
            })
        })
    };
    return (
        <div className="my-5">
            <h3 className="text-center text-3xl text-slate-700 font-bold pb-5">Login Page</h3>
            <form onSubmit={HandlerLogin} className="grid w-1/3 m-0-auto bg-slate-500 p-5 m-auto gap-3">
                <label className="text-white" htmlFor="email">Email</label>
                <input type="text" id="email" />
                <label className="text-white" htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit" className="bg-green-500 py-1 text-white">Login</button>
            </form>
        </div>
    );
}