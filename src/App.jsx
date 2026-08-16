import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DisclaimerModal from "./components/DisclaimerModal";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import BlogPage from "./pages/BlogPage";
import LegalAwarenessPage from "./pages/LegalAwarenessPage";
import LegalAwarenessCategoryPage from "./pages/LegalAwarenessCategoryPage";
import "./index.css";

function App() {
  const [disclaimerState, setDisclaimerState] = useState("pending");
  const location = useLocation();

  if (disclaimerState === "pending") {
    return (
      <>
        <DisclaimerModal
          isOpen
          onAgree={() => setDisclaimerState("accepted")}
          onDisagree={() => setDisclaimerState("rejected")}
        />
        <div className="min-h-screen bg-[#0c0c0c]" />
      </>
    );
  }

  if (disclaimerState === "rejected") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0c0c0c] px-6 py-16 text-stone-200">
        <div className="w-full max-w-xl rounded-[2rem] border border-stone-800 bg-[#151515] p-10 text-center shadow-2xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#c9a23b]">
            Access Restricted
          </p>
          <h1 className="mt-4 font-serif text-3xl text-stone-100">
            You have chosen not to continue.
          </h1>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            To continue, please review and acknowledge the disclaimer.
          </p>
          <button
            type="button"
            onClick={() => setDisclaimerState("pending")}
            className="mt-8 rounded-full border border-[#c9a23b] px-6 py-3 text-sm font-semibold text-[#c9a23b] transition hover:bg-[#1d1408]"
          >
            Review Disclaimer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f2e8] text-stone-800">
      <Navbar />
      <main className="pb-16">
        <div key={location.pathname} className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/legal-awareness" element={<LegalAwarenessPage />} />
            <Route path="/legal-awareness/:slug" element={<LegalAwarenessCategoryPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
