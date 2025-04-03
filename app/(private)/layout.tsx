import { Navbar, Sidebar } from "@/app/_layouts";
import { AuthProvider } from "../_contexts";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <AuthProvider>
            <div className="flex flex-nowrap min-h-screen">
                <Sidebar />
                <div className="w-[calc(100%-256px)]">
                    <Navbar />
                    {children}
                </div>
            </div>
        </AuthProvider>
    )
}
