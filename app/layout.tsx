// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { DataProvider } from "@/context/DataContext";
import Provider from "./provider";
import { metadata as metadataConfig } from "@/config/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = metadataConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <DataProvider>
            <Provider>
              <div className="app-main min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
                <div className="fixed max-sm:absolute top-0 left-0 bottom-0 right-0 glass-effect text-center"></div>
                {children}
              </div>
            </Provider>
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
