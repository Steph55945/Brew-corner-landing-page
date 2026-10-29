import { Coffee } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#hours', label: 'Hours' },
  { href: '#location', label: 'Visit' },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-brand-cream">
          <Coffee className="h-6 w-6" aria-hidden="true" />
          <span className="font-serif text-xl font-semibold tracking-tight">Brew Corner</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-brand-cream/90 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#menu"
          className="rounded-full border border-brand-cream/60 px-4 py-2 text-sm font-medium text-brand-cream transition-colors hover:bg-brand-cream hover:text-brand-brown md:hidden"
        >
          Menu
        </a>
      </nav>
    </header>
  );
}
