import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const features = [
    "Complete accounting & inventory management",
    "GST-ready billing and compliance",
    "Multi-user and multi-location support",
    "Payroll & HR management integration",
    "Real-time MIS reports and dashboards",
    "Data backup and remote access (Tally.Net)",
];

export default function ProductHighlight() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="two-col-grid">
                    {/* Content */}
                    <div>
                        <span className="section-badge">Featured Product</span>
                        <h2 className="section-title" style={{ textAlign: "left" }}>
                            Tally ERP9<br />
                            <span style={{ color: "var(--primary)" }}>Accounting Software</span>
                        </h2>
                        <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>
                            The most comprehensive business management software trusted by millions of businesses across India. Fortune Technosys is your authorized local partner for purchase, implementation, and ongoing support.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2.5rem" }}>
                            {features.map((f) => (
                                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", color: "var(--gray-700)", fontSize: "0.93rem" }}>
                                    <CheckCircle size={17} color="var(--primary)" style={{ flexShrink: 0, marginTop: 2 }} />
                                    {f}
                                </div>
                            ))}
                        </div>

                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <Link href="/products" className="btn-primary">
                                Learn More <ArrowRight size={16} />
                            </Link>
                            <Link href="/contact" className="btn-outline">
                                Request Demo
                            </Link>
                        </div>
                    </div>

                    {/* Visual card */}
                    <div>
                        <div style={{
                            background: "linear-gradient(135deg, #8A3E8A, #5C2560)",
                            borderRadius: "1.5rem",
                            padding: "2.5rem",
                            color: "white",
                            position: "relative",
                            overflow: "hidden"
                        }}>
                            {/* Decorations */}
                            <div style={{ position: "absolute", top: -30, right: -30, width: 160, height: 160, background: "rgba(255,255,255,0.06)", borderRadius: "50%" }} />
                            <div style={{ position: "absolute", bottom: -20, left: -20, width: 120, height: 120, background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />

                            <div style={{ position: "relative", zIndex: 1 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                                    <div style={{
                                        width: 52, height: 52,
                                        background: "rgba(255,255,255,0.15)",
                                        borderRadius: "0.75rem",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: "1.5rem"
                                    }}>🧮</div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: "1.2rem" }}>Tally ERP9</div>
                                        <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>by Tally Solutions Pvt. Ltd.</div>
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.5rem" }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="gold" color="gold" />)}
                                </div>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginBottom: "2rem" }}>
                                    Trusted by 7 million+ businesses worldwide
                                </p>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                    {[
                                        { label: "License Type", value: "Perpetual" },
                                        { label: "Users", value: "Multi-user" },
                                        { label: "GST Ready", value: "✓ Yes" },
                                        { label: "Support", value: "24/7 via us" },
                                    ].map((i) => (
                                        <div key={i.label} style={{
                                            background: "rgba(255,255,255,0.1)",
                                            borderRadius: "0.75rem",
                                            padding: "0.85rem 1rem"
                                        }}>
                                            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.2rem" }}>{i.label}</div>
                                            <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{i.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: "1.75rem", padding: "1rem", background: "rgba(255,255,255,0.12)", borderRadius: "0.75rem", fontSize: "0.85rem" }}>
                                    <span style={{ fontWeight: 700 }}>🏅 Authorized Partner:</span> Fortune Technosys provides official Tally licensing, implementation, and support in Bengaluru.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
