import Image from "next/image";

export default function Navbar() {
    return (
        <div className="bg-white h-[63.77px] px-4 flex justify-between items-center">
            <div className="text-black font-medium uppercase font-semibold">
                {process.env.APP_NAME}
            </div>
            <Image src="/bell.svg" alt="Bell" width={18} height={20} />
        </div>
    );
}
