import Link from "next/link";
const Navbar = () => {
    return (
        <header className="flex justify-between px-10 py-3 bg-slate-600 text-white">
            <h1>Navbar</h1>
            <ul className="flex gap-x-5">
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/setting"><li>Setting</li></Link>
                <Link href="/setting/profile"><li>Profile</li></Link>
            </ul>
        </header>
    );
};
export default Navbar