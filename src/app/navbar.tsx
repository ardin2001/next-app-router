import Link from "next/link";
import { usePathname, } from "next/navigation";
import { signIn, signOut,useSession } from "next-auth/react";
const Navbar = () => {
    const pathname = usePathname()
    const sessionUser = useSession()
    
    return (
        <header className="flex justify-between px-10 py-3 bg-slate-600 text-white">
            <div className="flex gap-6 items-center">
                <h1 className="text-2xl font-semibold">Navbar</h1>
                <ul className="flex gap-x-4 text-sm font-semibold">
                    <Link href="/"><li className={pathname === "/" ? "text-red-500" : ""}>Home</li></Link>
                    <Link href="/products/loading" className={pathname === "/products/loading" ? "text-red-500" : ""}>Products</Link>
                    <Link href="/setting"><li className={pathname === "/setting" ? "text-red-500" : ""}>Setting</li></Link>
                    <Link href="/setting/profile"><li className={pathname === "/setting/profile" ? "text-red-500" : ""}>Profile</li></Link>
                </ul>
            </div>
            {sessionUser.status === "authenticated" ? (
                <button onClick={() => signOut()} className="bg-red-500 px-2 py-1 text-white">Logout</button>
            ) : (
                <button onClick={() => signIn()} className="bg-green-500 px-2 py-1 text-white">Login</button>
            )}
        </header>
    );
};
export default Navbar