import { Clock } from 'lucide-react';

type DayHours = { label: string; display: string; openHour: number; closeHour: number; weekdays: number[] };

const schedule: DayHours[] = [
  { label: 'Monday to Friday', display: '8am - 6pm', openHour: 8, closeHour: 18, weekdays: [1, 2, 3, 4, 5] },
  { label: 'Saturday and Sunday', display: '9am - 5pm', openHour: 9, closeHour: 17, weekdays: [6, 0] },
];

const TALLINN_TZ = 'Europe/Tallinn';

function getTallinnClock(): { weekday: number; hour: number } {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: TALLINN_TZ,
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date());
  const weekdayName = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0);
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(weekdayName);
  return { weekday, hour };
}

function isOpenNow(entry: DayHours, weekday: number, hour: number): boolean {
  if (!entry.weekdays.includes(weekday)) return false;
  return hour >= entry.openHour && hour < entry.closeHour;
}

export default function OpeningHours() {
  const { weekday, hour } = getTallinnClock();

  return (
    <section id="hours" className="bg-brand-brown py-20 text-brand-cream sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-cream/70">Opening hours</p>
        <h2 className="mt-4 font-serif text-4xl font-semibold leading-[1.2] sm:text-5xl">We are open daily</h2>
        <ul className="mt-12 divide-y divide-brand-cream/15 rounded-3xl border border-brand-cream/15 bg-brand-brown-soft/40 text-left">
          {schedule.map((entry) => {
            const openNow = isOpenNow(entry, weekday, hour);
            const isToday = entry.weekdays.includes(weekday);
            return (
              <li key={entry.label} className="flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                  <span className="font-serif text-xl font-semibold">{entry.label}</span>
                  {isToday && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        openNow ? 'bg-emerald-200 text-emerald-950' : 'bg-brand-cream/15 text-brand-cream'
                      }`}
                    >
                      {openNow ? 'Open now' : 'Closed now'}
                    </span>
                  )}
                </div>
                <span className="text-lg text-brand-cream/90 sm:text-right">
                  {entry.display}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
