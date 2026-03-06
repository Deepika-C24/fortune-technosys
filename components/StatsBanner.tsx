"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
    { value: 13, suffix: "+", label: "Years in Business" },
    { value: 100, suffix: "+", label: "Happy Clients" },
    { value: 6, suffix: "", label: "Service Categories" },
    { value: 5, suffix: "★", label: "IndiaMart Rating" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started.current) {
                started.current = true;
                let start = 0;
                const step = target / 40;
                const timer = setInterval(() => {
                    start += step;
                    if (start >= target) { setCount(target); clearInterval(timer); }
                    else setCount(Math.floor(start));
                }, 40);
            }
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <div ref={ref} className="stat-number">{count}{suffix}</div>;
}

export default function StatsBanner() {
    return (
        <section style={{
            background: "linear-gradient(135deg, #5C2560 0%, #8A3E8A 100%)",
            padding: "4rem 0"
        }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                    {stats.map((s) => (
                        <div key={s.label} className="stat-card">
                            <Counter target={s.value} suffix={s.suffix} />
                            <div className="stat-label" style={{ color: "rgba(255,255,255,0.75)" }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
