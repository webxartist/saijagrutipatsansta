"use client";

import { useState } from "react";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const whatsappNumber = "918689970832";

    const whatsappMessage = `
नमस्कार,
मला खालील माहितीबाबत चौकशी करायची आहे.

👤 नाव: ${name}
📞 मोबाईल: ${phone}
📝 संदेश: ${message}
    `;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
    setSuccess(true);
    e.target.reset();
  };

  return (
    <section
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="inline-block mb-4 text-sm font-medium text-sky-300">
              Get in Touch
            </span>

            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
              We’re Here to Help You
            </h2>

            <p className="mt-5 text-gray-200 max-w-xl leading-relaxed">
              Have questions about loans, deposits, or membership? Fill out the
              form and our team will assist you quickly and transparently.
            </p>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Contact Us
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Submit your enquiry and we’ll connect via WhatsApp.
            </p>

            {success && (
              <div className="mb-5 rounded-lg bg-green-50 text-green-700 px-4 py-3 text-sm">
                ✅ Successfully submitted. Redirecting to WhatsApp.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-sky-500 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 rounded-lg transition"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
