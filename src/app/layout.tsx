import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "@/lib/Provider";
import { ContextProvider } from "@/components/Contexts/ContextProvider";
import LayoutWrapper from "@/components/Layout/LayoutWrapper";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Express Drop",
  description:
    "Express Drop is a fast and reliable logistics company. We ensure swift and secure transport of packages, offering exceptional service to meet your delivery needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Provider>
          <ContextProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
          </ContextProvider>
        </Provider>
      </body>
    </html>
  );
}
