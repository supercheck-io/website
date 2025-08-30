import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SuperCheck - Enterprise Test Automation & Monitoring Platform",
  description: "Empower development and SRE teams with SuperCheck's robust automation and monitoring solution. Features parallel test execution, multi-browser testing, real-time monitoring, and enterprise security for modern applications.",
  keywords: ["test automation", "monitoring", "SRE", "DevOps", "Playwright", "enterprise testing", "CI/CD", "quality assurance", "parallel execution", "multi-browser testing"],
  authors: [{ name: "SuperCheck Team" }],
  creator: "SuperCheck.io",
  publisher: "SuperCheck.io",
  metadataBase: new URL('https://supercheck.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "SuperCheck - Enterprise Test Automation & Monitoring Platform",
    description: "Empower development and SRE teams with SuperCheck's robust automation and monitoring solution. Features parallel test execution, multi-browser testing, real-time monitoring, and enterprise security.",
    url: "https://supercheck.io",
    siteName: "SuperCheck",
    images: [
      {
        url: "/optimized/supercheck-app.webp",
        width: 1920,
        height: 1080,
        alt: "SuperCheck App - Automation & Monitoring Dashboard Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperCheck - Enterprise Test Automation & Monitoring Platform",
    description: "Empower development and SRE teams with SuperCheck's robust automation and monitoring solution.",
    images: ["/optimized/supercheck-app.webp"],
    creator: "@supercheck_io",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light-theme"
          enableSystem
          disableTransitionOnChange
          themes={['light-theme', 'dark-theme', 'system']}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
