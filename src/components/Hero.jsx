import React from 'react';
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-legal-4k.jpg";

const Hero = () => {
    return (
        <section className="section-shell py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="max-w-2xl">
                    <p className="eyebrow">YOUR TRUST. OUR COMMITMENT.</p>

                    <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-stone-900 sm:text-6xl lg:text-7xl">
                        Justice Delivered.
                        <br />
                        Rights Protected.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-stone-700">
                        We are here to protect your rights and fight for your justice.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-[#c79b2a] bg-[#c79b2a] px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-[#b7871a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b2a]"
                        >
                            INQUIRY NOW
                            <ArrowRight size={18} />
                        </Link>

                        <a
                            href="#practice-areas"
                            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-[#c79b2a] hover:text-[#9b6d16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b2a]"
                        >
                            Explore Practice Areas
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-[#e2c780] bg-[#f3ead8]" />
                    <img
                        src={heroImage}
                        alt="Legal illustration featuring courthouse, scales of justice, gavel, and law books"
                        className="relative h-[460px] w-full rounded-[2rem] border border-stone-200 object-cover shadow-[0_24px_60px_rgba(15,23,42,0.10)] sm:h-[560px]"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
