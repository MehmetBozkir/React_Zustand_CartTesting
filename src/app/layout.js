import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "500",
  preload: false,
});

export const metadata = {
  title: "ReactCoffe Shop",
  description: "React Coffe Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gradient-to-r from-amber-200 to-amber-900">
      <body className={`antialiased  ${font.className}` } >
        <Navbar />
        <main className="mx-auto max-w-6xl" >{children}</main>

        <Footer />
      </body>
    </html>
  );
}
