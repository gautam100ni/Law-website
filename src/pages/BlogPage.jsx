import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";

export default function BlogPage() {
  return <><SeoHead title="Blog" description="Legal articles and updates from Akhawat Law Firm." /><section className="section-shell py-12 lg:py-20"><Reveal className="max-w-3xl"><p className="eyebrow">Blog</p><h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">Legal articles and updates.</h1></Reveal><Reveal delay={100} className="mt-10 border-y border-stone-200 bg-white px-6 py-14 text-center sm:px-10"><p className="font-serif text-2xl text-stone-900">Articles will be published here in the future.</p><p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-stone-700">This section is ready for legal articles and updates from Akhawat Law Firm.</p></Reveal></section></>;
}
