import ClientInit from '@/components/ClientInit'
import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import MobileMenu from '@/components/MobileMenu'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import InteriorSection from '@/components/InteriorSection'
import ProjectsSection from '@/components/ProjectsSection'
import UpcomingSection from '@/components/UpcomingSection'
import ServicesSection from '@/components/ServicesSection'
import TimelineSection from '@/components/TimelineSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <ClientInit />
      <Cursor />
      <Loader />
      <MobileMenu />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <InteriorSection />
      <ProjectsSection />
      <UpcomingSection />
      <ServicesSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
