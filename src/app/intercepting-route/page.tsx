import Link from "next/link"

export default function Dashboard() {
    return (
        <aside className="">
            <h1>Intercepting Route</h1>
            <div className="flex flex-col w-max">
            <Link href="intercepting-route/detail" className="text-white bg-green-500 py-0.5 px-5 mt-5">Detail</Link>
            <Link href="intercepting-route/tes" className="text-white bg-green-500 py-0.5 px-5 mt-5">Tes</Link>
            </div>
        </aside>
    )
}