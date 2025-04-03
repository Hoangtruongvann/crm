'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import { CustomerRow, TableSleketon } from "./_components";
import TableFooter from "@/app/_components/TableFooter";
import { useCustomers } from "@/app/_hooks";
import { Customer } from "@/app/_interfaces";

export default function Page() {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const { customersTableData, isCustomersLoading } = useCustomers({ page: currentPage, limit: 10, search: debouncedSearch });


    useEffect(() => {
        // Set a timeout to update debounced search value after 3 seconds
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
        }, 3000);

        // Cleanup function to clear timeout if user types before 3 seconds
        return () => clearTimeout(handler);
    }, [search]);

    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch]);

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-3xl font-bold text-black">DASHBOARD</h1>
            <div className="relative w-full">
                <img src='/search.svg' className="absolute top-4 left-3 w-4" />
                <input type="text" placeholder="Search...." value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && setDebouncedSearch(search)} className="border border-gray-300 rounded-xl p-3 pl-8 focus:outline-none focus:border-main-purple text-sm placeholder:text-gray-500 text-black w-full" />
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
                            {isCustomersLoading ?
                                <TableSleketon />
                                :
                                customersTableData.customers.map((customer: Customer, index: number) => (
                                    <CustomerRow key={index} customer={customer} index={index} onDelete={(index: number) => { }} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {!isCustomersLoading &&
                    <TableFooter totalPages={customersTableData.totalPages} totalItems={customersTableData.totalItems} currentPage={currentPage} setCurrentPage={setCurrentPage} perPage={10} />
                }
            </div>
        </div>
    )
}
