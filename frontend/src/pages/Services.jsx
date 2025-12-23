import ServiceCard from "../components/ServiceCard.jsx";

function Services() {
  return (
    <section className="section">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl text-maroon mb-4">Our Services</h2>
        <p className="text-gray-700 mb-8">
          Choose the care your sarees need. Each service is handled by specialists who
          respect the fabric and craftsmanship.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            icon="🧼"
            title="Saree Dry Cleaning"
            description="Stain removal, fabric-safe solvents, and gentle drying to keep your saree vibrant."
          />
          <ServiceCard
            icon="✨"
            title="Saree Polishing / Ironing"
            description="Steam ironing and polishing for a flawless drape, ready for any occasion."
          />
          <ServiceCard
            icon="🌟"
            title="Combined Care"
            description="Dry cleaning plus polishing to fully refresh heirloom or frequently worn sarees."
          />
          <ServiceCard
            icon="🚚"
            title="Doorstep Pickup"
            description="Hassle-free pickup and drop. We coordinate timings that fit your schedule."
          />
        </div>
      </div>
    </section>
  );
}

export default Services;

