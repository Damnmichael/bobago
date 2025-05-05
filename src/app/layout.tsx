import type { Metadata } from "next";
import { Poppins, Baloo_2 } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boba Go - Premium Boba Delivery",
  description:
    "Get your favorite boba drinks delivered right to your doorstep. Order from the best vendors in town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${baloo2.className} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
