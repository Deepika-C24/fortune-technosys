"use client";

import Link from "next/link";
import { MapPin, Mail, Clock, Zap, Facebook, Linkedin, Twitter } from "lucide-react";

const services = [
    "Tally Service", "ERP Implementation", "Software Development",
    "Accounting Service", "Payroll Outsourcing", "Data Entry Services",
];

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
                            <div style={{
                                width: 40, height: 40,
                                background: "var(--primary)",
                                borderRadius: "0.6rem",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Zap size={20} color="white" fill="white" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "white", lineHeight: 1.1 }}>Fortune</div>
                                <div style={{ fontWeight: 500, fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}>TECHNOSYS</div>
                            </div>
                        </div>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                            Authorized Tally Partner helping businesses automate, scale, and thrive with smart ERP and software solutions.
                        </p>
                        <div style={{ display: "flex", gap: "0.75rem" }}>
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Twitter, href: "#" },
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} style={{
                                    width: 36, height: 36,
                                    background: "rgba(255,255,255,0.1)",
                                    borderRadius: "0.5rem",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "rgba(255,255,255,0.7)",
                                    transition: "all 0.2s",
                                    textDecoration: "none"
                                }}
                                    onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                                    onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"; }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Our Services</h4>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {services.map((s) => (
                                <li key={s}>
                                    <Link href="/services" style={{
                                        color: "rgba(255,255,255,0.65)",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        transition: "color 0.2s"
                                    }}
                                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = "var(--primary-light)"}
                                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}>
                                        → {s}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Quick Links</h4>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {[
                                { label: "Home", href: "/" },
                                { label: "About Us", href: "/about" },
                                { label: "Services", href: "/services" },
                                { label: "Products", href: "/products" },
                                { label: "Contact", href: "/contact" },
                            ].map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href} style={{
                                        color: "rgba(255,255,255,0.65)",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        transition: "color 0.2s"
                                    }}
                                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = "var(--primary-light)"}
                                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)"}>
                                        → {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: "1.25rem" }}>Contact Info</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {[
                                { Icon: MapPin, text: "567, 17th A Main, 6th Block, Koramangala Layout, Bengaluru – 560095, Karnataka" },
                                { Icon: Clock, text: "Mon – Fri: 9:00 AM – 5:00 PM" },
                                { Icon: Mail, text: "fortune.technosys@gmail.com" },
                            ].map(({ Icon, text }, i) => (
                                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                    <Icon size={16} color="var(--primary-light)" style={{ marginTop: 2, flexShrink: 0 }} />
                                    <span style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    paddingTop: "1.75rem",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <p style={{ fontSize: "0.85rem" }}>
                        © {new Date().getFullYear()} Fortune Technosys. All rights reserved. | GST: 29AGTPA7742A1ZD
                    </p>
                    <p style={{ fontSize: "0.85rem" }}>
                        Bengaluru, Karnataka, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
