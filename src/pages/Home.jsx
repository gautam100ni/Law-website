import React from 'react';
import PracticeAreas from '../components/PracticeAreas';
import { Link } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import BrandImage from "../components/BrandImage";
import Reveal from "../components/Reveal";
import abhishekPhoto from "../assets/abhishek-akhawat-cropped.jpg";
import heroImage from "../assets/hero-legal-4k.jpg";
import aboutImage from "../assets/about-legal-4k.jpg";

const principles = [
  {
    title: "Legal Awareness",
    body: "A firm rooted in clarity, informed decision-making, and a commitment to helping clients understand their rights and remedies."
  },
  {
    title: "Integrity",
    body: "Work guided by professional ethics, responsibility, and a principled approach to advocacy."
  },
  {
    title: "Confidentiality",
    body: "Matters are approached with discretion, sensitivity, and respect for the private nature of legal concerns."
  },
  {
    title: "Responsible Advocacy",
    body: "A calm, structured approach that prioritises fairness, purpose, and procedural discipline."
  }
];

export default function Home() {
  return (
    <>
      <SeoHead
        title="Home"
        description="Akhawat Law Firm offers trusted legal awareness, strategic advocacy, and dedicated support across civil, criminal, constitutional, and technology-related matters."
      />

      <section className="section-shell py-12 lg:py-20">
        <div className="grid items-center gap-10 rounded-[2.2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <Reveal delay={60} className="max-w-2xl">
            <div>
              <p className="eyebrow">Akhawat Law Firm</p>
              <h1 className="mt-4 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Justice Delivered.
                <br />
                Rights Protected.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-800">
                Akhawat Law Firm provides trusted legal awareness, strategic advocacy, and dedicated support across civil, criminal, constitutional, and emerging technology-related matters.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-full bg-[#c9a23b] px-6 py-3 text-sm font-semibold text-stone-950 transition-colors duration-200 ease-out hover:bg-[#b68616]"
                >
                  INQUIRY NOW
                </Link>
                <Link
                  to="/services"
                  className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition-colors duration-200 ease-out hover:border-[#c9a23b] hover:text-[#9b6d16]"
                >
                  Explore Practice Areas
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140} duration={800} withScale className="w-full">
            <div className="hero-image-shell overflow-hidden rounded-[1.8rem] bg-[#f4ebda] p-2 sm:p-3">
              <BrandImage
                src={heroImage}
                alt="Scales of justice, gavel, and law books representing the practice of law"
                className="h-[430px] w-full rounded-[1.4rem] object-cover sm:h-[520px]"
                fallbackClassName="flex h-[430px] w-full items-center justify-center rounded-[1.4rem] bg-white sm:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-8">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[#fbf7ee]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal delay={80} duration={800} withScale className="w-full">
              <div className="about-image-shell h-[260px] w-full lg:h-full">
                <BrandImage
                  src={aboutImage}
                  alt="Law books and scales of justice on a desk"
                  className="h-[260px] w-full object-cover lg:h-full"
                  fallbackClassName="h-[260px] w-full bg-[#f0e6cf] lg:h-full"
                />
              </div>
            </Reveal>
            <Reveal delay={140} className="p-8 lg:p-10">
              <div>
                <p className="eyebrow">About the Firm</p>
                <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
                  Founded on legal awareness, integrity, and access to justice.
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-800">
                  Akhawat Law Firm is dedicated to contributing meaningfully to legal awareness and access to justice by making legal information more comprehensible, accessible, and relevant to the wider public.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PracticeAreas />

      <section className="section-shell py-8 lg:py-16">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_10px_36px_rgba(15,23,42,0.05)]">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal delay={80} className="bg-[#f4ebda] p-8 lg:p-10">
              <div>
                <BrandImage
                  src={abhishekPhoto}
                  alt="Advocate Abhishek Akhawat"
                  className="w-full h-auto rounded-[1.5rem]"
                  fallbackClassName="flex w-full items-center justify-center rounded-[1.5rem] bg-white"
                />
              </div>
            </Reveal>

            <Reveal delay={160} className="p-8 lg:p-10">
              <div>
                <p className="eyebrow">Advocate Profile</p>
                <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
                  Advocate Abhishek Akhawat
                </h2>
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
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-shell py-8 lg:py-16">
        <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-[0_10px_36px_rgba(15,23,42,0.05)] lg:p-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
              A practice grounded in disciplined advocacy and professional responsibility.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 120} className="h-full">
                <div className="h-full rounded-[1.4rem] border border-stone-200 bg-[#fbf7ee] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
                  <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#9b6d16]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-4 font-serif text-2xl text-stone-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-800">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-8">
        <Reveal delay={80} className="rounded-[2rem] border border-stone-200 bg-[#131313] p-8 text-stone-100 lg:p-10">
          <div>
            <p className="eyebrow text-[#c9a23b]">Consultation</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-50 sm:text-4xl">
              Schedule a confidential consultation with experienced legal counsel.
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-[#c9a23b] px-6 py-3 text-sm font-semibold text-stone-950 transition-colors duration-200 ease-out hover:bg-[#b68616]"
              >
                Contact the Firm
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-200 transition-colors duration-200 ease-out hover:border-[#c9a23b] hover:text-[#c9a23b]"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
