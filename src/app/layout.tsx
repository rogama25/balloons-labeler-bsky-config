import type {Metadata} from "next";
import "./globals.css";
import {NavBar} from "@/components/NavBar";

export const metadata: Metadata = {
    title: "Globitos settings",
    description: "Set up your birthday settings for bluesky",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en" className="w-full">
        <body className="bg-gray-900 text-white flex flex-col">
            <NavBar/>
            {children}
        </body>
        </html>
    );
}
