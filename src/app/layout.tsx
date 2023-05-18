import Navbar from "@/components/Navbar";
import Footer from "@components/Footer";
import { Inter } from "next/font/google";
import "@styles/globals.css"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} light`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
