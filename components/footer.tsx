export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-4 md:px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-xs text-gray-500">
          © 2024 TAHWUL. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-500">
          <a href="#" className="hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}
