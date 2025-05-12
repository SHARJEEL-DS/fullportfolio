import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatTest from "@/components/ChatTest"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sharjeel Sohail | Full Stack Developer",
  description: "Professional portfolio of Sharjeel Sohail, a full stack developer specializing in modern web technologies.",
  openGraph: {
    title: "Sharjeel Sohail | Full Stack Developer",
    description: "Professional portfolio of Sharjeel Sohail, a full stack developer specializing in modern web technologies.",
    url: "https://Sharjeel Sohail.dev",
    siteName: "Sharjeel Sohail Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sharjeel Sohail - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <ChatTest/>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
