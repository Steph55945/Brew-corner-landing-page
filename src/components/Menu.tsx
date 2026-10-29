const menuItems = [
  { name: 'Espresso', price: 3 },
  { name: 'Americano', price: 3.5 },
  { name: 'Latte', price: 4.5 },
  { name: 'Cappuccino', price: 4.5 },
  { name: 'Croissant', price: 3 },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-brand-cream-deep py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-brown-soft">Our menu</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.2] text-brand-brown sm:text-5xl">
            Everyday favorites
          </h2>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="group flex items-center justify-between rounded-2xl border border-brand-brown/10 bg-brand-cream px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-brown/25 hover:shadow-lg hover:shadow-brand-brown/10"
            >
              <span className="font-serif text-xl font-semibold text-brand-brown">{item.name}</span>
              <span className="text-lg font-semibold text-black transition-colors group-hover:text-brand-accent">
                ${item.price % 1 === 0 ? item.price.toFixed(0) : item.price.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
