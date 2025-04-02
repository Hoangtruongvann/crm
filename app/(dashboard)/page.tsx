'use client';
import Link from "next/link";
import { CustomerRow } from "./components";
import TableFooter from "../_components/TableFooter";
import { useState } from "react";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const customers = [
        {
            name: "John Doe",
            email: "johndoe@gmail",
            phone: "1234567890",
            address: "123 Main St, Anytown, USA",
            status: "Active",
            lastContacted: "2 days ago",
            actions: "Edit | Delete"
        },
        {
            name: "John Doe",
            email: "johndoe@gmail",
            phone: "1234567890",
            address: "123 Main St, Anytown, USA",
            status: "Active",
            lastContacted: "2 days ago",
            actions: "Edit | Delete"
        }
    ];

    const onDelete = (index: number) => {

    }

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">DASHBOARD</h1>
            <div className="relative w-full">
                <img src='/search.svg' className="absolute top-4 left-3 w-4" />
                <input type="text" placeholder="Search...." className="border border-gray-300 rounded-xl p-3 pl-8 focus:outline-none focus:border-main-purple text-sm placeholder:text-gray-500 text-black w-full" />
            </div>
            <Link href='/customer/create' className="bg-main-blue-light text-white py-3 font-bold px-6 rounded-xl block w-fit text-sm">New Customer</Link>
            <div className="bg-white rounded-xl py-6 space-y-6">
                <div className="min-h-[752px]">
                    <table className="w-full">
                        <thead className="mb-4">
                            <tr className="text-gray-400 text-left text-base">
                                <th className="p-4">Name</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Phone</th>
                                <th className="p-4">Address</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Last Contacted</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers.map((customer, index) => (
                                    <CustomerRow key={index} customer={customer} index={index} onDelete={onDelete} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <TableFooter totalPages={50} currentPage={currentPage} setCurrentPage={setCurrentPage} perPage={10} />
            </div>
        </div>
    )
}
