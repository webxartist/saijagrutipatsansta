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
    <section className="py-24 bg-gray-50">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Contact Us
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Submit your enquiry and our team will assist you shortly.
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
    </section>
  );
};

export default ContactForm;
