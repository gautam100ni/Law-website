import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from './InstagramIcon';

const INSTAGRAM_URL = 'https://www.instagram.com/akhawat_law_firm_?igsh=MWsyMTQwOThpZm92Ng==';

const Footer = () => {
    return (
        <footer className="border-t border-stone-200 bg-[#efe6d4]">
            <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
                <div>
                    <p className="font-serif text-2xl text-stone-900">Akhawat Law Firm</p>
                    <p className="mt-3 max-w-md text-sm leading-7 text-stone-700">
                        Premium legal representation grounded in integrity, legal awareness, and access to justice.
                    </p>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-700">
                        Navigate
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-stone-700">
                        <li><Link to="/" className="transition hover:text-[#9b6d16]">Home</Link></li>
                        <li><Link to="/about" className="transition hover:text-[#9b6d16]">About</Link></li>
                        <li><Link to="/services" className="transition hover:text-[#9b6d16]">Services</Link></li>
                        <li><Link to="/contact" className="transition hover:text-[#9b6d16]">Find a Lawyer</Link></li>
                        <li><Link to="/legal-awareness" className="transition hover:text-[#9b6d16]">Legal Advice</Link></li>
                        <li><Link to="/blog" className="transition hover:text-[#9b6d16]">Blog</Link></li>
                        <li><Link to="/contact" className="transition hover:text-[#9b6d16]">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-700">
                        Contact
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-stone-700">
                        <li><a href="tel:+919024806815" className="transition hover:text-[#9b6d16]">9024806815</a></li>
                        <li>Jodhpur, Rajasthan</li>
                        <li><a href="mailto:akhawatlawfirm@gmail.com" className="transition hover:text-[#9b6d16]">akhawatlawfirm@gmail.com</a></li>
                    </ul>

                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Akhawat Law Firm on Instagram"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-stone-700 transition hover:text-[#9b6d16]"
                    >
                        <InstagramIcon />
                        Instagram
                    </a>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-700">
                        <Link to="/privacy-policy" className="transition hover:text-[#9b6d16]">Privacy Policy</Link>
                        <Link to="/terms-conditions" className="transition hover:text-[#9b6d16]">Terms & Conditions</Link>
                    </div>

                    <p className="mt-6 text-sm text-stone-600">All right reserved to Akhawat Law Firm</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
