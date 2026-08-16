import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BrandImage from "./BrandImage";
import logo from "../assets/akhawat-logo.png";
import { lawyerCategories, legalAdviceCategories } from "../data/caseTypes";

const primaryLinks = [
  { label: "HOME", to: "/" },
];

const aboutLinks = [
  { label: "ABOUT US", to: "/about" },
  { label: "TEAM", to: "/team" },
];

const practiceLink = "/services";
const blogLink = "/blog";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [desktopCategory, setDesktopCategory] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);

  const closeMenus = () => {
    setDesktopMenu(null);
    setDesktopCategory(null);
    setMobileOpen(false);
    setMobileMenu(null);
  };

  const inquiryLink = (caseType) => `/contact?caseType=${encodeURIComponent(caseType)}`;
  const adviceLink = (category) => `/legal-awareness/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f2e8]/95 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3.5">
        <NavLink to="/" onClick={closeMenus} className="flex items-center gap-3">
          <BrandImage
            src={logo}
            alt="Akhawat Law Firm logo"
            className="h-16 w-auto object-contain sm:h-[4.5rem]"
            fallbackClassName="flex h-16 w-16 items-center justify-center sm:h-[4.5rem] sm:w-[4.5rem]"
          />
          <span className="flex flex-col font-serif uppercase text-stone-900">
            <span className="text-xl leading-none tracking-[0.24em] sm:text-2xl">Akhawat</span>
            <span className="mt-1 text-xs leading-none tracking-[0.22em] text-[#9b6d16] sm:text-sm">Law Firm</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {primaryLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-semibold tracking-[0.02em] transition-colors xl:text-[0.95rem] ${isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"}`}>
              {link.label}
            </NavLink>
          ))}

          <div className="relative" onMouseEnter={() => setDesktopMenu("find")} onMouseLeave={() => { setDesktopMenu(null); setDesktopCategory(null); }}>
            <button type="button" aria-haspopup="menu" aria-expanded={desktopMenu === "find"} onClick={() => setDesktopMenu(desktopMenu === "find" ? null : "find")} onFocus={() => setDesktopMenu("find")} className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.02em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.95rem]">
              FIND A LAWYER <span aria-hidden="true">▾</span>
            </button>
            {desktopMenu === "find" && (
              <div role="menu" className="absolute left-0 top-full z-50 mt-3 w-64 border border-stone-200 bg-white py-2 shadow-xl">
                {lawyerCategories.map((category) => (
                  <div key={category.title} className="relative" onMouseEnter={() => setDesktopCategory(category.title)}>
                    <button type="button" role="menuitem" aria-haspopup="menu" aria-expanded={desktopCategory === category.title} onClick={() => setDesktopCategory(desktopCategory === category.title ? null : category.title)} className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold tracking-wide text-stone-800 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]">
                      {category.title}<span aria-hidden="true">›</span>
                    </button>
                    {desktopCategory === category.title && (
                      <div role="menu" className="absolute left-full top-0 z-[60] w-80 border border-stone-200 bg-white py-2 shadow-xl">
                        {category.caseTypes.map((caseType) => (
                          <Link key={caseType} role="menuitem" to={inquiryLink(caseType)} onClick={closeMenus} className="block px-4 py-2.5 text-sm font-medium leading-5 text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]">{caseType}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative" onMouseEnter={() => setDesktopMenu("advice")} onMouseLeave={() => setDesktopMenu(null)}>
            <button type="button" aria-haspopup="menu" aria-expanded={desktopMenu === "advice"} onClick={() => setDesktopMenu(desktopMenu === "advice" ? null : "advice")} onFocus={() => setDesktopMenu("advice")} className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.02em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.95rem]">
              LEGAL ADVICE <span aria-hidden="true">▾</span>
            </button>
            {desktopMenu === "advice" && (
              <div role="menu" className="absolute left-0 top-full z-50 mt-3 w-60 border border-stone-200 bg-white py-2 shadow-xl">
                <Link to="/legal-awareness" onClick={closeMenus} className="block px-4 py-2.5 text-sm font-semibold text-[#9b6d16] hover:bg-[#fbf7ee]">VIEW ALL ARTICLES</Link>
                {legalAdviceCategories.map((category) => <Link key={category} role="menuitem" to={adviceLink(category)} onClick={closeMenus} className="block px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]">{category}</Link>)}
              </div>
            )}
          </div>

          <NavLink to={practiceLink} className={({ isActive }) => `text-sm font-semibold tracking-[0.02em] transition-colors xl:text-[0.95rem] ${isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"}`}>PRACTICE AREAS</NavLink>
          <NavLink to={blogLink} className={({ isActive }) => `text-sm font-semibold tracking-[0.02em] transition-colors xl:text-[0.95rem] ${isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"}`}>BLOG</NavLink>

          <div className="relative" onMouseEnter={() => setDesktopMenu("about")} onMouseLeave={() => setDesktopMenu(null)}>
            <button type="button" aria-haspopup="menu" aria-expanded={desktopMenu === "about"} onClick={() => setDesktopMenu(desktopMenu === "about" ? null : "about")} onFocus={() => setDesktopMenu("about")} className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.02em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.95rem]">
              ABOUT <span aria-hidden="true">▾</span>
            </button>
            {desktopMenu === "about" && <div role="menu" className="absolute right-0 top-full z-50 mt-3 w-44 border border-stone-200 bg-white py-2 shadow-xl">{aboutLinks.map((link) => <Link key={link.to} to={link.to} onClick={closeMenus} className="block px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]">{link.label}</Link>)}</div>}
          </div>

          <NavLink to="/contact" className="rounded-full border border-[#c9a23b] bg-[#c9a23b] px-5 py-2.5 text-sm font-semibold text-stone-950 shadow-sm transition hover:bg-[#b68616] xl:px-6">INQUIRY NOW</NavLink>
        </nav>

        <button type="button" className="rounded-full border border-stone-300 px-3.5 py-2.5 text-stone-700 lg:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle navigation">
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#f5ebdb] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={closeMenus} className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">HOME</NavLink>

            <div>
              <button type="button" aria-expanded={mobileMenu === "find"} onClick={() => setMobileMenu(mobileMenu === "find" ? null : "find")} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">FIND A LAWYER <span>{mobileMenu === "find" ? "▴" : "▾"}</span></button>
              {mobileMenu === "find" && <div className="space-y-1 px-3 pb-2">{lawyerCategories.map((category) => <div key={category.title}><button type="button" aria-expanded={mobileMenu === category.title} onClick={() => setMobileMenu(mobileMenu === category.title ? "find" : category.title)} className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold tracking-wide text-[#9b6d16]">{category.title}<span>{mobileMenu === category.title ? "−" : "+"}</span></button>{mobileMenu === category.title && <div className="border-l border-[#c9a23b] pl-3">{category.caseTypes.map((caseType) => <Link key={caseType} to={inquiryLink(caseType)} onClick={closeMenus} className="block py-2 text-sm leading-5 text-stone-700 hover:text-[#9b6d16]">{caseType}</Link>)}</div>}</div>)}</div>}
            </div>

            <div>
              <button type="button" aria-expanded={mobileMenu === "advice"} onClick={() => setMobileMenu(mobileMenu === "advice" ? null : "advice")} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">LEGAL ADVICE <span>{mobileMenu === "advice" ? "▴" : "▾"}</span></button>
              {mobileMenu === "advice" && <div className="px-6 pb-2"><Link to="/legal-awareness" onClick={closeMenus} className="block py-2 text-sm font-semibold text-[#9b6d16]">VIEW ALL ARTICLES</Link>{legalAdviceCategories.map((category) => <Link key={category} to={adviceLink(category)} onClick={closeMenus} className="block py-2 text-sm text-stone-700 hover:text-[#9b6d16]">{category}</Link>)}</div>}
            </div>

            <NavLink to="/services" onClick={closeMenus} className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">PRACTICE AREAS</NavLink>
            <NavLink to="/blog" onClick={closeMenus} className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">BLOG</NavLink>

            <div>
              <button type="button" aria-expanded={mobileMenu === "about"} onClick={() => setMobileMenu(mobileMenu === "about" ? null : "about")} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">ABOUT <span>{mobileMenu === "about" ? "▴" : "▾"}</span></button>
              {mobileMenu === "about" && <div className="px-6 pb-2">{aboutLinks.map((link) => <Link key={link.to} to={link.to} onClick={closeMenus} className="block py-2 text-sm text-stone-700 hover:text-[#9b6d16]">{link.label}</Link>)}</div>}
            </div>

            <NavLink to="/contact" onClick={closeMenus} className="mt-1 rounded-xl bg-[#c9a23b] px-3 py-3 text-sm font-semibold text-stone-950">INQUIRY NOW</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
