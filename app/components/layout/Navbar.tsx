"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Menu, X } from "lucide-react";

/* ── Product data — the three OTHER products (RewardOS is current) ── */

const PRODUCTS = [
  {
    name: "RewardOS",
    href: "/products/reward-os",
    tag: "Recurring reward intelligence",
  },
  {
    name: "DeclineOS",
    href: "/products/decline-os",
    tag: "Payment recovery intelligence",
  },
  {
    name: "AcquireOS",
    href: "/products/acquire-s",
    tag: "High-risk processing",
  },
];

const NAV_LINKS = [
  { label: "Resources", href: "#resources" },
  { label: "Our Ecosystem", href: "#ecosystem" },
  { label: "About Us", href: "#about" },
];

/* ── Navbar ──────────────────────────────────────────────── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Subtle shrink + shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close dropdown on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-100 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* ── LEFT: Logo ── */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="text-2xl font-black tracking-tight text-gray-900 lg:text-3xl">
            XLTV
          </span>
        </Link>

        {/* ── CENTER: Nav links (lg+) ── */}
        <div className="hidden items-center gap-1 text-sm font-medium text-gray-700 lg:flex">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              className="flex items-center gap-1 rounded-md px-3 py-2 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Our Products
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl"
                >
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="group flex items-start gap-3 rounded-lg px-3 py-2.5 transition hover:bg-gray-50"
                    >
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {p.name}
                        </p>
                        <p className="mt-0.5 text-xs text-gray-500">
                          {p.tag}
                        </p>
                      </div>
                      <span className="mt-1 text-xs text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-900">
                        →
                      </span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 transition hover:bg-gray-50 hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── RIGHT: Language + CTAs + Hamburger ── */}
        <div className="flex items-center gap-2 lg:gap-3">
          <button className="hidden items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 lg:flex">
            <Globe className="h-4 w-4" /> EN
          </button>

          <Link
            href="#demo"
            className="hidden rounded-lg border-2 border-gray-900 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 hover:bg-gray-900 hover:text-white md:inline-flex"
          >
            Book a Demo
          </Link>

          <Link
            href="#signin"
            className="inline-flex rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
          >
            Sign In
          </Link>

          {/* Hamburger — visible below lg, on the RIGHT */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            />

            {/* Drawer — slides in from the RIGHT */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <span className="text-2xl font-black tracking-tight text-gray-900">
                  XLTV
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-gray-700 transition hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Drawer body */}
              <div className="flex-1 overflow-y-auto px-5 py-6">
                {/* Products */}
                <p className="px-2 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  Our Products
                </p>
                <div className="mt-2 space-y-1">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 transition hover:bg-gray-50"
                    >
                      <p className="text-sm font-semibold text-gray-900">
                        {p.name}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-500">{p.tag}</p>
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-gray-100" />

                {/* Other links */}
                <div className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Drawer footer — CTAs */}
              <div className="border-t border-gray-100 p-5">
                <div className="flex flex-col gap-3">
                  <Link
                    href="#demo"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-lg border-2 border-gray-900 px-4 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
                  >
                    Book a Demo
                  </Link>
                  <Link
                    href="#signin"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                  >
                    Sign In
                  </Link>
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                  <Globe className="h-4 w-4" /> EN — English
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}