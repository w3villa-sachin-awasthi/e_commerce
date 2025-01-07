import React from 'react'
import Header from './Components/Header';
import Navbar2 from './Components/Navbar2';
import HeroSection from './Components/HeroSection';
import Component4 from './Components/Component4';
import CategorySection from './Components/CategorySection';
import Feature from './Components/Feature';
function App() {
  return (
    <div className='min-h-screen p-0 m-0 box-border  bg-slate-50 w-full text-slate-950  '>
     <Header></Header>
     <Navbar2/>
     <HeroSection/>
     <Component4/>
     
     <Feature/> 
     <CategorySection/>
    </div>
  )
}

export default App;