import './index.js'
import styles from './index.js'
import { Billing, Business, CardDeal, Hero, Navbar, Stats, Testimonials, Footer } from './components'
import Cta from './components/CTA.jsx'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Cta />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App