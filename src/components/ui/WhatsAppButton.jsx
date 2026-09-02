import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "+923109967908";
  const message = "Hello! I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group">
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
        className="
          relative
          flex items-center justify-center
          w-14 h-14 sm:w-16 sm:h-16
          rounded-full
          bg-[#25D366]
          text-white
          text-3xl sm:text-4xl
          shadow-[0_8px_25px_rgba(37,211,102,0.35)]
          transition-all
          duration-300
          ease-out
          hover:scale-110
          hover:bg-[#20bd5a]
          hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)]
          active:scale-95
          focus-visible:outline-none
          focus-visible:ring-4
          focus-visible:ring-[#25D366]/40
        "
      >
        <FaWhatsapp />
      </a>

      {/* Desktop Tooltip */}
      <span
        className="
          pointer-events-none
          absolute
          right-full
          top-1/2
          mr-3
          -translate-y-1/2
          whitespace-nowrap
          rounded-lg
          bg-gray-900
          px-3
          py-2
          text-sm
          font-medium
          text-white
          opacity-0
          translate-x-2
          transition-all
          duration-300
          group-hover:opacity-100
          group-hover:translate-x-0
          hidden sm:block
        "
      >
        Chat with us on WhatsApp
      </span>
    </div>
  );
}
