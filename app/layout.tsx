import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Madiot",
  description:
    "Développeur front-end spécialisé dans la création de sites web réactifs et modernes. J'utilise React, Next.js, TypeScript ainsi que Wordpress pour donner vie à vos applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
            <div className="max-w-7xl w-full">
              <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
              </LanguageProvider>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
