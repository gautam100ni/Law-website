import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { legalAwarenessCategories } from "../data/legalAwareness";

export default function LegalAwarenessPage() {
  return (
    <>
      <SeoHead title="Legal Advice" description="General legal-awareness articles from Akhawat Law Firm." />
      <section className="section-shell py-12 lg:py-20">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Legal Advice</p>
          <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">Read practical legal information, organised by area of law.</h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">Explore concise educational articles designed to help visitors understand common legal concepts before seeking advice on their specific matter.</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {legalAwarenessCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 60}>
              <Link to={`/legal-awareness/${category.slug}`} className="group block h-full rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a23b] hover:shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-serif text-2xl text-stone-900">{category.title}</h2>
                  <span className="text-xs font-semibold text-[#9b6d16]">{category.readTime}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-stone-700">{category.description}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-[#9b6d16] transition-transform group-hover:translate-x-1">Read article →</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160} className="mt-10 border-l-2 border-[#c9a23b] bg-[#fbf7ee] p-6 text-sm leading-7 text-stone-700">
          These articles are for general informational and educational purposes only. They are not specific legal advice and do not create an advocate-client relationship. Laws and procedures can change, and the facts of an individual matter may materially affect the position.
        </Reveal>
      </section>
    </>
  );
}
