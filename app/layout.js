import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Global/Navbar";
import Footer from "./components/Global/Footer";



const poppins = Poppins({
  weight: ["100","200","300","400", "500", "600", "700", "800", "900"],
  subsets: ["latin"], // You can adjust subsets as needed
});

export const metadata = {
  title: "Zephyr",
  description: "A Real Estate Maestro",
};

export default function RootLayout({ children }) {
  
  return (
  
    <html lang="en">
   
      <body className={poppins.className}>
      <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
