import React from 'react';
import { practiceAreas } from "../data/practiceAreas";
import Reveal from "./Reveal";

export default function PracticeAreas() {
  return (
    <section className="section-shell py-16 lg:py-24">
      <div className="max-w-3xl">
        <p className="eyebrow">Practice Areas</p>
        <h2 className="mt-3 section-title">
          Focused legal representation across complex matters.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {practiceAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 120} className="h-full">
            <article className="group h-full rounded-[1.6rem] border border-stone-200 bg-white p-7 shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c9a23b] hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f4e8c7] text-xl text-[#9b6d16]">
                {area.icon}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-stone-900">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-700">{area.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}