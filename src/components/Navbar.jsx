import { useState } from "react";
import { NavLink } from "react-router-dom";
import BrandImage from "./BrandImage";
import logo from "../assets/akhawat-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/services" },
  { label: "Our Lawyers", to: "/team" },
  { label: "Legal Awareness", to: "/legal-awareness" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f2e8]/95 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <BrandImage
            src={logo}
            alt="Akhawat Law Firm logo"
            className="h-14 w-auto object-contain sm:h-16"
            fallbackClassName="flex h-14 w-14 items-center justify-center sm:h-16 sm:w-16"
          />
          <span className="flex flex-col font-serif uppercase text-stone-900">
            <span className="text-lg leading-none tracking-[0.24em] sm:text-xl">Akhawat</span>
            <span className="mt-1 text-[0.58rem] leading-none tracking-[0.28em] text-[#9b6d16]">Law Firm</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-[0.01em] transition-colors duration-200 ease-out ${isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="rounded-full border border-[#c9a23b] bg-[#c9a23b] px-5 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-[#b68616]"
          >
            Book a Consultation
          </NavLink>
        </nav>

        <button
          type="button"
          className="rounded-full border border-stone-300 px-3 py-2 text-stone-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#f5ebdb] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-sm font-medium ${isActive ? "bg-[#efe0b5] text-[#9b6d16]" : "text-stone-800 hover:bg-stone-100"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="rounded-xl bg-[#c9a23b] px-3 py-2 text-sm font-semibold text-stone-950"
            >
              Book a Consultation
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
