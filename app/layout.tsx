import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeBin",
  description: "Share your code snippets easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/code-bin/favicon.png" />
      <body className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">{children}</main>

        <footer className="text-center py-4 mt-auto text-sm">
          <p>
            2024 © developed by{" "}
            <a
              href="https://github.com/hakanotal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              hakan
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
