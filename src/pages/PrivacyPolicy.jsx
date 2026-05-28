export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      
      {/* HEADER SECTION */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-4">Legal</p>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-500">
          Last Updated: May 28, 2026
        </p>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-10 text-gray-600 leading-relaxed">
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              At VIS ("we", "our", or "us"), we are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our digital engineering and design services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services. The personal information that we collect depends on the context of your interactions with us and the website, and may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Names, email addresses, phone numbers, and job titles provided via our contact forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, and operating system.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use personal information collected via our website for a variety of business purposes described below:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To facilitate communication regarding project inquiries and proposals.</li>
              <li>To send you marketing and promotional communications (such as our "Stay Luminous" newsletter), provided you have opted in.</li>
              <li>To improve our website functionality, user experience, and overall service delivery.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell, rent, or trade your personal information to third parties for their promotional purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Data Rights</h2>
            <p>
              Depending on your location, you may have specific rights regarding your personal data, including the right to request access to, correct, or delete the personal information we hold about you. To exercise these rights, please contact our data protection team using the information provided below.
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 inline-block">
              <p className="font-bold text-gray-900">VIS Digital</p>
              <p>88 Luminous Drive, Creative Quarter</p>
              <p>San Francisco, CA 94103</p>
              <a href="mailto:hello@vis-digital.com" className="text-brandPurple hover:underline font-medium mt-2 block">hello@vis-digital.com</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}