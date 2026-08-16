import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import BrandImage from "./BrandImage";
import logo from "../assets/akhawat-logo.png";
import { lawyerCategories, legalAdviceCategories } from "../data/caseTypes";
import { practiceAreas } from "../data/practiceAreas";

const primaryLinks = [{ label: "HOME", to: "/" }];

const aboutLinks = [
  { label: "ABOUT US", to: "/about" },
  { label: "TEAM", to: "/team" },
];

const articleSlugByArea = {
  "Civil Law": "civil-law",
  "Criminal Law": "criminal-law",
  "Constitutional Law": "constitutional-law",
  "Cyber Law & Cyber Crime": "cyber-law",
  "Family / Matrimonial Law": "family-law",
  "Property & Land Disputes": "property-law",
};

const practiceSlug = (title) => articleSlugByArea[title] || "civil-law";
const adviceSlug = (category) =>
  `/legal-awareness/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [desktopCategory, setDesktopCategory] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const [mobileFindCategory, setMobileFindCategory] = useState(null);
  const closeTimer = useRef(null);

  const closeMenus = () => {
    setDesktopMenu(null);
    setDesktopCategory(null);
    setMobileOpen(false);
    setMobileMenu(null);
    setMobileFindCategory(null);
  };

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openDesktopMenu = (menu) => {
    clearCloseTimer();
    setDesktopMenu(menu);
    if (menu !== "find") setDesktopCategory(null);
  };

  const scheduleDesktopClose = (menu) => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      setDesktopMenu((current) => (current === menu ? null : current));
      if (menu === "find") setDesktopCategory(null);
      closeTimer.current = null;
    }, 420);
  };

  const inquiryLink = (caseType) =>
    `/contact?caseType=${encodeURIComponent(caseType)}`;

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#f7f2e8]/95 backdrop-blur">
      <div className="section-shell flex items-center justify-between py-3.5">
        <NavLink to="/" onClick={closeMenus} className="flex items-center gap-3">
          <BrandImage
            src={logo}
            alt="Akhawat Law Firm logo"
            className="h-20 w-auto object-contain sm:h-[5.25rem]"
            fallbackClassName="flex h-20 w-20 items-center justify-center sm:h-[5.25rem] sm:w-[5.25rem]"
          />
          <span className="flex flex-col font-serif uppercase text-stone-900">
            <span className="text-2xl leading-none tracking-[0.24em] sm:text-[1.75rem]">Akhawat</span>
            <span className="mt-1 text-sm leading-none tracking-[0.22em] text-[#9b6d16] sm:text-base">Law Firm</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-[0.03em] transition-colors xl:text-[0.98rem] ${
                  isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => openDesktopMenu("find")}
            onMouseLeave={() => scheduleDesktopClose("find")}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "find"}
              onClick={() => setDesktopMenu(desktopMenu === "find" ? null : "find")}
              onFocus={() => openDesktopMenu("find")}
              className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.03em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.98rem]"
            >
              FIND A LAWYER <span aria-hidden="true">▾</span>
            </button>

            {desktopMenu === "find" && (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 mt-2 w-72 border border-stone-200 bg-white py-2 shadow-xl"
              >
                {lawyerCategories.map((category) => (
                  <div
                    key={category.title}
                    className="relative"
                    onMouseEnter={() => setDesktopCategory(category.title)}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      aria-haspopup="menu"
                      aria-expanded={desktopCategory === category.title}
                      onClick={() =>
                        setDesktopCategory(
                          desktopCategory === category.title ? null : category.title
                        )
                      }
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold tracking-wide text-stone-800 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]"
                    >
                      {category.title}
                      <span aria-hidden="true">›</span>
                    </button>

                    {desktopCategory === category.title && (
                      <div
                        role="menu"
                        className="absolute left-full top-0 z-[60] w-80 border border-stone-200 bg-white py-2 shadow-xl"
                      >
                        {category.caseTypes.map((caseType) => (
                          <Link
                            key={caseType}
                            role="menuitem"
                            to={inquiryLink(caseType)}
                            onClick={closeMenus}
                            className="block px-4 py-2.5 text-sm font-medium leading-5 text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]"
                          >
                            {caseType}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => openDesktopMenu("advice")}
            onMouseLeave={() => scheduleDesktopClose("advice")}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "advice"}
              onClick={() => setDesktopMenu(desktopMenu === "advice" ? null : "advice")}
              onFocus={() => openDesktopMenu("advice")}
              className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.03em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.98rem]"
            >
              LEGAL ADVICE <span aria-hidden="true">▾</span>
            </button>

            {desktopMenu === "advice" && (
              <div role="menu" className="absolute left-0 top-full z-50 mt-2 w-64 border border-stone-200 bg-white py-2 shadow-xl">
                <Link to="/legal-awareness" onClick={closeMenus} className="block px-4 py-2.5 text-sm font-semibold text-[#9b6d16] hover:bg-[#fbf7ee]">
                  VIEW ALL ARTICLES
                </Link>
                {legalAdviceCategories.map((category) => (
                  <Link
                    key={category}
                    role="menuitem"
                    to={adviceSlug(category)}
                    onClick={closeMenus}
                    className="block px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => openDesktopMenu("practice")}
            onMouseLeave={() => scheduleDesktopClose("practice")}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "practice"}
              onClick={() => setDesktopMenu(desktopMenu === "practice" ? null : "practice")}
              onFocus={() => openDesktopMenu("practice")}
              className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.03em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.98rem]"
            >
              PRACTICE AREA <span aria-hidden="true">▾</span>
            </button>

            {desktopMenu === "practice" && (
              <div role="menu" className="absolute left-0 top-full z-50 mt-2 w-72 border border-stone-200 bg-white py-2 shadow-xl">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.title}
                    role="menuitem"
                    to={`/legal-awareness/${practiceSlug(area.title)}`}
                    onClick={closeMenus}
                    className="block px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-[#fbf7ee] hover:text-[#9b6d16]"
                  >
                    {area.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm font-semibold tracking-[0.03em] transition-colors xl:text-[0.98rem] ${
                isActive ? "text-[#9b6d16]" : "text-stone-700 hover:text-[#9b6d16]"
              }`
            }
          >
            BLOG
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => openDesktopMenu("about")}
            onMouseLeave={() => scheduleDesktopClose("about")}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={desktopMenu === "about"}
              onClick={() => setDesktopMenu(desktopMenu === "about" ? null : "about")}
              onFocus={() => openDesktopMenu("about")}
              className="inline-flex items-center gap-1 text-sm font-semibold tracking-[0.03em] text-stone-700 transition hover:text-[#9b6d16] xl:text-[0.98rem]"
            >
              ABOUT <span aria-hidden="true">▾</span>
            </button>
            {desktopMenu === "about" && (
              <div role="menu" className="absolute right-0 top-full z-50 mt-2 w-44 border border-stone-200 bg-white py-2 shadow-xl">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMenus}
                    className="block px-4 py-2.5 text-sm font-medium text-stone-700 hover:bg-[#fbf7ee] hover:text-[#9b6d16]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className="rounded-full border border-yellow-400 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-yellow-500 hover:border-yellow-500 xl:px-6"
          >
            INQUIRY NOW
          </NavLink>
        </nav>

        <button
          type="button"
          className="rounded-full border border-stone-300 px-3.5 py-2.5 text-stone-700 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-5.5rem)] overflow-y-auto border-t border-stone-200 bg-[#f5ebdb] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            <NavLink to="/" onClick={closeMenus} className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
              HOME
            </NavLink>

            <div>
              <button type="button" aria-expanded={mobileMenu === "find"} onClick={() => {
                setMobileMenu(mobileMenu === "find" ? null : "find");
                setMobileFindCategory(null);
              }} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
                FIND A LAWYER <span>{mobileMenu === "find" ? "▴" : "▾"}</span>
              </button>
              {mobileMenu === "find" && (
                <div className="space-y-1 px-3 pb-2">
                  {lawyerCategories.map((category) => (
                    <div key={category.title}>
                      <button
                        type="button"
                        aria-expanded={mobileFindCategory === category.title}
                        onClick={() => setMobileFindCategory(mobileFindCategory === category.title ? null : category.title)}
                        className="flex w-full items-center justify-between py-2.5 text-left text-sm font-semibold tracking-wide text-[#9b6d16]"
                      >
                        {category.title}<span>{mobileFindCategory === category.title ? "−" : "+"}</span>
                      </button>
                      {mobileFindCategory === category.title && (
                        <div className="border-l border-[#c9a23b] pl-3">
                          {category.caseTypes.map((caseType) => (
                            <Link key={caseType} to={inquiryLink(caseType)} onClick={closeMenus} className="block py-2 text-sm leading-5 text-stone-700 hover:text-[#9b6d16]">
                              {caseType}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button type="button" aria-expanded={mobileMenu === "advice"} onClick={() => {
                setMobileMenu(mobileMenu === "advice" ? null : "advice");
                setMobileFindCategory(null);
              }} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
                LEGAL ADVICE <span>{mobileMenu === "advice" ? "▴" : "▾"}</span>
              </button>
              {mobileMenu === "advice" && (
                <div className="px-6 pb-2">
                  <Link to="/legal-awareness" onClick={closeMenus} className="block py-2 text-sm font-semibold text-[#9b6d16]">VIEW ALL ARTICLES</Link>
                  {legalAdviceCategories.map((category) => (
                    <Link key={category} to={adviceSlug(category)} onClick={closeMenus} className="block py-2 text-sm text-stone-700 hover:text-[#9b6d16]">
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button type="button" aria-expanded={mobileMenu === "practice"} onClick={() => {
                setMobileMenu(mobileMenu === "practice" ? null : "practice");
                setMobileFindCategory(null);
              }} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
                PRACTICE AREA <span>{mobileMenu === "practice" ? "▴" : "▾"}</span>
              </button>
              {mobileMenu === "practice" && (
                <div className="px-6 pb-2">
                  {practiceAreas.map((area) => (
                    <Link key={area.title} to={`/legal-awareness/${practiceSlug(area.title)}`} onClick={closeMenus} className="block py-2 text-sm text-stone-700 hover:text-[#9b6d16]">
                      {area.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/blog" onClick={closeMenus} className="rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
              BLOG
            </NavLink>

            <div>
              <button type="button" aria-expanded={mobileMenu === "about"} onClick={() => {
                setMobileMenu(mobileMenu === "about" ? null : "about");
                setMobileFindCategory(null);
              }} className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold text-stone-800 hover:bg-stone-100">
                ABOUT <span>{mobileMenu === "about" ? "▴" : "▾"}</span>
              </button>
              {mobileMenu === "about" && (
                <div className="px-6 pb-2">
                  {aboutLinks.map((link) => (
                    <Link key={link.to} to={link.to} onClick={closeMenus} className="block py-2 text-sm text-stone-700 hover:text-[#9b6d16]">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/contact" onClick={closeMenus} className="mt-1 rounded-xl border border-yellow-400 bg-yellow-400 px-3 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500">
              INQUIRY NOW
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
