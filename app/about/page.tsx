import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Award, Target, Eye, Heart, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Fortune Technosys",
    // description: "Learn about Fortune Technosys — an authorized Tally partner in Bengaluru, established in 2012, helping businesses automate and grow.",
    description: "Learn about Fortune Technosys...",
};

const values = [
    { Icon: Target, title: "Mission...", desc: "" }
    // { Icon: Target, title: "Mission", desc: "To empower businesses with reliable, cutting-edge IT and ERP solutions that drive efficiency and growth." },
    // { Icon: Eye, title: "Vision", desc: "To be the most trusted technology partner for every business in Bengaluru and across India." },
    // { Icon: Heart, title: "Values", desc: "Consistency, transparency, innovation, and a customer-first approach in every engagement we undertake." },
];

const timeline = [
    { year: "2012", event: "Fortune Technosys founded in Koramangala, Bengaluru..." }
    // { year: "2013", event: "Became an authorized Tally Partner" },
    // { year: "2015", event: "Expanded to ERP implementation and software development services" },
    // { year: "2018", event: "Launched payroll outsourcing and data entry service offerings" },
    // { year: "2022", event: "Served 100+ businesses across Karnataka" },
    // { year: "2025", event: "13+ years of trusted service — still growing!" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section style={{
                background: "linear-gradient(135deg, #5C2560, #8A3E8A)",
                padding: "9rem 0 5rem",
                textAlign: "center"
            }}>
                <div className="container">
                    <span style={{
                        display: "inline-block",
                        background: "rgba(255,255,255,0.15)",
                        color: "white",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.35rem 1rem",
                        borderRadius: "999px",
                        marginBottom: "1.25rem",
                        border: "1px solid rgba(255,255,255,0.2)"
                    }}>Our Story</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "white", marginBottom: "1.25rem", lineHeight: 1.15 }}>
                        About Fortune Technosys
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto", lineHeight: 1.75 }}>
                        13 years of helping businesses in Bengaluru harness the power of technology to streamline operations and accelerate growth.
                    </p>
                </div>
            </section>

            {/* Quick Facts */}
            <section className="section" style={{ paddingBottom: "2rem" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
                        {[
                            { Icon: Calendar, label: "Founded", value: "2012" },
                            { Icon: MapPin, label: "Location", value: "Koramangala, Bengaluru" },
                            { Icon: Award, label: "Status", value: "Authorized Tally Partner" },
                            { Icon: User, label: "Led By", value: "Chandrashekar AK" },
                        ].map(({ Icon, label, value }) => (
                            <div key={label} className="card" style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                                <div className="icon-box" style={{ marginBottom: 0, flexShrink: 0 }}>
                                    <Icon size={20} />
                                </div>
                                <div>
                                    <div style={{ fontSize: "0.78rem", color: "var(--gray-600)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{label}</div>
                                    <div style={{ fontWeight: 700, color: "var(--gray-900)", fontSize: "0.95rem" }}>{value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="section" style={{ paddingTop: "2rem" }}>
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
                        <div>
                            <span className="section-badge">Our Story</span>
                            <h2 className="section-title" style={{ textAlign: "left" }}>
                                A Journey Built on <span style={{ color: "var(--primary)" }}>Trust & Technology</span>
                            </h2>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                                {/* Fortune Technosys was founded in 2012 in the heart of Koramangala, Bengaluru, with a simple but powerful goal: make enterprise-grade technology accessible to every business, regardless of size. */}
                                Fortune Technosys was founded in 2012...
                            </p>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                                {/* Starting with Tally software sales and support, we quickly grew into a full-service IT solutions provider. Today, we offer a comprehensive suite of services — from ERP implementation to custom software development, payroll outsourcing, and data entry. */}
                                Another description...
                            </p>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.85, marginBottom: "2rem" }}>
                                Led by <strong style={{ color: "var(--gray-800)" }}>Chandrashekar AK</strong> (General Manager), our team is passionate about helping businesses automate processes, reduce errors, and make smarter decisions through technology.
                            </p>
                            <div style={{
                                background: "var(--primary-50)",
                                border: "1px solid var(--primary-100)",
                                borderLeft: "4px solid var(--primary)",
                                borderRadius: "0 0.75rem 0.75rem 0",
                                padding: "1.25rem 1.5rem",
                                marginBottom: "2rem"
                            }}>
                                <p style={{ color: "var(--gray-700)", fontStyle: "italic", lineHeight: 1.7, fontSize: "0.95rem" }}>
                                    {/* &quot;Our goal is to be more than a vendor — we aim to be a long-term technology partner that grows alongside our clients.&quot; */}
                                    &quot;Goal...&quot;
                                </p>
                                <div style={{ marginTop: "0.75rem", fontWeight: 700, color: "var(--primary)", fontSize: "0.9rem" }}>
                                    — Chandrashekhar AK, General Manager
                                </div>
                            </div>
                            <Link href="/contact" className="btn-primary">
                                Get in Touch <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Timeline */}
                        <div>
                            <span className="section-badge">Our Journey</span>
                            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--gray-900)", marginBottom: "2rem" }}>Milestones Over the Years</h3>
                            <div style={{ position: "relative" }}>
                                <div style={{
                                    position: "absolute", left: 20, top: 0, bottom: 0,
                                    width: 2, background: "var(--primary-100)"
                                }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                                    {timeline.map((t) => (
                                        <div key={t.year} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", paddingLeft: "0.5rem" }}>
                                            <div style={{
                                                width: 40, height: 40,
                                                background: "var(--primary)",
                                                borderRadius: "50%",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                color: "white", fontWeight: 800, fontSize: "0.72rem",
                                                flexShrink: 0, zIndex: 1
                                            }}>{t.year}</div>
                                            <div style={{ paddingTop: "0.6rem" }}>
                                                <p style={{ color: "var(--gray-700)", fontSize: "0.93rem", lineHeight: 1.6 }}>{t.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Mission / Vision / Values */}
            <section className="section-alt">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge">Our Principles</span>
                        <h2 className="section-title">Mission, Vision & Values</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {values.map((v) => (
                            <div key={v.title} className="card" style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
                                <div className="icon-box" style={{ margin: "0 auto 1.5rem" }}>
                                    <v.Icon size={24} />
                                </div>
                                <h3 style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--gray-900)", marginBottom: "0.75rem" }}>{v.title}</h3>
                                <p style={{ color: "var(--gray-600)", lineHeight: 1.7, fontSize: "0.93rem" }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
