"use client";

import { useState } from "react";
import { MapPin, Clock, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const e: Record<string, string> = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.trim()) e.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
        if (!form.message.trim()) e.message = "Message is required";
        return e;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setErrors({});
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setStatus(res.ok ? "success" : "error");
        } catch {
            setStatus("error");
        }
    };

    const infoItems = [
        {
            Icon: MapPin,
            title: "Our Office",
            lines: ["567, 17th A Main, 6th Block", "Koramangala Layout", "Bengaluru – 560095, Karnataka, India"],
        },
        {
            Icon: Clock,
            title: "Business Hours",
            lines: ["Monday – Friday", "9:00 AM – 5:00 PM IST", "Closed on national holidays"],
        },
        {
            Icon: Mail,
            title: "Email Us",
            lines: ["fortune.technosys@gmail.com", "We reply within 24 hours"],
        },
    ];

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
                    }}>Reach Out</span>
                    <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 900, color: "white", marginBottom: "1.25rem" }}>
                        Contact Us
                    </h1>
                    <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
                        Have a question or need a quote? Our team is ready to help — get in touch today.
                    </p>
                </div>
            </section>

            {/* Contact body */}
            <section className="section">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-start">
                        {/* Info */}
                        <div>
                            <span className="section-badge">Get In Touch</span>
                            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--gray-900)", marginBottom: "1rem", lineHeight: 1.2 }}>
                                We&apos;d Love to <span style={{ color: "var(--primary)" }}>Hear From You</span>
                            </h2>
                            <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                                Whether you have a question about our services, pricing, or want to request a demo — just reach out. We&apos;re here to help.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2.5rem" }}>
                                {infoItems.map(({ Icon, title, lines }) => (
                                    <div key={title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                        <div className="icon-box" style={{ marginBottom: 0, flexShrink: 0 }}>
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, color: "var(--gray-900)", marginBottom: "0.25rem" }}>{title}</div>
                                            {lines.map((l) => (
                                                <div key={l} style={{ fontSize: "0.9rem", color: "var(--gray-600)", lineHeight: 1.6 }}>{l}</div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <div style={{
                            background: "white",
                            border: "1px solid var(--primary-100)",
                            borderRadius: "1.5rem",
                            padding: "2.5rem",
                            boxShadow: "0 10px 40px rgba(138,62,138,0.08)"
                        }}>
                            <h3 style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--gray-900)", marginBottom: "0.5rem" }}>Send Us a Message</h3>
                            <p style={{ color: "var(--gray-600)", fontSize: "0.9rem", marginBottom: "2rem" }}>Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                            {status === "success" ? (
                                <div style={{
                                    background: "#f0fdf4",
                                    border: "1px solid #86efac",
                                    borderRadius: "0.75rem",
                                    padding: "2rem",
                                    textAlign: "center"
                                }}>
                                    <CheckCircle size={40} color="#22c55e" style={{ margin: "0 auto 1rem" }} />
                                    <h4 style={{ fontWeight: 700, color: "#15803d", marginBottom: "0.5rem" }}>Message Sent Successfully!</h4>
                                    <p style={{ color: "#166534", fontSize: "0.9rem" }}>Thank you for reaching out. We&apos;ll respond to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="name">Full Name *</label>
                                            <input
                                                id="name"
                                                className="form-input"
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                            {errors.name && <div style={{ color: "#dc2626", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.name}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="email">Email Address *</label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="form-input"
                                                placeholder="john.doe@company.com"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                            {errors.email && <div style={{ color: "#dc2626", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.email}</div>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="phone">Phone Number</label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                className="form-input"
                                                placeholder="+91 12345 67890"
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="subject">Subject</label>
                                            <input
                                                id="subject"
                                                className="form-input"
                                                placeholder="Tally ERP Enquiry"
                                                value={form.subject}
                                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            className="form-input"
                                            rows={5}
                                            placeholder="Tell us about your business needs..."
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            style={{ resize: "vertical" }}
                                        />
                                        {errors.message && <div style={{ color: "#dc2626", fontSize: "0.8rem", marginTop: "0.25rem" }}>{errors.message}</div>}
                                    </div>

                                    {status === "error" && (
                                        <div style={{
                                            display: "flex", gap: "0.5rem", alignItems: "center",
                                            background: "#fef2f2", border: "1px solid #fca5a5",
                                            borderRadius: "0.5rem", padding: "0.75rem 1rem",
                                            marginBottom: "1rem", color: "#b91c1c", fontSize: "0.9rem"
                                        }}>
                                            <AlertCircle size={16} />
                                            Failed to send. Please try again or email us directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        disabled={status === "loading"}
                                        style={{ width: "100%", justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
                                    >
                                        {status === "loading" ? "Sending..." : <><Send size={16} /> Send Message</>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
