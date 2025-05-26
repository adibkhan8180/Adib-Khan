import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import BackgroundGradient from "@/components/background-gradient"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adib Khan | Full Stack MERN Developer",
  description:
    "Portfolio of Adib Khan, a Full Stack Developer specializing in MongoDB, Express, React.js, Next.js, React Native and Node.js with 1+ years of experience at TruScholar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <BackgroundGradient />
          <Navbar />
          {children}
          <footer className="py-6 border-t">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Adib Khan. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
