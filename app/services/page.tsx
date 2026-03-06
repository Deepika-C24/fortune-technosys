import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, Server, Code2, BookOpen, Users, FileText, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Services | Fortune Technosys",
    description: "Explore Fortune Technosys's full range of services — Tally ERP, software development, accounting, payroll, and data entry in Bengaluru.",
};

const services = [
    {
        Icon: Calculator,
        title: "Tally Service",
        tagline: "Complete Tally ERP support from purchase to operation",
        // desc: "As an authorized Tally partner, we offer the complete Tally service ecosystem — from initial software purchase and installation to ongoing technical support, training, and Tally.Net connectivity for remote access.",
        desc: "As an authorized Tally partner...",
        // features: [
        //     "Tally ERP9 Software Sales",
        //     "Installation & Configuration",
        //     "User Training & Onboarding",
        //     "Tally.Net Remote Access Setup",
        //     "Annual Maintenance Contracts (AMC)",
        //     "Data Backup & Recovery",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-purple-600 to-purple-800",
    },
    {
        Icon: Server,
        title: "ERP Implementation",
        tagline: "Seamless ERP deployment for your business needs",
        // desc: "We handle the complete ERP implementation journey — from requirements analysis and system configuration to data migration, go-live support, and post-implementation training for your teams.",
        desc: "",
        // features: [
        //     "Business Requirements Analysis",
        //     "System Configuration & Customization",
        //     "Data Migration from Legacy Systems",
        //     "Team Training & Change Management",
        //     "Go-Live Support",
        //     "Post-Implementation Review",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-blue-600 to-purple-700",
    },
    {
        Icon: Code2,
        title: "Software Development",
        tagline: "Custom solutions built exactly for your business",
        // desc: "Our development team builds tailor-made software applications designed to solve specific business challenges — whether it is a billing solution, an inventory tracker, or a fully integrated business platform.",
        desc: "",
        // features: [
        //     "Customized Business Applications",
        //     "Billing & Invoice Software",
        //     "Inventory Management Systems",
        //     "Integration with Tally ERP",
        //     "Web-based Dashboards",
        //     "API Development & Integration",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-green-600 to-teal-700",
    },
    {
        Icon: BookOpen,
        title: "Accounting Service",
        tagline: "Accurate, audit-ready accounting support",
        // desc: "We provide comprehensive accounting services to keep your books accurate, compliant, and up-to-date — so you can focus on running your business while we handle the numbers.",
        desc: "",
        // features: [
        //     "Day-to-Day Bookkeeping",
        //     "GST Return Filing",
        //     "Bank Reconciliation",
        //     "Financial Statement Preparation",
        //     "ERP-Based Accounting Setup",
        //     "Audit Support",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-orange-500 to-red-600",
    },
    {
        Icon: Users,
        title: "Payroll Outsourcing",
        tagline: "Error-free payroll processing every month",
        // desc: "Let us manage your entire payroll process — from salary computation and statutory deductions to payslip generation and compliance filings. We ensure zero errors and full compliance every pay cycle.",
        desc: "",
        // features: [
        //     "Salary Computation & Processing",
        //     "PF, ESI, & TDS Calculations",
        //     "Payslip Generation",
        //     "Employee Self-Service Reports",
        //     "Full Statutory Compliance",
        //     "Annual Returns & Form 16",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-pink-600 to-rose-700",
    },
    {
        Icon: FileText,
        title: "Data Entry Services",
        tagline: "Accurate and fast data management",
        // desc: "Our data entry professionals handle high-volume, time-sensitive data tasks with precision and speed — freeing your internal team to focus on strategic business activities.",
        desc: "",
        // features: [
        //     "Bulk Data Entry & Digitization",
        //     "Database Management & Cleansing",
        //     "Invoice & Receipt Processing",
        //     "Excel / Spreadsheet Data Entry",
        //     "Online Data Entry",
        //     "Data Validation & Verification",
        // ],
        features: [
            "A list of features..."
        ],
        gradient: "from-indigo-600 to-purple-700",
    },
];

export default function ServicesPage() {
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
                    }}>What We Offer</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "white", marginBottom: "1.25rem" }}>
                        Our Services
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", maxWidth: 580, margin: "0 auto", lineHeight: 1.75 }}>
                        {/* From Tally ERP to custom software — we deliver IT solutions that make your business smarter and more efficient. */}
                        Another description...
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
                        {services.map((s, idx) => (
                            <div key={s.title} style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "4rem",
                                alignItems: "center",
                                direction: idx % 2 === 1 ? "rtl" : "ltr"
                            }}>
                                {/* Content */}
                                <div style={{ direction: "ltr" }}>
                                    <div className="icon-box" style={{ marginBottom: "1.25rem" }}>
                                        <s.Icon size={24} />
                                    </div>
                                    <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--gray-900)", marginBottom: "0.35rem" }}>{s.title}</h2>
                                    <p style={{ fontSize: "1rem", color: "var(--primary)", fontWeight: 600, marginBottom: "1.25rem" }}>{s.tagline}</p>
                                    <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>{s.desc}</p>
                                    <Link href="/contact" className="btn-primary">
                                        Get Started <ArrowRight size={16} />
                                    </Link>
                                </div>

                                {/* Features card */}
                                <div style={{ direction: "ltr" }}>
                                    <div style={{
                                        background: "var(--primary-50)",
                                        border: "1px solid var(--primary-100)",
                                        borderRadius: "1.25rem",
                                        padding: "2rem"
                                    }}>
                                        <h4 style={{ fontWeight: 700, color: "var(--primary-dark)", fontSize: "0.95rem", marginBottom: "1.25rem", letterSpacing: "0.03em" }}>What&apos;s Included</h4>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                                            {s.features.map((f) => (
                                                <div key={f} style={{ display: "flex", gap: "0.75rem", alignItems: "center", fontSize: "0.92rem", color: "var(--gray-700)" }}>
                                                    <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                                                    {f}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* CTA */}
            <section className="section-alt">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className="section-title">Ready to Get Started?</h2>
                    <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                        Reach out today and our team will recommend the right solution for your business.
                    </p>
                    <Link href="/contact" className="btn-primary">
                        Contact Us <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </>
    );
}
