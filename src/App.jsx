import Counts from './components/Counts/Counts'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import NavbarMessage from './components/NavbarMessage/NavbarMessage'
import Services from './components/Services/Services'
import Subjects from './components/Subjects/Subjects'
import Testimonials from './components/Testimonials/Testimonials'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'

const App = () => {
  return (
    <main>
      <Navbar />
      <NavbarMessage />
      <Hero />
      <Counts />
      <WhyChooseUs />
      <Services />
      <Subjects />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App