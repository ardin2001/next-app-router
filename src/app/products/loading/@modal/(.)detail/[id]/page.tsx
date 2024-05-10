import Modal from '@/app/components/modal'
import Image from 'next/image'
export default async function Detail({params}:{params:{id:string}}) {
    const response = await fetch(`${process.env.HOSTNAME_P1}/api/products?id=${params.id}`, {
        cache: 'no-store'
    })
    const { data } = await response.json()
    return (
        <Modal>
            <div className="w-1/5 p-2 bg-slate-400 text-white relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={data[0].image} width={5000} height={5000} alt="" />
                <h1>{data[0].name}</h1>
                <p>{data[0].category}</p>
                <p className="px-3 bg-green-400 text-center">{data[0].price}</p>
            </div>
        </Modal>
    )
}