import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zephyr",
  description: "A Real Estate Maestro",
};

export default function RootLayout({ children }) {
  
  return (
  
    <html lang="en">
   
      <body className={inter.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
