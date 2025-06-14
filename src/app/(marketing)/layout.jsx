import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}