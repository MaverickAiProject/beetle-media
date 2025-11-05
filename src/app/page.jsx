// app/page.jsx
export const revalidate = 30;
import Footer from "@/components/website/common/Footer";
import NavBar from "@/components/website/common/Navbar";
import Contact from "@/components/website/home/Contact";
import FAQSection from "@/components/website/home/FAQ";
import HeroSection from "@/components/website/home/HeroSection";
import HeroSection2 from "@/components/website/home/HeroSection2";
import ServicesSection from "@/components/website/home/ServicesSection";
import Testimonials from "@/components/website/home/Testimonials";
import { getTestimonialsData } from "@/lib/main/getStaticData";

export default async function Home() {
  const data = await getTestimonialsData({ isVisible: true, limit: 3, page: 1 })

    const testimonials = data?.testimonials?.length > 0 ? data.testimonials : [
        {
            userName: 'Arjun Mehta',
            designation: 'Film Producer',
            company: 'Vision Studios',
            imageURL: '/avatars/arjun.png',
            message:
                'The OTT platform they built for us completely transformed how we release content. Smooth performance, custom branding, and fantastic support!',
        },
        {
            userName: 'Riya Sharma',
            designation: 'Content Creator',
            company: 'Riya Originals',
            imageURL: '/avatars/riya.png',
            message:
                'Publishing my series on their platform was effortless. The interface is clean, streaming is flawless, and monetization options are flexible.',
        },
        {
            userName: 'Karan Patel',
            designation: 'Startup Founder',
            company: 'StreamCore',
            imageURL: '/avatars/karan.png',
            message:
                'Their OTT development service helped us launch globally within weeks. Highly scalable and visually stunning — truly professional work!',
        },
    ]

  return (
    <div className="">
    <NavBar/>
      <div className="pt-10">
        <HeroSection/>
        <HeroSection2/>
        <ServicesSection/>
        <FAQSection/>
        <Testimonials testimonials={testimonials}/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}