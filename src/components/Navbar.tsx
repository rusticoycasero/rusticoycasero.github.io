import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/RUSTICO Y CASERO LOGO.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Mayorista", href: "#mayorista" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 font-display text-xl font-bold text-primary tracking-wide">
          <img src={logo} alt="Logo Rústico y Casero" className="w-[70px] h-[70px] rounded-full object-cover" />
          Rústico y Casero
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-body text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
