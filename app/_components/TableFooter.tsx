import { useEffect, useState } from "react";
import { TableFooterProps } from "./interfaces"
export default function TableFooter({ totalPages, currentPage, setCurrentPage, perPage }: TableFooterProps) {

    const [pageNumbers, setPageNumbers] = useState<(number | string)[]>([]);
    const setUpPageNumber = () => {
        const pageNumbers: (number | string)[] = [];
        if (totalPages <= 9) {
            // Nếu tổng số trang nhỏ hơn hoặc bằng 8, hiển thị tất cả
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1); // Luôn có trang đầu

            if (currentPage <= 5) {
                // Hiển thị đầu danh sách: 1 2 3 4 5 ... n-1 n
                for (let i = 2; i <= 6; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(totalPages - 1);
            } else if (currentPage >= totalPages - 5) {
                // Hiển thị cuối danh sách: 1 ... n-4 n-3 n-2 n-1 n
                pageNumbers.push("...");
                for (let i = totalPages - 6; i < totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                // Hiển thị giữa danh sách: 1 ... k-2 k-1 k k+1 k+2 ... n
                pageNumbers.push("...");
                pageNumbers.push(currentPage - 2);
                pageNumbers.push(currentPage - 1);
                pageNumbers.push(currentPage);
                pageNumbers.push(currentPage + 1);
                pageNumbers.push(currentPage + 2);
                pageNumbers.push("...");
            }

            pageNumbers.push(totalPages); // Luôn có trang cuối
        }
        return pageNumbers;
    }


    useEffect(() => {
        setPageNumbers(setUpPageNumber());
        setCurrentPage(1);
    },
        [totalPages, perPage]
    )

    return (
        <div className="flex justify-between w-full gap-4 px-6">
            <p className="text-gray-600">Showing {(perPage * currentPage) - perPage + 1} to {10 * currentPage} of {totalPages * 10} entries</p>
            <div className="border border-gray-300 rounded-sm flex overflow-hidden bg-zinc-100 text-sm">
                <div className="border-r border-gray-300 cursor-pointer flex items-center justify-center px-3.5 py-2 hover:bg-main-purple hover:text-white paginater-next-prev">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 0.292893C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976311 5.31658 -0.0976311 5.70711 0.292893Z" fill="#71717A" />
                    </svg>
                </div>
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        className={`px-3.5 py-2 border-r border-gray-300 ${page === currentPage ? "bg-main-purple text-white" : "text-black"} ${page !== "..." && 'hover:bg-main-purple hover:text-white cursor-pointer'}`}
                        onClick={() => typeof page === "number" && setCurrentPage(page)}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}
                <div className="cursor-pointer flex items-center justify-center px-3.5 py-2 hover:bg-main-purple hover:text-white paginater-next-prev">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 0.292893C6.09763 0.683417 6.09763 1.31658 5.70711 1.70711L2.41421 5L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893C4.68342 -0.0976311 5.31658 -0.0976311 5.70711 0.292893Z" fill="#71717A" />
                    </svg>
                </div>

            </div>
        </div>
    )
}
