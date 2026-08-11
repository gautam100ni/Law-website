import React from 'react';
import SeoHead from "../components/SeoHead";
import BrandImage from "../components/BrandImage";
import Reveal from "../components/Reveal";
import abhishekPhoto from "../assets/abhishek-akhawat-cropped.jpg";

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us"
        description="Learn about the philosophy, values, and purpose of Akhawat Law Firm."
      />

      <section className="section-shell py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={80} duration={800} withScale className="rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_16px_45px_rgba(15,23,42,0.05)]">
            <BrandImage
              src={abhishekPhoto}
              alt="Advocate Abhishek Akhawat"
              className="w-full h-auto rounded-[1.5rem]"
              fallbackClassName="flex w-full items-center justify-center rounded-[1.5rem] bg-white"
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={60}>
              <div>
                <p className="eyebrow">About Us</p>
                <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
                  Founded on legal awareness, integrity, and access to justice.
                </h1>
              </div>
            </Reveal>

            <Reveal delay={180} className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
              <h2 className="font-serif text-2xl text-stone-900">Our Philosophy</h2>
              <p className="mt-3 text-base leading-8 text-stone-800">
                Akhawat Law Firm is founded upon the belief that access to justice and an understanding of the law should not be determined by economic disadvantage, social background, or any other form of constraint.
              </p>
            </Reveal>

            <Reveal delay={260} className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
              <h2 className="font-serif text-2xl text-stone-900">Our Purpose</h2>
              <p className="mt-3 text-base leading-8 text-stone-800">
                Our purpose is to contribute, within the framework of law and professional ethics, towards making legal awareness more accessible to every person, enabling them to better understand their rights, duties, and lawful remedies.
              </p>
            </Reveal>

            <Reveal delay={340} className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
              <h2 className="font-serif text-2xl text-stone-900">Core Values</h2>
              <p className="mt-3 text-base leading-8 text-stone-800">
                Integrity, objectivity, legal awareness, confidentiality, constitutional values, and respect for the rule of law.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
