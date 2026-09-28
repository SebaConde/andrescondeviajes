import type { Metadata } from "next";
import { Funnel_Sans} from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";


const funnelSans = Funnel_Sans({
  variable: "--font-funnel-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    template: `%s | Andrés Conde Viajes` ,
    default: APP_NAME,
  },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL)
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
