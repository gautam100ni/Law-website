import React from 'react';
import SeoHead from "../components/SeoHead";

export default function TermsConditions() {
  return (
    <>
      <SeoHead
        title="Terms & Conditions"
        description="Terms and conditions for accessing the Akhawat Law Firm website."
      />

      <section className="section-shell py-12 lg:py-20">
        <p className="eyebrow">Terms & Conditions</p>
        <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
          Terms & Conditions
        </h1>

        <div className="mt-8 space-y-6">
          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">Website Use</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              The website is intended for general informational and educational purposes only and must not be used for unlawful or abusive purposes.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">No Legal Advice</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              The content on this website should not be construed as legal advice in relation to any specific matter.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-stone-200 bg-white p-8 shadow-sm">
            <h2 className="font-serif text-2xl text-stone-900">No Advocate-Client Relationship</h2>
            <p className="mt-3 text-base leading-8 text-stone-700">
              Accessing this website or contacting the firm does not, by itself, create an advocate-client relationship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}