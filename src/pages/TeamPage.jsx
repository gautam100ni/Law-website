import SeoHead from "../components/SeoHead";
import { teamMembers } from "../data/team";
import BrandImage from "../components/BrandImage";
import Reveal from "../components/Reveal";

const abhishekBio = "With a strong foundation in legal research, constitutional law, litigation strategy, and persuasive advocacy, I provide strategic and effective legal representation across complex civil, criminal, constitutional, and technology-related matters.";

export default function TeamPage() {
  return (
    <>
      <SeoHead
        title="Our Lawyers"
        description="Meet the advocates and legal professionals at Akhawat Law Firm."
      />

      <section className="section-shell py-12 lg:py-20">
        <Reveal className="max-w-3xl"><p className="eyebrow">Our Lawyers</p><h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">Find the right advocate for your matter.</h1><p className="mt-5 text-lg leading-8 text-stone-700">Meet the advocates and legal professionals of Akhawat Law Firm.</p></Reveal>
        <div className="mt-10 grid gap-7 lg:grid-cols-2">
          {teamMembers.map((member, index) => <Reveal key={member.id} delay={index * 90} className="h-full"><article id={member.id} className="h-full border border-stone-200 bg-white p-6 shadow-sm sm:p-8"><div className="flex items-start gap-5">{member.image ? <BrandImage src={member.image} alt={member.name} className="h-20 w-20 shrink-0 rounded-full object-cover object-top" fallbackClassName="h-20 w-20 shrink-0 rounded-full bg-[#f4e8c7]" /> : <div aria-label={`${member.name} initials`} className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#f4e8c7] text-lg font-semibold text-[#9b6d16]">{member.initials}</div>}<div><h2 className="font-serif text-2xl text-stone-900">{member.name}</h2><p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#9b6d16]">{member.role}</p>{member.experience && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">{member.experience}</p>}</div></div><p className="mt-6 text-sm leading-7 text-stone-700">{member.bio || abhishekBio}</p><div className="mt-6 border-t border-stone-200 pt-4"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Relevant Practice Areas</p><p className="mt-2 text-sm leading-6 text-stone-800">{member.practiceAreas.join(" · ")}</p></div></article></Reveal>)}
        </div>
      </section>
    </>
  );
}
