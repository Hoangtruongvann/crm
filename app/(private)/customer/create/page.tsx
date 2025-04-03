'use client';
import { useRouter } from 'next/navigation'
import { useCreateCustomer } from "@/app/_hooks";
import toast from "react-hot-toast";
import CustomerForm from "../../_components/CustomerForm";
import { useEffect } from 'react';


export default function Page() {
    const router = useRouter();
    const { isCustomerCreated, handleCreateCustomer } = useCreateCustomer();

    useEffect(() => {
        if (isCustomerCreated) {
            toast.success("Customer created successfully!");
            router.push("/");

        }
    }, [isCustomerCreated])

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">CREATE CUSTOMER</h1>
            <CustomerForm handler={handleCreateCustomer} />
        </div>
    )
}
