function Contact() {
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg border border-maroon/10 p-6">
        <div>
          <h2 className="font-display text-3xl text-maroon mb-3">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Reach out for bulk orders, wedding trousseau care, or custom requests.
          </p>
          <div className="space-y-3 text-sm">
            <p>
              <span className="font-semibold text-maroon">Phone:</span>{" "}
              <a href="tel:+919876543210" className="text-maroon underline">
                +91 98765 43210
              </a>
            </p>
            <p>
              <span className="font-semibold text-maroon">Email:</span>{" "}
              <a href="mailto:orders@vakuladevi-collections.com" className="text-maroon underline">
                orders@vakuladevi-collections.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-maroon">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/919876543210"
                className="text-maroon underline"
                target="_blank"
                rel="noreferrer"
              >
                Chat now
              </a>
            </p>
            <p>
              <span className="font-semibold text-maroon">Address:</span>{" "}
              12-34/56, Market Road, Hyderabad, Telangana, India
            </p>
          </div>
        </div>
        <div className="bg-cream border border-gold/40 rounded-xl p-4 text-sm text-gray-700">
          <h3 className="font-display text-xl text-maroon mb-2">Pickup Hours</h3>
          <p>Monday - Sunday: 8:00 AM - 9:00 PM</p>
          <p className="mt-2">
            We coordinate pickup based on your preferred time. Same-day pickup is
            available in select areas.
          </p>
          <h3 className="font-display text-xl text-maroon mt-4 mb-2">Care Promise</h3>
          <p>
            Sarees are inspected on arrival, handled with fabric-safe products, and
            returned neatly folded or hung as you prefer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;

