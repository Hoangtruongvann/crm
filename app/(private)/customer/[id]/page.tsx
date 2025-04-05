'use client';
import {  useEffect } from "react";
import { useCustomerDetail, useUpdateCustomer } from "@/app/_hooks";
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import CustomerForm from "../../_components/CustomerForm";
import toast from "react-hot-toast";

export default function Page() {
    const params = useParams<{ id: string }>()

    const { isCustomerUpdated, handleUpdateCustomer } = useUpdateCustomer();
    const { customerData } = useCustomerDetail(params.id);


    const router = useRouter();

    useEffect(() => {
        if (isCustomerUpdated) {
            toast.success(`Customer ${params.id} updated successfully!`);
            router.push("/");
        }
    }, [isCustomerUpdated])

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">UPDATE CUSTOMER {params.id}</h1>
            <CustomerForm handler={handleUpdateCustomer} customer={customerData} id={params.id} />
        </div>
    )
}
