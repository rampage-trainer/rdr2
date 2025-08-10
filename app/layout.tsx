import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rampage Trainer — RDR2 Beta",
  description: "Modern, minimal site for Rampage Trainer beta releases, downloads, and changelogs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <Header />
          {children}
          <footer className="border-t mt-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-muted-foreground flex items-center justify-between">
              <p>Project maintained by Rampage Dev</p>
              <p>
                {`Copyright ${new Date().getFullYear()} © L-Empire Inc.`}
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
