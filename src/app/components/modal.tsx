'use client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
export default  function Modal({children} :{children : ReactNode}){
    const router = useRouter()
    const closeModal = () =>{
        router.back()
    }
    return (
        <div onClick={closeModal} className="z-50 bg-black/60 fixed right-0 left-0 top-0 bottom-0 text-white">
            {children}
        </div>
    )
}