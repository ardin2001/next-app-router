import Dom from "./dom";
// cara manipulasi agar tetap server component
export default function Coba() {
    return (
        <div>
            <Dom />
            <div className='header bg-green-400 h-32 mb-10 sticky top-0'></div>
            <div className="bg-red-300 h-screen mb-10"></div>
            <div className="bg-green-300 h-screen mb-10"></div>
            <div className="bg-blue-300 h-screen mb-10"></div>
        </div>
    );
};
