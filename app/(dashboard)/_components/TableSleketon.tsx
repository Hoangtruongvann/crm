export default function tableSleketon() {
    return <>
        {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="animate-pulse border-b border-gray-200 text-sm">
                <td className="p-4">
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4">
                    <div className="h-4 w-32 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4">
                    <div className="h-4 w-28 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4">
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4">
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4">
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </td>
                <td className="p-4 flex gap-2">
                    <div className="h-8 w-16 bg-gray-300 rounded-xl"></div>
                    <div className="h-8 w-16 bg-gray-300 rounded-xl"></div>
                </td>
            </tr>
        ))}
    </>
}
