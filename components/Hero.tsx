"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const highlights = [
    "Authorized Tally Partner",
    "13+ Years of Excellence",
    "Trusted by 100+ Businesses",
    "End-to-End IT Solutions",
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section className="hero">
            <div className="hero-grid" />
            <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "7rem", paddingBottom: "5rem" }}>
                <div style={{ maxWidth: 760 }}>
                    {/* Badge */}
                    <div className={`hero-badge ${mounted ? "animate-fade-in" : ""}`} style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.6s ease" }}>
                        <Award size={14} color="rgba(255,255,255,0.9)" />
                        <span>Authorized Tally Partner · Est. 2012 · Bengaluru</span>
                    </div>

                    {/* Headline */}
                    <h1 style={{
                        fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
                        fontWeight: 900,
                        color: "white",
                        lineHeight: 1.1,
                        marginBottom: "1.5rem",
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.7s ease 0.1s"
                    }} className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
                        Empowering Businesses with{" "}
                        <span style={{
                            background: "linear-gradient(90deg, #F9D4F9, #FFFFFF)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>
                            Smart ERP & IT Solutions
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: "rgba(255,255,255,0.85)",
                        maxWidth: 600,
                        lineHeight: 1.75,
                        marginBottom: "2.5rem",
                        opacity: mounted ? 1 : 0,
                        transition: "opacity 0.7s ease 0.2s"
                    }}>
                        {/* Fortune Technosys delivers cutting-edge Tally ERP implementations, payroll solutions,
                        software development, and accounting services to help your business automate, grow, and succeed. */}
                        A description...
                    </p>

                    {/* Highlights */}
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        marginBottom: "2.75rem",
                        opacity: mounted ? 1 : 0,
                        transition: "opacity 0.7s ease 0.3s"
                    }}>
                        {highlights.map((h) => (
                            <div key={h} style={{
                                display: "flex", alignItems: "center", gap: "0.4rem",
                                color: "rgba(255,255,255,0.9)",
                                fontSize: "0.875rem",
                                background: "rgba(255,255,255,0.1)",
                                padding: "0.4rem 0.9rem",
                                borderRadius: "999px",
                                border: "1px solid rgba(255,255,255,0.15)"
                            }}>
                                <CheckCircle size={13} color="#F9D4F9" />
                                {h}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div style={{
                        display: "flex", flexWrap: "wrap", gap: "1rem",
                        opacity: mounted ? 1 : 0,
                        transition: "opacity 0.7s ease 0.4s"
                    }}>
                        <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", borderColor: "white", fontSize: "1rem", padding: "0.875rem 2rem" }}>
                            Get a Free Consultation
                            <ArrowRight size={16} />
                        </Link>
                        <Link href="/services" className="btn-outline-white" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                            Explore Services
                        </Link>
                    </div>
                </div>

                {/* Floating cards */}
                <div style={{
                    opacity: mounted ? 1 : 0,
                    transition: "opacity 0.7s ease 0.5s"
                }} className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 flex-col gap-4">
                    {[
                        { icon: <Zap size={20} />, title: "Tally ERP9", sub: "Authorized Partner" },
                        { icon: <CheckCircle size={20} />, title: "13+ Years", sub: "Trusted Experience" },
                        { icon: <Award size={20} />, title: "100+ Clients", sub: "Across Industries" },
                    ].map((c, i) => (
                        <div key={i} style={{
                            background: "rgba(255,255,255,0.12)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            borderRadius: "1rem",
                            padding: "1rem 1.25rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.85rem",
                            color: "white",
                            minWidth: 200
                        }}>
                            <div style={{
                                background: "rgba(255,255,255,0.15)",
                                borderRadius: "0.5rem",
                                width: 40, height: 40,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                flexShrink: 0
                            }}>{c.icon}</div>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>{c.title}</div>
                                <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.7)" }}>{c.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
