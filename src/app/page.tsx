import Image from 'next/image'
import Link from 'next/link'
import LatestNews from '@/components/home/LatestNews'
import UpcomingEvents from '@/components/home/UpcomingEvents'
import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'

export default function Home() {
  return (
    <div className="space-y-12 py-8">
      <HeroSection />
      
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LatestNews />
          <UpcomingEvents />
        </div>
      </section>
      
      <QuickLinks />
    </div>
  )
}
