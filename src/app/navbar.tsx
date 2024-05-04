import Link from "next/link";
import { usePathname, redirect, useSearchParams, } from "next/navigation";
const Navbar = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const Redirect = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        redirect("/")
    }
    const updateSorting = (sortOrder: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('sort', sortOrder)
        window.history.pushState(null, '', `?${params.toString()}`)
    }
    return (
        <header className="flex justify-between px-10 py-3 bg-slate-600 text-white">
            <h1>Navbar</h1>
            <ul className="flex gap-x-5">
                <Link href="/"><li className={pathname === "/" ? "text-red-500" : ""}>Home</li></Link>
                <li className={pathname === "/about" ? "text-red-500" : ""} onClick={Redirect}>About</li>
                <Link href="/setting"><li className={pathname === "/setting" ? "text-red-500" : ""}>Setting</li></Link>
                <Link href="/setting/profile"><li className={pathname === "/setting/profile" ? "text-red-500" : ""}>Profile</li></Link>
            </ul>
            <button onClick={() => updateSorting('asc')}>SearchParam</button>
        </header>
    );
};
export default Navbar