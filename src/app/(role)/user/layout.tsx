import Navbar from "@/app/navbar"
export default function AdminLayout(props: any) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            {props.children}
        </>
    )
}