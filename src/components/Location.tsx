import { ArrowUpRight, MapPin } from 'lucide-react';

const MAPS_URL = 'https://maps.google.com/?q=Tallinn+Estonia';

export default function Location() {
  return (
    <section id="location" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-brown-soft">Find us</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.2] text-brand-brown sm:text-5xl">
            Come say hello
          </h2>
        </div>

        <div className="group relative mt-12 overflow-hidden rounded-3xl border-2 border-brand-brown shadow-xl shadow-brand-brown/15">
          <img
            src="https://images.pexels.com/photos/2514002/pexels-photo-2514002.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1600"
            alt="Aerial view of the city streets and waterfront"
            loading="lazy"
            className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/90 via-brand-brown/40 to-brand-brown/10" />

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-6 p-6 text-brand-cream sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cream text-brand-brown">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-serif text-2xl font-semibold">Brew Corner</p>
                <p className="mt-1 text-brand-cream/85">Street address, Tallinn, Estonia</p>
              </div>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-cream px-6 py-3 text-sm font-semibold text-brand-brown shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Open in Google Maps
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
