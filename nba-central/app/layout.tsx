import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NBA Stats & News",
  description: "Your ultimate destination for NBA news, stats, and updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">NBA Central</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-gray-200">Home</a>
              <a href="/teams" className="hover:text-gray-200">Teams</a>
              <a href="/schedule" className="hover:text-gray-200">Schedule</a>
              <a href="/stats" className="hover:text-gray-200">Team Stats</a>
              <a href="/compare" className="hover:text-gray-200">Compare Teams</a>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>© 2024 NBA Central.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
