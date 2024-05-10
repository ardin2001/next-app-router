export default function Products({params}:{params:{id:string}}) {
    return (
        <div>
            <h1>Product Page [...id]</h1>
            <p>Product ID: {params.id}</p>
        </div>
    )
}