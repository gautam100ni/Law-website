import { Link, useParams } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import { legalAwarenessCategories } from "../data/legalAwareness";

export default function LegalAwarenessCategoryPage() {
  const { slug } = useParams();
  const category = legalAwarenessCategories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <section className="section-shell py-12 lg:py-20">
        <p className="eyebrow">Legal Advice</p>
        <h1 className="mt-3 font-serif text-4xl text-stone-900">Article not found.</h1>
        <Link to="/legal-awareness" className="mt-6 inline-block text-sm font-semibold text-[#9b6d16]">Back to Legal Advice</Link>
      </section>
    );
  }

  return (
    <>
      <SeoHead title={`${category.title} | Legal Advice`} description={category.description} />
      <section className="section-shell py-12 lg:py-20">
        <Reveal className="mx-auto max-w-4xl">
          <p className="eyebrow">Legal Advice · {category.readTime}</p>
          <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-6xl">{category.title}</h1>
          <p className="mt-5 text-lg leading-8 text-stone-700">{category.description}</p>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-4xl rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
          <div className="space-y-7">
            {category.article.map((paragraph, index) => (
              <p key={index} className="text-base leading-8 text-stone-800">{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-stone-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Important</p>
            <p className="mt-2 text-sm leading-7 text-stone-700">This article is general legal information, not case-specific legal advice. For an individual matter, submit an inquiry so the firm can review the relevant facts and documents.</p>
            <Link to="/contact" className="mt-5 inline-flex rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-yellow-500">INQUIRY NOW</Link>
          </div>
        </Reveal>

        <Reveal delay={160} className="mx-auto mt-8 max-w-4xl">
          <Link to="/legal-awareness" className="text-sm font-semibold text-[#9b6d16] hover:underline">← Back to Legal Advice</Link>
        </Reveal>
      </section>
    </>
  );
}
