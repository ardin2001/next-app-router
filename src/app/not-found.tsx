import Link from "next/link"
export default function NotFound() {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="p-4 flex flex-col gap-2">
                <h2 className="text-9xl text-red-500 font-bold">404</h2>
                <p className="font-medium self-center">Page Not Found</p>
                <Link href="/" className="bg-blue-400 rounded-lg py-1 w-2/3 self-center text-center text-white">Back To Home</Link>
                {/* <button className="bg-blue-400 rounded-lg py-1 w-2/3 self-center">Back To Home</button> */}
            </div>
        </div>
    )
}