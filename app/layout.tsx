import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import ThemeProvider from "@/provider/Theme-Provider";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Sai Pone Kha Aung",
  description: "Portfolio of Sai Pone Kha Aung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Toaster />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}