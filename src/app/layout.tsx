"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [state, setState] = useState(0);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <div className="m-auto mt-10 bg-slate-600 text-white p-4 w-1/4">
          <p className="text-center">Count Layout: {state}</p>
          <button className="bg-green-600 py-1 px-4" onClick={() => setState(state + 1)}>Increment</button>
        </div>
      </body>
    </html>
  );
}
