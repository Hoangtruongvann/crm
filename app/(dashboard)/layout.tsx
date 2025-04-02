import { Navbar, Sidebar } from "@/app/_layouts";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-nowrap min-h-screen">
            <Sidebar />
            <div className="w-[calc(100%-256px)]">
                <Navbar />
                {children}
            </div>
        </div>
    )
}
