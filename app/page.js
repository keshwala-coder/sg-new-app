import Highlights from "@/components/home/Highlights";
import NewsUpdates from "@/components/home/NewsUpdates";
import ServiceSection from "@/components/home/ServiceSection";

export default function Home() {
  return (
   <>
      <ServiceSection />
      <Highlights />
      <NewsUpdates />   
    </>
  );
}
