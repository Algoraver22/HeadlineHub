import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata = {
  title: "HeadlineHub | Global News by Anurag",
  description: "Stay updated with latest headlines from 100+ sources worldwide. Built by Anurag.",
  keywords: "news, headlines, global news, breaking news, Anurag, HeadlineHub",
  authors: [{ name: "Anurag" }],
  creator: "Anurag",
  publisher: "HeadlineHub",
  icons: {
    icon: "🌍",
  },
  openGraph: {
    title: "HeadlineHub | Global News by Anurag",
    description: "Stay updated with latest headlines from 100+ sources worldwide",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <Navbar />
          <main className="max-w-6xl mx-auto p-4 pt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
