import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="bg-white min-h-screen w-full flex items-center justify-center">
            <div className="w-[520px] max-w-full flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <Image src="/logo.svg" alt="Workflow Logo" width={200} height={44} />
                    <p className="text-xl font-medium text-black">Sign in to your account</p>
                </div>
                <div className="space-y-4 w-full">
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-base   font-medium text-black">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full p-4 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-base text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-base font-medium text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-4 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-base text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-base font-medium text-black">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                className="w-full p-4 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-base text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <button
                        type="submit"
                        className="w-full p-4 text-base font-semibold text-white bg-main-purple hover:bg-main-purple/80 rounded-xl"
                    >
                        Sign up
                    </button>
                    <div className="text-base text-black">Already have an account? <Link href="/login" className="text-main-purple">Log In </Link> </div>

                </div>
            </div>
        </div>
    );
}
