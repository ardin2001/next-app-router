import Link from "next/link";
import { usePathname, } from "next/navigation";
const Navbar = () => {
    const pathname = usePathname()
    
    return (
        <header className="flex justify-between px-10 py-3 bg-slate-600 text-white">
            <div className="flex gap-6 items-center">
                <h1 className="text-xl font-semibold">Navbar</h1>
                <ul className="flex gap-x-3 text-sm">
                    <Link href="/"><li className={pathname === "/" ? "text-red-500" : ""}>Home</li></Link>
                    <Link href="/products/loading" className={pathname === "/products/loading" ? "text-red-500" : ""}>About</Link>
                    <Link href="/setting"><li className={pathname === "/setting" ? "text-red-500" : ""}>Setting</li></Link>
                    <Link href="/setting/profile"><li className={pathname === "/setting/profile" ? "text-red-500" : ""}>Profile</li></Link>
                </ul>
            </div>
            <button className="bg-red-500 px-2 py-1 text-white">Logout</button>
        </header>
    );
};
export default Navbar