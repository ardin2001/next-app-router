import Image from "next/image"
export default async function Products({params}:{params:{id:string}}) {
    // const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?id=${params.id}`,{
    //     cache :'no-store'
    // })
    // const {data} = await response.json()
    return (
        <div className="w-1/5 p-2 bg-slate-400 text-white">
            {/* <Image src={data.image} alt="" />
            <h1>{data.name}</h1>
            <p>{data.category}</p>
            <p className="px-3 bg-green-400 text-center">{data.price}</p> */}
        </div>
    )
}