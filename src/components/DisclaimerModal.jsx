import { useEffect } from "react";

export default function DisclaimerModal({ isOpen, onAgree, onDisagree }) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-stone-800 bg-[#f7f2e8] p-8 text-stone-800 shadow-2xl">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#9b6d16]">
          Disclaimer, Confirmation &amp; Acknowledgement
        </p>
        <h2 className="mt-4 font-serif text-3xl leading-tight text-stone-900">
          The information published on this website is intended solely for general legal awareness and educational purposes.
        </h2>
        <p className="mt-5 text-sm leading-7 text-stone-700">
          In accordance with the rules and regulations of the Bar Council of India, advocates are not permitted to solicit work or advertise.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onAgree}
            className="rounded-full bg-[#c89b2d] px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-[#b68616]"
          >
            I Agree
          </button>
          <button
            type="button"
            onClick={onDisagree}
            className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
          >
            I Disagree
          </button>
        </div>
      </div>
    </div>
  );
}