import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Studio",
  description: "Modern blog management dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-50">
          <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400" />
                <div className="leading-tight">
                  <p className="text-sm font-medium text-slate-500">Workspace</p>
                  <p className="text-lg font-semibold text-slate-900">
                    Blog Studio
                  </p>
                </div>
              </div>

              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 sm:flex">
                <Link href="/" className="hover:text-slate-900">
                  Overview
                </Link>
                <Link href="/blogs" className="hover:text-slate-900">
                  Posts
                </Link>
                <Link href="/blogs/create" className="hover:text-slate-900">
                  New Post
                </Link>
              </nav>

            </div>
          </header>

          <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
