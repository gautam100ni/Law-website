import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import { Link } from "react-router-dom";
import { legalAwarenessCategories } from "../data/legalAwareness";

export default function LegalAwarenessPage() {
  return <><SeoHead title="Legal Awareness" description="General legal awareness resources from Akhawat Law Firm." /><section className="section-shell py-12 lg:py-20"><Reveal className="max-w-3xl"><p className="eyebrow">Legal Awareness</p><h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">General legal information, organised by area of law.</h1><p className="mt-5 text-lg leading-8 text-stone-700">Educational resources will be added to these categories as they become available.</p></Reveal><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{legalAwarenessCategories.map((category, index) => <Reveal key={category.slug} delay={index * 60}><Link to={`/legal-awareness/${category.slug}`} className="block h-full border border-stone-200 bg-white px-5 py-4 transition hover:border-[#c9a23b]"><h2 className="font-serif text-xl text-stone-900">{category.title}</h2><p className="mt-2 text-sm leading-6 text-stone-700">{category.description}</p></Link></Reveal>)}</div><Reveal delay={160} className="mt-10 border-l-2 border-[#c9a23b] bg-[#fbf7ee] p-6 text-sm leading-7 text-stone-700">Content on this page is for general informational and educational purposes only. It is not specific legal advice, and accessing it does not create an advocate-client relationship.</Reveal></section></>;
}
