'use client';
import Link from "next/link";

export default function Page() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">CREATE CUSTOMER</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="fullname" className="block text-sm font-medium text-black">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                        placeholder=""
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                            placeholder="johndoe@gmail.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-black">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            className="block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-black">
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        className="block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                        placeholder=""
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-black">
                        Contact Date
                    </label>
                    <input
                        type="date"
                        id="address"
                        name="address"
                        className="block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                        placeholder=""
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <button type="submit" className="w-40 py-2 text-sm font-semibold border broder-main-purple text-main-purple rounded-lg hover:bg-main-purple hover:text-white">Save</button>
                    <Link href="/" className="w-40 py-2 text-sm text-center block font-semibold border border-red-600 bg-white text-gray-600 rounded-lg hover:bg-red-600 hover:text-white">Cancel</Link>
                </div>
            </form>

        </div>
    )
}
