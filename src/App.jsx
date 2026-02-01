import Navbar   from './components/Navbar'
import Hero     from './sections/Hero'
import Stats    from './sections/Stats'
import Programs from './sections/Programs'
import Exercises from './sections/Exercises'
import Trainers from './sections/Trainers'
import Contact  from './sections/Contact'
import Footer   from './sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Stats />
        <Programs />
        <Exercises />
        <Trainers />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
