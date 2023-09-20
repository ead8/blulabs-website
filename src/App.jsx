import { About, CTA, Footer, Navbar, Hero, Services, Contact } from "./components";
import { motion, useViewportScroll } from "framer-motion"

const App = () => {
  const { scrollYProgress } = useViewportScroll();
  return (
  
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
  
      <motion.div style={{ opacity: scrollYProgress }} className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </motion.div>
      
      <motion.div style={{ opacity: scrollYProgress }} className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Services />
          <CTA />
          <Contact/>
          <Footer />
        </div>
      </motion.div>
    </div>
  )
}

export default App;
