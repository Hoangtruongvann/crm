'use client';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { customerFormSchema, CustomerFormData } from "@/app/_utils/validates/customer";
import { Customer } from "@/app/_interfaces";
import { Status } from "@prisma/client";
import { useEffect, useState } from "react";
import { CustomerFormProps } from "./interfaces";


export default function CustomerForm({ handler, customer, id = null }: CustomerFormProps) {

    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CustomerFormData>({
        resolver: zodResolver(customerFormSchema),

    });

    const onSubmit = async (data: CustomerFormData) => {
        const customerData: Customer = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            status: Status.ACTIVE,
            last_contacted: new Date(data.last_contacted).toISOString(),
        }

        const body = !id ? customerData : { customer: customerData, id: id };

        setIsLoading(true);

        await handler(body);
        setIsLoading(false);
    }

    useEffect(() => {
        reset({
            name: customer?.name,
            email: customer?.email,
            phone: customer?.phone,
            address: customer?.address,
            last_contacted: customer?.last_contacted && new Date(customer?.last_contacted).toISOString().split("T")[0],
        });
    }, [customer])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 relative">
            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-black">
                    Full Name
                </label>
                <input
                    {...register("name")}
                    type="text"
                    className={`${errors.name ? '!border-red-500' : ''} block w-full px-4 py-3  placeholder:text-light-grey text-gray-900 border border-gray-300 rounded-xl bg-gray-50 sm:text-sm text-xs focus:ring-main-purple focus:border-main-purple focus:outline-none`}
                    placeholder=""
                />
                {errors.name && <p className="text-red-500 text-xs font-medium ml-2">{errors.name.message}</p>}
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
                <button type={isLoading ? 'button' : 'submit'} className={`w-40 py-2 text-sm font-semibold border broder-main-purple text-main-purple rounded-lg hover:bg-main-purple hover:text-white ${isLoading && '!bg-gray-300 text-white'}`}>{isLoading ? 'Processing...' : 'Save'}</button>
                <Link href="/" className="w-40 py-2 text-sm text-center block font-semibold border border-red-600 bg-white text-gray-600 rounded-lg hover:bg-red-600 hover:text-white">Cancel</Link>
            </div>
        </form>
    )
}
