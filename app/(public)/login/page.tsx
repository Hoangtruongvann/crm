'use client';
import { LoginFormData, LoginFormSchema } from "@/app/_utils/validates/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function Page() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginFormSchema),

    });

    const onSubmit = async (data: LoginFormData) => {
        localStorage.setItem("token", "isValidToken");
        router.push("/");
    }


    return (
        <div className="bg-white min-h-screen w-full flex items-center justify-center">
            <div className="w-[520px] max-w-full flex flex-col gap-10 items-center">
                <div className="flex flex-col gap-2 items-center">
                    <Image src="/logo.svg" alt="Workflow Logo" width={0} height={0} className="w-[200px] h-auto" priority={true} />
                    <p className="text-xl font-medium text-black">Sign in to your account</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <div className="space-y-3">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-black">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                {...register("email")}
                                className={`${errors.email && "!border-red-500"} block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                                placeholder="johndoe@gmail.com"
                                autoComplete="true"
                            />
                            {errors.email && <p className="text-red-500 text-xs font-medium ml-2">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-black">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                {...register("password")}
                                className={`${errors.email && "!border-red-500"} block w-full px-4 py-3 placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                                autoComplete="true"
                            />
                            {errors.password && <p className="text-red-500 text-xs font-medium ml-2">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <button type="submit" className="cursor-pointer w-full px-4 py-3 rounded-xl bg-main-blue-light text-white flex gap-2 items-center justify-center">
                            Sign in <Image src="/arrow-left.svg" alt="Arrow" width={20} height={12} />
                        </button>
                        <div className="text-sm text-black">Don't have an account? <Link href="/register" className="text-main-purple">Create an account </Link> </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
