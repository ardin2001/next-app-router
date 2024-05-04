"use client"
import { useSearchParams } from "next/navigation"
export default function Home() {
    const searchParam = useSearchParams()
    searchParam.forEach((value, key) => console.log(key, value))
    return (
        <div>
            <h1>User Page Route</h1>
            {/* <p>searchParam : {searchParam}</p> */}
        </div>
    );
}