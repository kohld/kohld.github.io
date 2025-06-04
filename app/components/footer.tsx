export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Dennes Kohl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

