export default async function Products({params}:{params:{id:string}}) {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?id=${params.id}`,{
        cache :'no-store'
    })
    const {data} = await response.json()
    return (
        <div className="w-1/5 p-2 bg-slate-400 text-white">
            <img src={data[0].image} alt="" />
            <h1>{data[0].name}</h1>
            <p>{data[0].category}</p>
            <p className="px-3 bg-green-400 text-center">{data[0].price}</p>
        </div>
    )
}