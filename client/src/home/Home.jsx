import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Counts from '../components/Counts'
import Calltoaction from '../components/Calltoaction'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    
    <Navbar/>
    <Hero/>
    <Services/>
    <Counts/>
    <Calltoaction/>
    <Contact/>
   
    </>
  )
}

export default Home