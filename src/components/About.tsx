export default function About() {
  return (
    <section id="about" className="bg-brand-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        <div className="overflow-hidden rounded-3xl shadow-xl shadow-brand-brown/10">
          <img
            src="https://images.pexels.com/photos/16541078/pexels-photo-16541078.jpeg?auto=compress&cs=tinysrgb&h=900&w=760"
            alt="Barista pouring frothy milk into a cup of espresso"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-brown-soft">About us</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.2] text-brand-brown sm:text-5xl">
            A small counter with a big love for coffee.
          </h2>
          <p className="mt-6 text-base leading-[1.5] text-black/80 sm:text-lg">
            Brew Corner started as a tiny counter with one espresso machine and a simple idea: roast in small batches and treat every cup like it matters. Today we still pour every drink by hand, bake our croissants each morning, and know most of our regulars by name.
          </p>
        </div>
      </div>
    </section>
  );
}
