import React from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Payment from './Components/Payment';
import Info from './Components/Info';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className='min-h-screen p-0 m-0 box-border  bg-slate-50 w-full text-slate-950  '>
      <Info/>
      <Header></Header>
      <div className='min-h-[80vh]'>
      <Outlet/>
      </div>
      <Footer/>
      <Payment/>
    </div>
  )
}

export default App;