'use client';
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerFormSchema, CustomerFormData } from "@/app/_utils/validates/customer";
import useCreateCustomer from "@/app/_hooks/useCreateCustomer";
import { Customer } from "@/app/_interfaces";
import { Status } from "@prisma/client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


export default function Page() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<CustomerFormData>({
        resolver: zodResolver(customerFormSchema),
    });

    const { isCustomerCreated, handleCreateCustomer } = useCreateCustomer();

    const onSubmit = async (data: CustomerFormData) => {
        const customerData: Customer = {
            name: data.fullname,
            email: data.email,
            phone: data.phone,
            address: data.address,
            status: Status.ACTIVE,
            last_contacted: new Date(data.last_contacted).toISOString(),
        }
        setIsLoading(true);
        await handleCreateCustomer(customerData);
        setIsLoading(false);
    }

    useEffect(() => {
        if (isCustomerCreated) {
            toast.success("Customer created successfully!");
            // reset();
            // router.push("/");

        }
    }, [isCustomerCreated])

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">CREATE CUSTOMER</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative">
                <div className="space-y-2">
                    <label htmlFor="fullname" className="block text-sm font-medium text-black">
                        Full Name
                    </label>
                    <input
                        {...register("fullname")}
                        type="text"
                        className={`${errors.fullname ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                        placeholder=""
                    />
                    {errors.fullname && <p className="text-red-500 text-xs font-medium ml-2">{errors.fullname.message}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-black">
                            Email address
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            className={`${errors.email ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                            placeholder="johndoe@gmail.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs font-medium ml-2">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-black">
                            Phone Number
                        </label>
                        <input
                            {...register("phone")}
                            type="text"
                            className={`${errors.phone ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                            placeholder=""
                        />
                        {errors.phone && <p className="text-red-500 text-xs font-medium ml-2">{errors.phone.message}</p>}
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-black">
                        Address
                    </label>
                    <input
                        {...register("address")}
                        type="text"
                        className={`${errors.address ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                        placeholder=""
                    />
                    {errors.address && <p className="text-red-500 text-xs font-medium ml-2">{errors.address.message}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-black">
                        Contact Date
                    </label>
                    <input
                        {...register("last_contacted")}
                        type="date"
                        className={`${errors.last_contacted ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                        placeholder=""
                    />
                    {errors.last_contacted && <p className="text-red-500 text-xs font-medium ml-2">{errors.last_contacted.message}</p>}
                </div>
                <div className="flex justify-end gap-4">
                    <button type={isLoading ? 'button' : 'submit'} className={`w-40 py-2 text-sm font-semibold border broder-main-purple text-main-purple rounded-lg hover:bg-main-purple hover:text-white ${isLoading && '!bg-gray-300 text-white'}`}>{isLoading ? 'Creating...' : 'Save'}</button>
                    <Link href="/" className="w-40 py-2 text-sm text-center block font-semibold border border-red-600 bg-white text-gray-600 rounded-lg hover:bg-red-600 hover:text-white">Cancel</Link>
                </div>
            </form>

        </div>
    )
}
