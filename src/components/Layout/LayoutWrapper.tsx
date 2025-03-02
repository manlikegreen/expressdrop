"use client";

import { usePathname } from "next/navigation";
import AltNavbar from "@/components/Navbar/AltNavbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith("/dashboard");

  return (
    <>
      {!hideHeaderFooter && <AltNavbar />}
      <aside className="fixed top-1/2 right-2 p-4 transform -translate-y-1/2 z-10 bg-brand rounded-2xl">
        <ThemeSwitch />
      </aside>
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
