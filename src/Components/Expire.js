import React from "react";

const HostingExpiredNotice = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Hosting Expired
        </h1>

        <p className="text-gray-700 text-lg mb-2">Your hosting for</p>

        <p className="text-xl font-semibold text-gray-900 mb-4">
          saijagrutipatsansta.com
        </p>

        <p className="text-gray-600 mb-6">
          has expired. To avoid website suspension, downtime, or data loss,
          please renew your hosting immediately.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
          <p className="text-gray-700 font-medium">
            Contact us for
            <span className="text-red-600 font-semibold">
              {" "}
              Full Premium & Professional Support
            </span>
          </p>
        </div>

        {/* Call Button */}
        <a
          href="tel:+918169413149"
          className="block w-full py-3 rounded-xl bg-red-600 text-white text-lg font-semibold hover:bg-red-700 transition"
        >
          📞 Contact Support
        </a>
      </div>
    </div>
  );
};

export default HostingExpiredNotice;
