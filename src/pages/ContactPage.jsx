import { useState } from "react";
import SeoHead from "../components/SeoHead";
import Reveal from "../components/Reveal";
import InstagramIcon from "../components/InstagramIcon";

const INSTAGRAM_URL = "https://www.instagram.com/akhawat_law_firm_?igsh=MWsyMTQwOThpZm92Ng==";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (!form.practiceArea.trim()) nextErrors.practiceArea = "Please select a matter.";
    if (!form.message.trim()) nextErrors.message = "Please briefly describe your matter.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setForm({ name: "", phone: "", email: "", practiceArea: "", message: "" });
  };

  return (
    <>
      <SeoHead
        title="Contact"
        description="Contact Akhawat Law Firm for consultation and legal guidance."
      />

      <section className="section-shell py-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={80} className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
                Reach us for legal guidance and consultation.
              </h1>

              <div className="mt-8 space-y-6 text-sm leading-7 text-stone-700">
                <div>
                  <p className="font-semibold text-stone-900">Address</p>
                  <p className="mt-2">House No - 109, Khasra No-31, Defence Colony, Nandri Road, Jodhpur, Rajasthan</p>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Phone</p>
                  <a href="tel:+919024806815" className="mt-2 inline-block text-[#9b6d16] hover:text-[#b68616] transition-colors duration-200 ease-out">
                    9024806815
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Email</p>
                  <a href="mailto:akhawatlawfirm@gmail.com" className="mt-2 inline-block text-[#9b6d16] hover:text-[#b68616] transition-colors duration-200 ease-out">
                    akhawatlawfirm@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-[#9b6d16] transition-colors duration-200 ease-out hover:text-[#b68616]"
                  >
                    <InstagramIcon />
                    @akhawat_law_firm_
                  </a>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=House+No-109+Defence+Colony+Jodhpur+Rajasthan"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full border border-[#c9a23b] px-5 py-3 text-sm font-semibold text-[#9b6d16] transition-colors duration-200 ease-out hover:bg-[#f5ebdb]"
              >
                Open Google Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} className="rounded-[2rem] border border-stone-200 bg-[#fbf7ee] p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(15,23,42,0.08)]">
            <form onSubmit={handleSubmit}>
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
                <label className="mb-2 block text-sm font-semibold text-stone-800">Matter</label>
                <select
                  value={form.practiceArea}
                  onChange={(e) => setForm({ ...form, practiceArea: e.target.value })}
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#c9a23b]"
                >
                  <option value="">Select a matter</option>
                  <option value="Civil Law">Civil Law</option>
                  <option value="Criminal Law">Criminal Law</option>
                  <option value="Constitutional Law">Constitutional Law</option>
                  <option value="Cyber Law & Cyber Crime">Cyber Law & Cyber Crime</option>
                  <option value="Family / Matrimonial Law">Family / Matrimonial Law</option>
                  <option value="Property & Land Disputes">Property & Land Disputes</option>
                </select>
                {errors.practiceArea && <p className="mt-2 text-sm text-red-600">{errors.practiceArea}</p>}
              </div>
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
              className="mt-6 rounded-full bg-[#c9a23b] px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-[#b68616]"
            >
              Submit Request
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-emerald-700">
                Thank you. Your consultation request has been received.
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
      </section>
    </>
  );
}
