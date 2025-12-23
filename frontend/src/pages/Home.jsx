import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard.jsx";

function Home() {
  return (
    <div>
      <section className="section bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gold font-semibold uppercase tracking-[0.2em]">
              Saree Care Specialists
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-maroon">
              Vakuladevi Collections
            </h1>
            <p className="text-gray-700 text-lg">
              Premium saree dry cleaning and polishing with doorstep pickup across
              the city. We handle your treasured sarees with the care they deserve.
            </p>
            <div className="flex gap-3">
              <Link to="/order" className="btn-primary">
                Request Pickup
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-full border border-maroon text-maroon font-semibold hover:bg-maroon hover:text-cream transition"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gold/30 p-6">
            <img
              src="https://images.unsplash.com/photo-1617032213042-09d9215d57ab?auto=format&fit=crop&w=900&q=80"
              alt="Saree care"
              className="rounded-xl object-cover w-full h-72"
            />
            <p className="text-center text-sm text-gray-600 mt-3">
              Traditional Indian care with modern convenience.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gold font-semibold mb-2">Services</p>
          <h2 className="font-display text-3xl text-center text-maroon mb-8">
            Premium Saree Treatments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              icon="🧴"
              title="Saree Dry Cleaning"
              description="Gentle solvents and expert handling to preserve fabric, color, and embellishments."
            />
            <ServiceCard
              icon="🪡"
              title="Polishing / Ironing"
              description="Crisp, polished finish with steam ironing to restore drape and shine."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

