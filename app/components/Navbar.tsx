"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">

        <span className="text-sm font-medium tracking-tight">
          SM
        </span>

        <nav className="flex gap-8 text-sm text-neutral-400">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </nav>

      </div>
    </header>
  );
}
