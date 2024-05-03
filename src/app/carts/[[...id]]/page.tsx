export default function Carts({params}:{params:{id:string}}) {
    return (
        <div>
            <h1>Carts Page</h1>
            <p>Carts ID: {params.id}</p>
        </div>
    )
}