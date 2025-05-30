const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center text-center border-t border-gray-800">
      <p className="text-sm text-white-600 mb-2">
        Terms & Conditions | Privacy Policy
      </p>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-2">
        {/* WhatsApp */}
        <a
          href="https://wa.me/8801615134455"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img
            src="/assets/whatsapp.svg"
            alt="WhatsApp"
            className="w-6 h-6 hover:scale-125 transition-transform duration-300"
          />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/khairulislambhuiya179/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img
            src="/assets/facebook.svg"
            alt="Facebook"
            className="w-6 h-6 hover:scale-125 transition-transform duration-300"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/ghosts___________________/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className="w-6 h-6 hover:scale-125 transition-transform duration-300"
          />
        </a>
      </div>

      <p className="text-sm text-white-600 mt-3">
        © 2024 Khairul Islam B. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
