import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled ? "bg-white backdrop-blur-md shadow-sm " : "bg-transparent"
      )}
    >
      <div className={`container flex items-center justify-between px-4 sm:px-6 lg:px-8 ${isScrolled ? "pt-[30px]" : ""}`}>
        <Link
          to="/"
          className="flex items-center space-x-2"
          onClick={closeMenu}
        >
          <img
            src="/lakshiitlogo.png"
            alt="LakshmiIT IT Solutions Logo"
            className="h-[80px] w-[80px] sm:h-8 object-fit"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className={cn(
              "nav-link",
              isActive("/") && "text-pulse-600 font-semibold"
            )}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={cn(
              "nav-link",
              isActive("/services") && "text-pulse-600 font-semibold"
            )}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={cn(
              "nav-link",
              isActive("/about") && "text-pulse-600 font-semibold"
            )}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={cn(
              "nav-link",
              isActive("/contact") && "text-pulse-600 font-semibold"
            )}
          >
            Contact
          </Link>
          <Link
            to="/careers"
            className={cn(
              "nav-link",
              isActive("/careers") && "text-pulse-600 font-semibold"
            )}
          >
            Careers
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 p-3 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-40 w-[80%] bg-white flex flex-col pt-16 px-6 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-8 items-center mt-5">
          <Link
            to="/"
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              isActive("/") && "bg-pulse-50 text-pulse-600"
            )}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              isActive("/services") && "bg-pulse-50 text-pulse-600"
            )}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              isActive("/about") && "bg-pulse-50 text-pulse-600"
            )}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              isActive("/contact") && "bg-pulse-50 text-pulse-600"
            )}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/careers"
            className={cn(
              "text-xl font-medium py-3 px-6 w-full text-center rounded-lg hover:bg-gray-100",
              isActive("/careers") && "bg-pulse-50 text-pulse-600"
            )}
            onClick={closeMenu}
          >
            Careers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
