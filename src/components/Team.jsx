import React from 'react';
import { teamMembers } from "../data/team";

export default function Team() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="max-w-3xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#9b6d16]">
          Our Team
        </p>
        <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
          Dedicated professionals supporting complex legal matters with care and diligence.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {teamMembers.map((member) => (
          <article key={member.name} className="rounded-[1.6rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4e8c7] text-lg font-semibold text-[#9b6d16]">
              {member.image ? (
                <img src={member.image} alt="" className="h-full w-full rounded-full object-cover object-top" />
              ) : (
                member.initials
              )}
            </div>
            <h3 className="mt-5 font-serif text-2xl text-stone-900">{member.name}</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-[#9b6d16]">
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}