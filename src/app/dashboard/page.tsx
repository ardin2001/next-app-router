import Link from "next/link"
export default function Dashboard() {
    return (
        <div>
            <h2>Dashboard Page</h2>
            <div className="grid w-max gap-5">
                <Link className="bg-green-500 px-6" href="/dashboard/prod/1">prod detail</Link>
                <Link className="bg-green-500 px-6" href="/dashboard/prod">Prod</Link>
            </div>
        </div>
    )
}