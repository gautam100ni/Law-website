import React from 'react';
import SeoHead from "../components/SeoHead";
import { teamMembers } from "../data/team";
import BrandImage from "../components/BrandImage";
import Reveal from "../components/Reveal";
import abhishekPhoto from "../assets/abhishek-akhawat-cropped.jpg";

export default function TeamPage() {
  return (
    <>
      <SeoHead
        title="Our Team"
        description="Meet the professionals at Akhawat Law Firm."
      />

      <section className="section-shell py-12 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={80} duration={800} withScale className="rounded-[2rem] border border-stone-200 bg-[#f4ebda] p-3 shadow-[0_16px_45px_rgba(15,23,42,0.05)]">
            <BrandImage
              src={abhishekPhoto}
              alt="Advocate Abhishek Akhawat"
              className="w-full h-auto rounded-[1.5rem]"
              fallbackClassName="flex w-full items-center justify-center rounded-[1.5rem] bg-white"
            />
          </Reveal>

          <Reveal delay={160} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div>
              <p className="eyebrow">Team</p>
              <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
                Advocate Abhishek Akhawat
              </h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#9b6d16]">
                Managing Director, Akhawat Law Firm
              </p>

              <div className="gold-line mt-6" />

              <p className="mt-6 text-base leading-8 text-stone-800">
                With a strong foundation in legal research, constitutional law, litigation strategy, and persuasive advocacy, I provide strategic and effective legal representation across complex civil, criminal, constitutional, and technology-related matters.
              </p>

              <p className="mt-4 text-base leading-8 text-stone-800">
                My areas of practice include Cyber Law & Cyber Crime, Custodial Death Matters, Habeas Corpus and Protection Petitions, Civil & Criminal Writs, Civil Revisions, Bail and Anticipatory Bail, FIR Quashing, Criminal Appeals & Revisions, MACT Claims, Property & Land Disputes, Commercial & Recovery Matters, Consumer Disputes, Matrimonial & Family Matters, and other civil and criminal litigation.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {teamMembers.map((member, index) => (
                  <Reveal key={member.name} delay={index * 120} className="h-full">
                    <div className="h-full rounded-[1.4rem] border border-stone-200 bg-[#fbf7ee] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold text-stone-900">
                        {member.image ? (
                          <img src={member.image} alt="" className="h-full w-full rounded-full object-cover" />
                        ) : (
                          member.initials
                        )}
                      </div>
                      <h2 className="mt-4 font-serif text-xl text-stone-900">{member.name}</h2>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-[#9b6d16]">
                        {member.role}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
