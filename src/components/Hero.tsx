import type { MouseEvent } from 'react';
import Navbar from '@/components/Navbar';

function scrollToMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-brand-brown">
      <img
        src="https://images.pexels.com/photos/19252265/pexels-photo-19252265.jpeg?auto=compress&cs=tinysrgb&h=1400&w=2400"
        alt="Close-up of a cappuccino with latte art on a wooden table"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/70 via-brand-brown/55 to-brand-brown/85" />
      <Navbar />
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-16 pt-24 text-center text-brand-cream sm:px-8">
        <h1 className="animate-fade-up font-serif text-6xl font-semibold leading-[1.05] sm:text-7xl md:text-8xl">
          Small Batch, Big Heart
        </h1>
        <p className="animate-fade-up-delay mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-cream/85 sm:text-lg">
          Neighborhood coffee in Tallinn
        </p>
        <div className="animate-fade-up-delay mt-10">
          <a
            href="#menu"
            onClick={scrollToMenu}
            className="inline-flex items-center rounded-full bg-brand-cream px-8 py-3.5 text-sm font-semibold text-brand-brown shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
          >
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}
