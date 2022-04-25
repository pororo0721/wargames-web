import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne} from '../components/InfoSection/Data'
import Map from '../components/Map/Map';
import Products from '../components/Products'
import OpeningElement from '../components/OpeningHours'
import { hourObjOne } from '../components/OpeningHours/Data'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <Products />
    <Map />
    <OpeningElement {...hourObjOne}/>
    <Footer/>
 
   
    </>
  )
}

export default Home