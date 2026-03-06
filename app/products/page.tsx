import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, ArrowRight, Download, Phone } from "lucide-react";

export const metadata: Metadata = {
    title: "Products | Fortune Technosys",
    description: "Explore Tally ERP9 and other software products available through Fortune Technosys, your authorized Tally partner in Bengaluru.",
};

const tallyFeatures = [
    // { category: "Accounting", items: ["Complete ledger management", "Multi-currency support", "Bank reconciliation", "Cost centre tracking"] },
    // { category: "Inventory", items: ["Stock management", "Batch & expiry tracking", "Multiple godown support", "Reorder level alerts"] },
    // { category: "GST & Compliance", items: ["Automated GST calculation", "GST return filing support", "E-way bill generation", "TDS management"] },
    // { category: "Payroll", items: ["Salary processing", "PF/ESI computation", "Form 16 & 24Q", "Employee master management"] },
    // { category: "Reports", items: ["Balance sheet & P&L", "Cash flow statement", "MIS reports", "Customizable dashboards"] },
    // { category: "Remote Access", items: ["Tally.Net connectivity", "Multi-user access", "Cloud backup", "Real-time data sync"] },
    { category: "Accounting", items: ["..."] },
    { category: "Inventory", items: ["..."] },
    { category: "GST & Compliance", items: ["..."] },
    { category: "Payroll", items: ["..."] },
    { category: "Reports", items: ["..."] },
    { category: "Remote Access", items: ["..."] },
];

const plans = [
    {
        name: "Silver",
        // desc: "Ideal for small businesses",
        desc: "",
        features: ["Single user", "Accounting & inventory", "GST-ready", "Basic reports", "Email support"],
        color: "#64748b",
        popular: false,
    },
    {
        name: "Gold",
        // desc: "Perfect for growing businesses",
        desc: "",
        features: ["Multi-user", "All Silver features", "Payroll management", "Tally.Net access", "Priority support", "Data migration"],
        color: "var(--primary)",
        popular: true,
    },
    {
        name: "Enterprise",
        // desc: "For large organizations",
        desc: "",
        features: ["Unlimited users", "All Gold features", "Multi-location", "Custom integrations", "Dedicated manager", "On-site support"],
        color: "#5C2560",
        popular: false,
    },
];

export default function ProductsPage() {
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
                    }}>Our Products</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "white", marginBottom: "1.25rem" }}>
                        Software That Powers Business
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", maxWidth: 560, margin: "0 auto", lineHeight: 1.75 }}>
                        Explore industry-leading accounting and ERP software, officially sold and supported by Fortune Technosys.
                    </p>
                </div>
            </section>

            {/* Product overview */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                                <div style={{ fontSize: "3rem" }}>🧮</div>
                                <div>
                                    <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "var(--gray-900)", lineHeight: 1 }}>Tally ERP9</h2>
                                    <div style={{ display: "flex", gap: "0.25rem", marginTop: "0.35rem" }}>
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="gold" color="gold" />)}
                                        <span style={{ fontSize: "0.8rem", color: "var(--gray-600)", marginLeft: "0.5rem" }}>Trusted by many businesses</span>
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                                {/* Tally ERP9 is India&apos;s most comprehensive business accounting software. It covers everything from financial accounting and inventory management to payroll processing, GST compliance, and more — all in one powerful system. */}
                                A description of Tally ERP9...
                            </p>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>
                                {/* As an <strong style={{ color: "var(--primary)" }}>Authorized Tally Partner</strong>, Fortune Technosys ensures you get genuine software, expert installation, personalized training, and ongoing support — all from a single trusted provider in Bengaluru. */}
                                Another description...
                            </p>
                            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                <Link href="/contact" className="btn-primary">
                                    <Phone size={16} /> Request a Demo
                                </Link>
                                <Link href="/contact" className="btn-outline">
                                    <Download size={16} /> Get a Quote
                                </Link>
                            </div>
                        </div>
                        <div style={{
                            background: "var(--primary-50)",
                            border: "1px solid var(--primary-100)",
                            borderRadius: "1.5rem",
                            padding: "2rem"
                        }}>
                            <div style={{ fontWeight: 700, color: "var(--primary-dark)", marginBottom: "1.5rem", fontSize: "0.9rem", letterSpacing: "0.04em" }}>KEY HIGHLIGHTS</div>
                            {[
                                // { label: "Developer", value: "Tally Solutions Pvt. Ltd." },
                                // { label: "License", value: "Perpetual (One-time purchase)" },
                                // { label: "Platform", value: "Windows (Desktop + Server)" },
                                // { label: "GST Compliance", value: "✓ Fully Compliant" },
                                // { label: "Users", value: "Single & Multi-user editions" },
                                // { label: "Support", value: "Via Fortune Technosys" },
                                // { label: "Customization", value: "TDL (Tally Definition Language)" },
                                { label: "Developer", value: "..." },
                                { label: "License", value: "..." },
                                { label: "Platform", value: "..." },
                                { label: "GST Compliance", value: "..." },
                                { label: "Users", value: "..." },
                                { label: "Support", value: "..." },
                                { label: "Customization", value: "..." },
                                
                            ].map((row) => (
                                <div key={row.label} style={{
                                    display: "flex", justifyContent: "space-between",
                                    padding: "0.65rem 0",
                                    borderBottom: "1px solid var(--primary-100)",
                                    fontSize: "0.9rem"
                                }}>
                                    <span style={{ color: "var(--gray-600)" }}>{row.label}</span>
                                    <span style={{ fontWeight: 600, color: "var(--gray-800)", textAlign: "right", maxWidth: "55%" }}>{row.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Features Grid */}
            <section className="section-alt">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge">Capabilities</span>
                        <h2 className="section-title">Everything Your Business Needs</h2>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
                        {tallyFeatures.map((f) => (
                            <div key={f.category} className="card">
                                <div style={{ fontWeight: 800, color: "var(--primary)", marginBottom: "1rem", fontSize: "0.95rem" }}>{f.category}</div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                                    {f.items.map((item) => (
                                        <div key={item} style={{ display: "flex", gap: "0.6rem", alignItems: "center", fontSize: "0.9rem", color: "var(--gray-700)" }}>
                                            <CheckCircle size={14} color="var(--primary)" style={{ flexShrink: 0 }} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <span className="section-badge">Pricing</span>
                        <h2 className="section-title">Choose the Right Plan</h2>
                        <p className="section-subtitle">Contact us for exact pricing — we customize quotes based on your requirements.</p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
                        {plans.map((p) => (
                            <div key={p.name} style={{
                                background: p.popular ? "linear-gradient(135deg, var(--primary), #5C2560)" : "white",
                                border: p.popular ? "none" : "1px solid var(--primary-100)",
                                borderRadius: "1.25rem",
                                padding: "2.25rem",
                                position: "relative",
                                boxShadow: p.popular ? "0 20px 60px rgba(138,62,138,0.3)" : "none"
                            }}>
                                {p.popular && (
                                    <div style={{
                                        position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                                        background: "white", color: "var(--primary)",
                                        fontSize: "0.72rem", fontWeight: 800,
                                        padding: "0.3rem 1rem", borderRadius: "999px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                                    }}>★ MOST POPULAR</div>
                                )}
                                <h3 style={{ fontWeight: 800, fontSize: "1.4rem", color: p.popular ? "white" : "var(--gray-900)", marginBottom: "0.25rem" }}>{p.name}</h3>
                                <p style={{ fontSize: "0.875rem", color: p.popular ? "rgba(255,255,255,0.75)" : "var(--gray-600)", marginBottom: "1.75rem" }}>{p.desc}</p>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem", marginBottom: "2rem" }}>
                                    {p.features.map((f) => (
                                        <div key={f} style={{ display: "flex", gap: "0.65rem", alignItems: "center", fontSize: "0.9rem", color: p.popular ? "rgba(255,255,255,0.9)" : "var(--gray-700)" }}>
                                            <CheckCircle size={15} color={p.popular ? "rgba(255,255,255,0.8)" : "var(--primary)"} style={{ flexShrink: 0 }} />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" style={{
                                    display: "block", textAlign: "center",
                                    background: p.popular ? "white" : "var(--primary)",
                                    color: p.popular ? "var(--primary)" : "white",
                                    padding: "0.75rem",
                                    borderRadius: "0.5rem",
                                    fontWeight: 700, fontSize: "0.9rem",
                                    textDecoration: "none",
                                    transition: "opacity 0.2s"
                                }}>
                                    Get Quote <ArrowRight size={14} style={{ display: "inline", marginLeft: 4 }} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
