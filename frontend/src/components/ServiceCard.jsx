function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 border border-maroon/10 hover:-translate-y-1 transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-display text-xl text-maroon mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default ServiceCard;

