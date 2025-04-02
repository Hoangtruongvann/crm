import Link from "next/link";
import { CustomerRowProps } from "./interfaces";

export default function CustomerRow({ customer, index, onDelete }: CustomerRowProps) {
    return (
        <tr className="pb-3 mb-5 border-b border-gray-200 text-sm" key={index}>
            <td className="p-4">{customer.name}</td>
            <td className="p-4">{customer.email}</td>
            <td className="p-4">{customer.phone}</td>
            <td className="p-4">{customer.address}</td>
            <td className="p-4">{customer.status}</td>
            <td className="p-4">{customer.lastContacted}</td>
            <td className="p-4 flex gap-2 ">
                <Link href={`/customer/${index}`} className="bg-transparent border-main-purple text-main-purple py-2 px-4 rounded-xl">Edit</Link>
                <button onClick={() => onDelete(index)} className="bg-red-600 text-white py-2 px-4 rounded-xl cursor-pointer">Delete</button>
            </td>
        </tr>
    )
}
