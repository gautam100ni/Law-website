import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import InstagramIcon from "../components/InstagramIcon";
import { caseTypes } from "../data/caseTypes";

const INSTAGRAM_URL = "https://www.instagram.com/akhawat_law_firm_?igsh=MWsyMTQwOThpZm92Ng==";
const FIRM_EMAIL = "akhawatlawfirm@gmail.com";
const WHATSAPP_URL = "https://wa.me/919024806815?text=";
const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
const ALLOWED_FILE_EXTENSIONS = ["pdf", "jpg", "jpeg", "png", "doc", "docx"];
const API_BASE_URL = `${import.meta.env.BASE_URL || "/"}api`;

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    city: "",
    practiceArea: "",
    message: ""
  });
  const [attachment, setAttachment] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const selectedCaseType = searchParams.get("caseType") || "";

  useEffect(() => {
    if (selectedCaseType && caseTypes.includes(selectedCaseType)) {
      setForm((current) => ({ ...current, practiceArea: selectedCaseType }));
    }
  }, [selectedCaseType]);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    else if (!/^[0-9+()\s-]{7,20}$/.test(form.phone.trim())) nextErrors.phone = "Please enter a valid phone number.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) nextErrors.email = "Please enter a valid email address.";
    if (!form.state.trim()) nextErrors.state = "State is required.";
    if (!form.city.trim()) nextErrors.city = "City is required.";
    if (!form.practiceArea.trim()) nextErrors.practiceArea = "Please select a matter.";
    if (!form.message.trim()) nextErrors.message = "Please briefly describe your matter.";
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("uploading");

    let attachmentLine = "Attachment selected: None.";

    try {
      if (attachment) {
        const uploadData = new FormData();
        uploadData.append("attachment", attachment);

        const uploadResponse = await fetch(`${API_BASE_URL}/upload-attachment.php`, {
          method: "POST",
          body: uploadData
        });

        const uploadResult = await uploadResponse.json();
        if (!uploadResponse.ok || !uploadResult.success || !uploadResult.url) {
          throw new Error(uploadResult.message || "Attachment upload failed.");
        }

        attachmentLine = `Attachment: ${uploadResult.url}`;
      }

      const message = [
        "Inquiry",
        `Full Name: ${form.name.trim()}`,
        `Phone: ${form.phone.trim()}`,
        `Email: ${form.email.trim()}`,
        `State: ${form.state.trim()}`,
        `City: ${form.city.trim()}`,
        `Case Type: ${form.practiceArea}`,
        `Message: ${form.message.trim()}`,
        attachmentLine
      ].join("\n");

      window.open(`${WHATSAPP_URL}${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      setStatus("ready");
    } catch (error) {
      console.error("Attachment upload error:", error);
      setStatus("error");
      setErrors((current) => ({
        ...current,
        attachment: attachment
          ? "The attachment could not be uploaded. Please try again."
          : undefined
      }));
    }
  };

  const handleAttachmentChange = (event) => {
    const file = event.target.files?.[0] || null;
    if (!file) {
      setAttachment(null);
      setErrors((current) => ({ ...current, attachment: undefined }));
      return;
    }

    const extension = file.name.split(".").pop()?.toLowerCase();
    if (
      !ALLOWED_FILE_TYPES.includes(file.type) &&
      !ALLOWED_FILE_EXTENSIONS.includes(extension)
    ) {
      setAttachment(null);
      setErrors((current) => ({
        ...current,
        attachment: "Please select a PDF, JPG, PNG, DOC, or DOCX file."
      }));
      event.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setAttachment(null);
      setErrors((current) => ({
        ...current,
        attachment: "The attachment must be 10 MB or smaller."
      }));
      event.target.value = "";
      return;
    }

    setAttachment(file);
    setErrors((current) => ({ ...current, attachment: undefined }));
  };

  return (
    <>
      <SeoHead
        title="Contact"
        description="Contact Akhawat Law Firm for consultation and legal guidance."
      />

      <section className="section-shell py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal
            delay={80}
            className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]"
          >
            <div>
              <p className="eyebrow">CONTACT</p>
              <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
                Reach us for legal guidance and inquiry.
              </h1>

              <div className="mt-8 space-y-6 text-sm leading-7 text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900">Phone</p>
                  <a href="tel:+919024806815" className="mt-2 inline-block text-[#9b6d16] hover:text-[#b68616] transition-colors duration-200 ease-out">
                    9024806815
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Email</p>
                  <a
                    href={`mailto:${FIRM_EMAIL}`}
                    className="mt-2 inline-block text-[#9b6d16] hover:text-[#b68616] transition-colors duration-200 ease-out"
                  >
                    {FIRM_EMAIL}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[#9b6d16] transition-colors duration-200 ease-out hover:text-[#b68616]"
                  >
                    <InstagramIcon />
                    @akhawat_law_firm_
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={140}
            className="rounded-[2rem] border border-stone-200 bg-[#fbf7ee] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]"
          >
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">Full Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  />
                  {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">Phone Number</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  />
                  {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  />
                  {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">Matter / Case Type</label>
                  <select
                    value={form.practiceArea}
                    onChange={(e) => setForm({ ...form, practiceArea: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  >
                    <option value="">Select a matter</option>
                    {caseTypes.map((caseType) => (
                      <option key={caseType} value={caseType}>{caseType}</option>
                    ))}
                  </select>
                  {errors.practiceArea && <p className="mt-2 text-sm text-red-600">{errors.practiceArea}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">State</label>
                  <input
                    value={form.state}
                    onChange={(e) => setForm({ ...form, state: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  />
                  {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state}</p>}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-stone-800">City</label>
                  <input
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                  />
                  {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city}</p>}
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-stone-800">
                  File Attachment <span className="font-normal text-stone-500">(optional, PDF/JPG/PNG/DOC/DOCX, max 10 MB)</span>
                </label>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  onChange={handleAttachmentChange}
                  className="block w-full text-sm text-stone-700 file:mr-4 file:border-0 file:bg-[#efe6d4] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-stone-800"
                />
                {attachment && <p className="mt-2 text-sm text-stone-700">Selected: {attachment.name}</p>}
                {errors.attachment && <p className="mt-2 text-sm text-red-600">{errors.attachment}</p>}
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-stone-800">Message</label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                />
                {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-6 rounded-full border border-yellow-400 bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-500"
              >
                INQUIRY NOW
              </button>

              {status === "uploading" && (
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  Uploading your attachment securely…
                </p>
              )}

              {status === "ready" && (
                <p className="mt-4 text-sm leading-7 text-stone-700">
                  WhatsApp has been opened with your inquiry details. If a file was attached, a secure document link has been included.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-sm text-red-600">
                  Please complete the required fields and try again.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal
          delay={180}
          className="mt-8 overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-3 shadow-sm"
        >
          <div className="px-4 pb-3 pt-2 sm:px-5">
            <p className="eyebrow">ABHISHEK AKHAWAT</p>
            <h2 className="mt-2 font-serif text-2xl text-stone-900 sm:text-3xl">
              Location
            </h2>
          </div>
          <div className="relative h-[280px] overflow-hidden rounded-[1.5rem] bg-stone-100 sm:h-[380px]">
            <iframe
              src="https://www.google.com/maps?q=26.3126944,73.1071667&z=15&output=embed"
              title="Akhawat Law Firm map"
              className="absolute inset-0 h-full w-full border-0"
              style={{ pointerEvents: "none" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

      </section>
    </>
  );
}
