import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#F1F2F3]">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 md:p-6 space-y-6">{children}</div>
        </main>

        {/* Footer */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}
