import React from 'react';
import abhishekPhoto from "../assets/abhishek-akhawat-cropped.jpg";

export default function ManagingDirector() {
  return (
    <section className="bg-white/70 py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-[2rem] border border-stone-200 bg-stone-100 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
          <img
            src={abhishekPhoto}
            alt="Advocate Abhishek Akhawat"
            className="w-full h-auto rounded-[1.5rem]"
            loading="lazy"
          />
        </div>

        <div>
          <p className="eyebrow">Managing Director</p>
          <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
            Advocate Abhishek Akhawat
          </h2>
          <p className="mt-2 text-base font-semibold uppercase tracking-[0.25em] text-[#9b6d16]">
            Managing Director, Akhawat Law Firm
          </p>

          <div className="gold-line mt-6" />

          <p className="mt-6 text-base leading-8 text-stone-700">
            With a strong foundation in legal research, constitutional law, litigation strategy, and persuasive advocacy, I provide strategic and effective legal representation across complex civil, criminal, constitutional, and technology-related matters.
          </p>

          <p className="mt-4 text-base leading-8 text-stone-700">
            My areas of practice include Cyber Law & Cyber Crime, Custodial Death Matters, Habeas Corpus and Protection Petitions, Civil & Criminal Writs, Civil Revisions, Bail and Anticipatory Bail, FIR Quashing, Criminal Appeals & Revisions, MACT Claims, Property & Land Disputes, Commercial & Recovery Matters, Consumer Disputes, Matrimonial & Family Matters, and other civil and criminal litigation.
          </p>
        </div>
      </div>
    </section>
  );
}
