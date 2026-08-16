import { Link, useParams } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import { legalAwarenessCategories } from "../data/legalAwareness";

export default function LegalAwarenessCategoryPage() {
  const { slug } = useParams();
  const category = legalAwarenessCategories.find((item) => item.slug === slug);
  if (!category) return <section className="section-shell py-12 lg:py-20"><p className="eyebrow">Legal Awareness</p><h1 className="mt-3 font-serif text-4xl text-stone-900">Category not found.</h1><Link to="/legal-awareness" className="mt-6 inline-block text-sm font-semibold text-[#9b6d16]">Back to Legal Awareness</Link></section>;
  return <><SeoHead title={category.title} description={category.description} /><section className="section-shell py-12 lg:py-20"><Reveal className="max-w-3xl"><p className="eyebrow">Legal Awareness</p><h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">{category.title}</h1><p className="mt-5 text-lg leading-8 text-stone-700">{category.description}</p></Reveal><Reveal delay={100} className="mt-10 border-y border-stone-200 bg-white px-6 py-14 text-center sm:px-10"><p className="font-serif text-2xl text-stone-900">Articles will be added here in the future.</p></Reveal><Reveal delay={160} className="mt-10 border-l-2 border-[#c9a23b] bg-[#fbf7ee] p-6 text-sm leading-7 text-stone-700">Content on this page is for general informational and educational purposes only. It is not specific legal advice, and accessing it does not create an advocate-client relationship.</Reveal></section></>;
}
