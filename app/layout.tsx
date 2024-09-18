import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/home/navbar/ResponsiveNavbar";
import { ModalProvider } from "@/components/home/shared/modal/provider";
import ToastProvider from "@/providers/ToastProvider";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titan WebDev Portafolio",
  description: "WebDev Portafolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ModalProvider>
        <body className={`${font.className} bg-slate-950`}>
          <ResponsiveNavbar />
          <ToastProvider/>
          {children}
        </body>
      </ModalProvider>
    </html>
  );
}
