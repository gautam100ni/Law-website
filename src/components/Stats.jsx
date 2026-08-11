import React from 'react';

export default function Stats() {
  return (
    <section className="border-y border-stone-200 bg-white/70">
      <div className="section-shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow">Legal Representation</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
              Dedicated to access to justice, legal awareness, and principled advocacy.
            </h2>
          </div>

          <div className="soft-panel px-6 py-8">
            <div className="flex flex-wrap items-end gap-3">
              <span className="font-serif text-5xl text-stone-900 sm:text-6xl">1000+</span>
              <span className="pb-2 text-sm font-semibold uppercase tracking-[0.2em] text-stone-600">
                Cases Handled
              </span>
            </div>
            <div className="gold-line mt-4" />
            <p className="mt-4 text-sm leading-7 text-stone-700">
              Our work is guided by legal awareness, professional ethics, confidentiality, and a commitment to client rights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}