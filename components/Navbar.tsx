"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isHome = pathname === "/";

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`} style={!scrolled && isHome ? {} : {}}>
            <div className="container">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.65rem" }}>
                        <div style={{
                            width: 40, height: 40,
                            background: scrolled ? "var(--primary)" : "rgba(255,255,255,0.2)",
                            borderRadius: "0.6rem",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.3s",
                            border: scrolled ? "none" : "1px solid rgba(255,255,255,0.3)"
                        }}>
                            <Zap size={20} color="white" fill="white" />
                        </div>
                        <div>
                            <div style={{
                                fontWeight: 800,
                                fontSize: "1.1rem",
                                color: scrolled ? "var(--primary)" : "white",
                                lineHeight: 1.1,
                                transition: "color 0.3s"
                            }}>Fortune</div>
                            <div style={{
                                fontWeight: 500,
                                fontSize: "0.72rem",
                                color: scrolled ? "var(--gray-600)" : "rgba(255,255,255,0.8)",
                                letterSpacing: "0.08em",
                                transition: "color 0.3s"
                            }}>TECHNOSYS</div>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`nav-link ${pathname === l.href ? "active" : ""}`}
                                style={{
                                    color: scrolled
                                        ? pathname === l.href ? "var(--primary)" : "var(--gray-800)"
                                        : "white",
                                }}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn-primary" style={{ padding: "0.6rem 1.25rem", fontSize: "0.875rem" }}>
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="mobile-menu-btn"
                        style={{
                            background: "none", border: "none", cursor: "pointer",
                            color: scrolled ? "var(--gray-800)" : "white",
                            display: "none"
                        }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile menu */}
                {menuOpen && (
                    <div style={{
                        background: "white",
                        borderRadius: "1rem",
                        marginTop: "1rem",
                        padding: "1.5rem",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem"
                    }}>
                        {navLinks.map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    textDecoration: "none",
                                    color: pathname === l.href ? "var(--primary)" : "var(--gray-800)",
                                    fontWeight: pathname === l.href ? 700 : 500,
                                    fontSize: "1rem",
                                    padding: "0.5rem 0",
                                    borderBottom: "1px solid #f3f4f6"
                                }}
                            >
                                {l.label}
                            </Link>
                        ))}
                        <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ textAlign: "center", marginTop: "0.5rem" }}>
                            Get a Quote
                        </Link>
                    </div>
                )}
            </div>

        </nav>
    );
}
