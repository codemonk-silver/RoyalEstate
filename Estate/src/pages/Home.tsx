import React from 'react'
import AboutUs from '../components/AboutUs'
import Project from '../components/Project'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <AboutUs />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home