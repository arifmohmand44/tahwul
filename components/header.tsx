import { Search, Menu } from "lucide-react";
import ProfileDropdown from "./ui/toggle-dropdown";
import NotificationDropdown from "./ui/notification";

export default function Header({
  onMobileMenuToggle,
}: {
  onMobileMenuToggle: () => void;
}) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow">
      {/* Mobile Hamburger Button */}
      <button
        onClick={onMobileMenuToggle}
        className="md:hidden flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        <Menu size={24} className="text-gray-600" />
      </button>

      <div className="flex-1 max-w-md pl-4 lg:pl-10">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-3 bg-[#F5F8FA] border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center pl-4 gap-4">
        {/* Notification */}
        <NotificationDropdown />

        {/* Profile */}
        <ProfileDropdown
          name="Mohamed"
          photo="avatar.jpg"
        />
      </div>
    </header>
  );
}
