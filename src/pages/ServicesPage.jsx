import React from 'react';
import SeoHead from "../components/SeoHead";
import PracticeAreas from "../components/PracticeAreas";
import Reveal from "../components/Reveal";

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title="Services"
        description="Explore the legal practice areas handled by Akhawat Law Firm."
      />

      <section className="section-shell py-12 lg:py-20">
        <Reveal delay={60} className="max-w-3xl">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
              Wide-ranging legal support across civil, criminal, constitutional, and technology-related matters.
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-700">
              The firm approaches each matter with careful reasoning, procedural discipline, and a commitment to professional standards.
            </p>
          </div>
        </Reveal>

        <PracticeAreas />
      </section>
    </>
  );
}