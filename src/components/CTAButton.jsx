// Shared registration CTA — same look/text as the hero button, used across all sections.
export default function CTAButton({ className = "" }) {
  return (
    <a
      href="#register"
      className={`block bg-blue-600 hover:bg-blue-700 text-white text-center font-extrabold text-xl px-6 py-4 rounded-xl shadow-lg shake-btn ${className}`}
    >
      SAVE MY FREE SEAT
      <span className="block text-sm font-normal text-blue-200 mt-0.5">
        Free Registration • Limited Spots Available
      </span>
    </a>
  );
}
