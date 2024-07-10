import Image from 'next/image'
import dynamic from 'next/dynamic'

export default async function Detail({params}:{params:{id:string}}) {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?id=${params.id}`, {
        cache: 'no-store'
    })
    const { data } = await response.json()
    return (
            <div className="w-1/5 p-2 bg-slate-400 text-white mx-auto">
                <Image src={data.image} width={5000} height={5000} alt="" priority />
                <h1>{data.name}</h1>
                <p>{data.category}</p>
                <p className="px-3 bg-green-400 text-center">{data.price}</p>
            </div>
    )
}