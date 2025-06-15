
import Navbar from "@/components/HomePage/HomePageNavbar/page";
import HeroSection from "@/app/(marketing)/HeroSection/page";
import BusinessOperationsTabs from "@/app/(marketing)/BusinessOperations/page";
import MargdaWorkplaceAdvantage from "@/app/(marketing)/Advantage/page";
import Footer from "@/components/HomePage/HomepageFooter/page";


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