import React from 'react'
import Header from './Components/Header';
import Navbar2 from './Components/Navbar2';
import HeroSection from './Components/HeroSection';
import Component4 from './Components/Component4';
import CategorySection from './Components/CategorySection';
import Feature from './Components/Feature';
import FeaturedCatergory from './Components/FeaturedCatergory';
import Brand from './Components/Brand';
import Gallery from './Components/Gallery';
import Blog from './Components/Blog';
import People from './Components/People';
import Viewed from './Components/Viewed';
import Social from './Components/Social';
import Footer from './Components/Footer';
import Info from './Components/Info';
import HeroSection2 from './Components/HeroSection2';
import Payment from './Components/Payment';
function App() {
  return (
    <div className='min-h-screen p-0 m-0 box-border  bg-slate-50 w-full text-slate-950  '>
      <Info/>
     <Header></Header>
     <Navbar2/>
     <HeroSection2/>
     {/* <HeroSection/> */}
     <Component4/>
     
     <Feature/> 
     <CategorySection/>
     <FeaturedCatergory/>
     <Brand/>
     <Gallery/>
     <Blog/>
     <People/>
     <Viewed/>
     <Social/>
     <Footer/>
     <Payment/>
    </div>
  )
}

export default App;