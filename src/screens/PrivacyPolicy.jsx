import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const PrivacyPolicy = () => {
  return (
    <>
      <div className="relative flex flex-col w-full !select-none bg-fixed bg-panel-dark">
        <Header />
        <Link
          to="/"
          className="flex lg:overflow-x-visible gap-0 overflow-x-hidden flex-col px-5 pt-0 lg:px-0 mt-24 md:max-w-[768px] md:min-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-0 md:mx-auto"
        >
          <div className="flex flex-row items-center text-lg text-ink-dark hover:underline cursor-pointer mb-2">
            <span className="mr-2">←</span>
            <p>Home</p>
          </div>
        </Link>
        <div className="max-w-4xl mx-auto bg-panel-dark shadow-lg rounded-xl p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-ink-dark">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500 mb-8 text-ink-dark">
            Last Updated: 26 Dec 2025
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            We respect your privacy. This Privacy Policy explains how{" "}
            <span className="font-semibold">uditmalhotra.in</span> (“we,” “our,”
            “us”) collects, uses, and protects your information when you use{" "}
            <span className="font-semibold">uditmalhotra.in</span>.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            1. Information We Collect
          </h2>

          <p className="text-gray-800 font-medium mb-1 text-ink-dark">
            Information You Provide
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-ink-dark">
            <li>Name (if voluntarily provided)</li>
            <li>Email (if contacting or subscribing)</li>
            <li>Payment information (handled by payment gateway)</li>
          </ul>

          <p className="text-gray-800 font-medium mb-1 text-ink-dark">
            Automatically Collected Data
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-ink-dark">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Device information</li>
          </ul>

          <p className="text-gray-700 mb-6 text-ink-dark">
            This is standard analytics information used to improve the website.
          </p>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            2. Payments & Financial Data
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3 text-ink-dark">
            If you make a payment or contribution:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 text-ink-dark">
            <li>Payments are processed through</li>
            <li>We do not store card or banking details</li>
            <li>
              Transaction details may be securely stored by the payment provider
            </li>
          </ul>

          <p className="text-gray-700 mb-6 text-ink-dark">
            Refer to your payment provider’s privacy policy for more details.
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            3. Use of Information
          </h2>

          <p className="text-gray-700 mb-3 text-ink-dark">
            We may use collected information to:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 text-ink-dark">
            <li>Operate and improve the website</li>
            <li>Respond to inquiries</li>
            <li>Manage voluntary contributions</li>
            <li>Analyze website performance</li>
            <li>Prevent fraud or misuse</li>
          </ul>

          <p className="text-gray-700 mb-6 text-ink-dark">
            We do not sell or rent your personal information.
          </p>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            4. Cookies
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            We may use cookies to improve user experience, analyze traffic, and
            remember preferences. You can disable cookies in your browser
            settings if you prefer.
          </p>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            5. Data Security
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            We use reasonable security measures to protect your information.
            However, no internet transmission is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            6. Third-Party Services
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            We may use analytics tools, payment gateways, and hosting providers.
            These third parties have their own privacy policies.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            7. Children’s Privacy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            This website is not intended for children under 13. We do not
            knowingly collect data from children.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            8. Changes to Privacy Policy
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            We may update this policy occasionally. Continued use of the website
            means you accept the updated policy.
          </p>

          {/* Section 9 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            9. Contact
          </h2>

          <p className="text-gray-700 leading-relaxed text-ink-dark">
            If you have any questions regarding this Privacy Policy, contact:
            <br />
            📩 <span className="font-semibold">contact@uditmalhotra.in</span>
            <br />
            🌐 <span className="font-semibold">uditmalhotra.in</span>
          </p>
        </div>
      </div>
    </>
  );
};
