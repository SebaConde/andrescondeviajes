import type { Metadata } from "next";
import { Funnel_Sans} from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Andrés Conde Viajes",
  description: "Sitio web de la empresa de transportes Andrés Conde Viajes, hecha con next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${funnelSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
