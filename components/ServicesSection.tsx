import Link from "next/link";
import { ArrowRight, Calculator, Server, Code2, BookOpen, Users, FileText } from "lucide-react";

const services = [
    {
        Icon: Calculator,
        title: "Tally Service",
        // desc: "Complete Tally ERP9 support — installation, training, net service, and software support tailored to your business.",
        // sub: ["ERP Implementation", "Tally Net Service"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
    {
        Icon: Server,
        title: "ERP Implementation",
        // desc: "End-to-end ERP setup and deployment, ensuring seamless migration and integration with your existing workflows.",
        // sub: ["Data Migration", "System Integration"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
    {
        Icon: Code2,
        title: "Software Development",
        // desc: "Bespoke software solutions including customized business applications and billing software tailored to your needs.",
        // sub: ["Custom Software", "Billing Software"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
    {
        Icon: BookOpen,
        title: "Accounting Service",
        // desc: "Professional accounting support and ERP solutions to keep your books accurate, current, and audit-ready.",
        // sub: ["ERP Solutions", "Bookkeeping"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
    {
        Icon: Users,
        title: "Payroll Outsourcing",
        // desc: "Reliable and compliant payroll processing services, saving you time and ensuring zero errors every pay cycle.",
        // sub: ["Payroll Processing", "Compliance"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
    {
        Icon: FileText,
        title: "Data Entry Services",
        // desc: "Accurate and timely data entry services, freeing your team from repetitive tasks to focus on growth.",
        // sub: ["Bulk Data Entry", "Database Management"],
        desc: "Description...",
        sub: ["Sub 1"],
    },
];

export default function ServicesSection() {
    return (
        <section className="section-alt">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <span className="section-badge">What We Do</span>
                    <h2 className="section-title">
                        Comprehensive IT & ERP <span style={{ color: "var(--primary)" }}>Solutions</span>
                    </h2>
                    <p className="section-subtitle">
                        From Tally implementations to custom software, we cover every technology need your business has.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
                    {services.map((s) => (
                        <div key={s.title} className="card">
                            <div className="icon-box">
                                <s.Icon size={24} />
                            </div>
                            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gray-900)", marginBottom: "0.6rem" }}>{s.title}</h3>
                            <p style={{ color: "var(--gray-600)", fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1rem" }}>{s.desc}</p>
                            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                {s.sub.map((t) => (
                                    <span key={t} style={{
                                        fontSize: "0.76rem",
                                        background: "var(--primary-50)",
                                        color: "var(--primary-dark)",
                                        padding: "0.25rem 0.65rem",
                                        borderRadius: "999px",
                                        fontWeight: 600,
                                        border: "1px solid var(--primary-100)"
                                    }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: "center", marginTop: "3rem" }}>
                    <Link href="/services" className="btn-primary">
                        View All Services <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
