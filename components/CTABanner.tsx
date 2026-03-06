import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
    return (
        <section style={{
            background: "linear-gradient(135deg, #5C2560 0%, #8A3E8A 100%)",
            padding: "5rem 0",
            position: "relative",
            overflow: "hidden"
        }}>
            <div style={{
                position: "absolute", inset: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
            }} />
            <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
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
                    marginBottom: "1.5rem",
                    border: "1px solid rgba(255,255,255,0.2)"
                }}>Ready to Get Started?</span>

                <h2 style={{
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                    fontWeight: 900,
                    color: "white",
                    marginBottom: "1.25rem",
                    lineHeight: 1.2
                }}>
                    Let&apos;s Transform Your Business Together
                </h2>
                <p style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1.1rem",
                    maxWidth: 560,
                    margin: "0 auto 2.75rem",
                    lineHeight: 1.7
                }}>
                    Contact our team today for a consultation and discover how Fortune Technosys can streamline your operations.
                </p>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/contact" className="btn-primary" style={{ background: "white", color: "var(--primary)", borderColor: "white", fontSize: "1rem", padding: "0.875rem 2rem" }}>
                        <Phone size={16} />
                        Contact Us Now
                    </Link>
                    <Link href="/services" className="btn-outline-white" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
                        Explore Services <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
