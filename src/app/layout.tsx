"use client";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "./navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SessionProvider>
                    <Navbar />
                    {children}
                </SessionProvider>
            </body>
        </html>
    );
}
