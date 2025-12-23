const number = import.meta.env.VITE_WHATSAPP_NUMBER || "919876543210";
const preset =
  "Hello Vakuladevi Collections, I would like to request a saree pickup.";

function WhatsAppFloat() {
  const link = `https://wa.me/${number}?text=${encodeURIComponent(preset)}`;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition"
    >
      <span className="text-lg">🟢</span>
      <span className="font-semibold text-sm">WhatsApp Us</span>
    </a>
  );
}

export default WhatsAppFloat;

