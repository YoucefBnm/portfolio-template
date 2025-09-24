import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/sections/header";
import { Footer } from "@/sections/footer";
import { ThemeProvider } from "next-themes";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Template",
  description: "A portfolio template to showcase your work and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${fontSans.variable} ${geistMono.variable} antialiased`}
        >
           <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
        >
            <Header />
              {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>

  );
}
