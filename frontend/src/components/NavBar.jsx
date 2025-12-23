import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/order", label: "Order Pickup" },
  { to: "/contact", label: "Contact" },
  { to: "/admin", label: "Admin" },
];

function NavBar() {
  return (
    <header className="bg-maroon text-cream shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="font-display text-2xl font-bold tracking-wide">
          Vakuladevi Collections
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-semibold">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:text-gold transition ${
                  isActive ? "text-gold underline underline-offset-8" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Link to="/order" className="btn-primary hidden md:inline-block">
          Request Pickup
        </Link>
      </div>
    </header>
  );
}

export default NavBar;

