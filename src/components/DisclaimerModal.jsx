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
        <h2 className="font-serif text-3xl leading-tight text-stone-900">Website Disclaimer &amp; User Acknowledgement</h2>
        <p className="mt-5 text-sm leading-7 text-stone-700">This website is maintained by Akhawat Law Firm solely for general informational purposes and in accordance with applicable professional standards, including Rule 36 of the Bar Council of India Rules. It is not intended to advertise or solicit professional work.</p>
        <p className="mt-5 text-sm leading-7 text-stone-700">By clicking “I Agree”, you acknowledge that:</p>
        <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-stone-700">
          <li>You are accessing this website voluntarily and on your own initiative.</li>
          <li>The information provided is general in nature and does not constitute legal advice or a professional opinion.</li>
          <li>Accessing or communicating through this website does not, by itself, create an advocate-client relationship.</li>
          <li>No representation or assurance is made regarding the outcome of any legal matter, and case-specific legal advice should be obtained before taking any action.</li>
        </ul>
        <p className="mt-5 text-sm leading-7 text-stone-700">By proceeding, you confirm that you have read and understood this Disclaimer.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onAgree}
            className="rounded-full bg-[#c89b2d] px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-[#b68616]"
          >
            I AGREE
          </button>
          <button
            type="button"
            onClick={onDisagree}
            className="rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:bg-stone-100"
          >
            I DISAGREE
          </button>
        </div>
      </div>
    </div>
  );
}
