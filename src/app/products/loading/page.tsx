import Image from "next/image"
import Link from "next/link"
async function fetchData() {
    await fetch('https://fakestoreapi.com/products', {cache: 'no-store'})
    // const response = await fetch('http://localhost:3000/api/products' : test with wrong url fetch
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products`, {
        cache: 'no-store'
    })
    const { data } = await response.json()
    return data
}
export default async function Products() {
    const products = await fetchData()

    return (
        <div className='grid grid-cols-5 gap-5 grid-flow-row w-11/12 mx-auto justify-between mt-5'>
            {products.map((product: any) => (
                <Link href={`${process.env.HOSTNAME_P1}/products/loading/detail/`+product.id} key={product.id} className=' p-2 bg-slate-400 rounded-md'>
                    {/* <img src={product.image} alt="" /> */}
                    <Image src={product.image} alt="" width={800} height={800} />
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                    <p>{product.price}</p>
                    <button className='bg-red-500 px-2 py-1 text-white' >Delete</button>
                </Link>
            ))}
        </div>
    )
}