import Link from "next/link"

export default function Sidebar() {
    return (
        <div className="w-[256px] relative">
            <img src="/pattern_hexagon.svg" alt="hexagon" className="w-full h-full absolute top-0 left-0 object-cover" />
            <div className="w-full h-full absolute top-0 left-0 bg-main-blue-dark opacity-70 z-[1]"></div>
            <div className="relative z-[2] h-full bg-gradient-to-b from-main-blue-dark/90 from-0% via-main-blue-dark/35 via-[62%] to-main-blue-dark/0">
                <Link href="/" className="py-4  bg-main-blue-dark flex items-center justify-center ">
                    <img src="/logo-light.svg" alt="Workflow Logo" width={143} height={44} className="object-contain" />
                </Link>
            </div>
        </div>
    )
}
