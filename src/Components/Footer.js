const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold text-white leading-tight">
              साई जागृती नागरी पतसंस्था <br /> (मर्या.) मुंबई
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              A trusted member-based financial institution providing secure
              loans and reliable deposit schemes with transparency and
              responsibility.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Personal Loan</li>
              <li>Business Loan</li>
              <li>Gold Loan</li>
              <li>Home Loan</li>
              <li>Fixed & Recurring Deposit</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>Deposits & Loans</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Contact Info
            </h4>

            <p className="text-sm text-gray-400 leading-relaxed">
              512, Suchitra Business Park,
              <br />
              Pantnagar Patel Chowk,
              <br />
              Ghatkopar (E), Mumbai – 400077
            </p>

            <p className="mt-3 text-sm text-gray-400">📞 +91 8689970832</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-12 border-t border-gray-800"></div>

        {/* BOTTOM BAR */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} साई जागृती नागरी पतसंस्था (मर्या.)
            मुंबई. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Reg. No. BOM / W M / RSR (CR) 8867 | Website by{" "}
            <a
              href="https://webxartist.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:underline"
            >
              WebXArtist.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
