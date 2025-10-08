export default function Footer() {
  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8 bg-black/80 backdrop-blur-xl border-t border-white/10"
      role="contentinfo"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-gray-500 text-base">
            © {new Date().getFullYear()} Dennes Kohl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
