import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider from "@/lib/query-client-provider";
import SessionProvider from "@/lib/session-provider";
import ThemeProvider from "@/app/_common/components/theme_provider";
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gmi",
  description: "Gmi by andrianiainafn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className }>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <QueryClientProvider>
          <SessionProvider>
            {children}
            <Toaster/>
          </SessionProvider>
        </QueryClientProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
