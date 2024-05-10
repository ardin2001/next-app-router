import Modal from "@/app/components/modal"
export default function Loading() {
    return (
        <Modal>
            <div className="w-1/5 p-2 relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className="font-semibold text-2xl text-red-500">Loading...</h3>
            </div>
        </Modal>
    )
}