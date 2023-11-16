import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Business from '@/components/sections/Business'
import Footer from '@/components/sections/Footer'
import styles from '@/styles/style'
import AppsGames from '@/components/sections/Apps&Games'
import Testimonials from '@/components/sections/Testimonials'

const inter = Inter({ subsets: ['latin'] })

export default function Products() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />

          <AppsGames />
        </div>
      </div>
      <div className={`flex justify-center items-center w-full`}>
        <Testimonials />
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
