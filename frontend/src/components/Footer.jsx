function Footer() {
  return (
    <footer className="bg-maroon text-cream mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="font-display text-xl">Vakuladevi Collections</p>
          <p className="text-sm text-cream/80">
            Premium saree dry-cleaning & polishing with door pickup.
          </p>
        </div>
        <p className="text-sm text-cream/70">
          © {new Date().getFullYear()} Vakuladevi Collections. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

