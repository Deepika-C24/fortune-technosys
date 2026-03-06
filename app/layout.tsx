import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fortune Technosys | Tally ERP & IT Services, Bengaluru",
  description:
    "Fortune Technosys is an authorized Tally partner offering ERP implementation, payroll outsourcing, software development, and accounting services in Bengaluru, India.",
  keywords:
    "Fortune Technosys, Tally ERP, accounting software, Bengaluru, ERP implementation, payroll outsourcing",
  authors: [{ name: "Fortune Technosys" }],
  openGraph: {
    title: "Fortune Technosys | Tally ERP & IT Services",
    description: "Authorized Tally Partner offering ERP, accounting, and software solutions in Bengaluru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
