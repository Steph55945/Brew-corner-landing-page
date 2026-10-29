import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-brown text-brand-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-16 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-3xl font-semibold">Brew Corner, Tallinn</p>
          <p className="mt-2 text-sm tracking-wide text-brand-cream/70">Open daily</p>
        </div>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Brew Corner on Instagram"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-cream/30 text-brand-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-brown"
        >
          <Instagram className="h-5 w-5" aria-hidden="true" />
        </a>
        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:gap-8">
          <a href="mailto:hello@brewcorner.ee" className="inline-flex items-center justify-center gap-2 text-brand-cream/90 transition-colors hover:text-white">
            <Mail className="h-4 w-4" aria-hidden="true" />
            hello@brewcorner.ee
          </a>
          <a href="tel:+3725550000" className="inline-flex items-center justify-center gap-2 text-brand-cream/90 transition-colors hover:text-white">
            <Phone className="h-4 w-4" aria-hidden="true" />
            +372 555 0000
          </a>
        </div>
      </div>
      <div className="border-t border-brand-cream/15">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-xs text-brand-cream/60 sm:px-8">
          © {new Date().getFullYear()} Brew Corner. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
