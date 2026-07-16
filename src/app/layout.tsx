import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AppEntryFlow } from "@/components/AppEntryFlow";
import { LanguageProvider } from "@/components/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Green Start | Fresh Sprouts Delivered Daily",
  description:
    "100% fresh, organic sprouts delivered daily from our farm to your home. Green Gram, Black Chickpea, Cowpea and more. Choose your plan or shop individual packs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#f8faf6] font-sans">
        <LanguageProvider>
          <AppEntryFlow>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AppEntryFlow>
        </LanguageProvider>
      </body>
    </html>
  );
}
