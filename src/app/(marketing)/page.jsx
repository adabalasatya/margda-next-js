
import Navbar from "@/components/HomePage/Navbar";
import HeroSection from "@/components/HomePage/HeroSection";
import BusinessOperationsTabs from "@/components/HomePage/BusinessOperations";
import MargdaWorkplaceAdvantage from "@/components/HomePage/Advantage";
import Footer from "@/components/HomePage/Footer";


export default function HomePage() {
  return (
    <>
    <Navbar/>
     <HeroSection/>
     <BusinessOperationsTabs/>
     <MargdaWorkplaceAdvantage/>
     <Footer/>

    </>
  );
}