import React from 'react';
import SeoHead from "../components/SeoHead";

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead
        title="Privacy Policy"
        description="Privacy policy for Akhawat Law Firm website."
      />

      <section className="section-shell py-12 lg:py-20">
        <p className="eyebrow">Privacy Policy</p>
        <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-8 space-y-6">
          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">Information Collected</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              Through consultation and contact forms, we may collect your name, phone number, email address, the legal matter, and message.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">Purpose</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              Your information may be used to respond to enquiries, coordinate consultations, and improve the website experience.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">Data Security</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              Appropriate technical and organisational safeguards should be implemented on the server side, and sensitive information should be handled responsibly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}