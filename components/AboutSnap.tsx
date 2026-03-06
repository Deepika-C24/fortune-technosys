import Link from "next/link";
import { ArrowRight, Building2, MapPin, Calendar } from "lucide-react";

const values = [
    { title: "Reliability", desc: "Consistent, on-time delivery of all services." },
    { title: "Expertise", desc: "13+ years of deep domain knowledge in Tally & ERP." },
    { title: "Automation", desc: "We help businesses replace manual effort with smart systems." },
];

export default function AboutSnap() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col-grid">
                    {/* Left visual */}
                    <div style={{ position: "relative" }}>
                        <div style={{
                            background: "linear-gradient(135deg, var(--primary-50), #F0DCF0)",
                            borderRadius: "1.5rem",
                            padding: "2.5rem",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            {/* Decorative circle */}
                            <div style={{
                                position: "absolute", top: -40, right: -40,
                                width: 180, height: 180,
                                background: "var(--primary)",
                                borderRadius: "50%",
                                opacity: 0.1
                            }} />
                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{
                                    background: "var(--primary)",
                                    borderRadius: "1rem",
                                    padding: "1.25rem",
                                    display: "inline-flex",
                                    marginBottom: "1.5rem"
                                }}>
                                    <Building2 size={32} color="white" />
                                </div>
                                <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--gray-900)", marginBottom: "1rem" }}>
                                    Fortune Technosys
                                </h3>
                                <p style={{ color: "var(--gray-600)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                                    An authorized Tally partner and software solutions provider helping businesses across Bengaluru and beyond automate operations, streamline accounting, and achieve growth.
                                </p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                    {[
                                        { Icon: MapPin, text: "Koramangala, Bengaluru – 560095" },
                                        { Icon: Calendar, text: "Established in 2012 · 13+ Years" },
                                    ].map(({ Icon, text }) => (
                                        <div key={text} style={{ display: "flex", gap: "0.6rem", alignItems: "center", color: "var(--gray-600)", fontSize: "0.9rem" }}>
                                            <Icon size={16} color="var(--primary)" />
                                            {text}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* GST badge */}
                        <div style={{
                            position: "absolute",
                            bottom: -20,
                            right: 30,
                            background: "white",
                            border: "1px solid var(--primary-100)",
                            borderRadius: "0.75rem",
                            padding: "0.75rem 1.25rem",
                            boxShadow: "0 8px 30px rgba(138,62,138,0.15)",
                            fontSize: "0.8rem",
                            color: "var(--gray-600)"
                        }}>
                            <div style={{ fontWeight: 700, color: "var(--primary)", fontSize: "0.7rem", letterSpacing: "0.06em", marginBottom: "0.15rem" }}>GST VERIFIED</div>
                            <div style={{ fontFamily: "monospace", fontWeight: 600 }}>29AGTPA7742A1ZD</div>
                        </div>
                    </div>

                    {/* Right text */}
                    <div>
                        <span className="section-badge">About Us</span>
                        <h2 className="section-title" style={{ textAlign: "left" }}>
                            Serving Businesses with{" "}
                            <span style={{ color: "var(--primary)" }}>Passion & Precision</span>
                        </h2>
                        <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>
                            {/* Fortune Technosys was founded with a singular mission: make business technology accessible, efficient, and affordable. From our base in Koramangala, Bengaluru, we&apos;ve helped over 100 businesses transform their operations. */}
                            Mission...
                        </p>
                        <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                            {/* Led by <strong style={{ color: "var(--gray-800)" }}>Chandrashekhar AK</strong>, our team of experts brings years of hands-on experience in Tally ERP, ERP implementations, payroll processing, and custom software development. */}
                            Led by Chandrashekhar AK...                            
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2.5rem" }}>
                            {values.map((v) => (
                                <div key={v.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                    <div style={{
                                        width: 10, height: 10,
                                        background: "var(--primary)",
                                        borderRadius: "50%",
                                        marginTop: "0.35rem",
                                        flexShrink: 0
                                    }} />
                                    <div>
                                        <div style={{ fontWeight: 700, color: "var(--gray-800)", marginBottom: "0.15rem" }}>{v.title}</div>
                                        <div style={{ color: "var(--gray-600)", fontSize: "0.9rem" }}>{v.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="btn-primary">
                            Learn More About Us <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
