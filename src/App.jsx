import Header from "./components/1-header/Header"
import Hero from "./components/2-hero/Hero"
import Main from "./components/3-main/Main"
import Footer from "./components/5-footer/Footer"
import Contact from "./components/4-contact/Contact"
import { useState } from "react"
import { useEffect } from "react"
function App() {
  const [showButton ,setShowButton] = useState(false)
  useEffect(()=>{
    window.addEventListener("scroll" ,()=>{
      if(window.scrollY>340){
        setShowButton(true)
      }else{
        setShowButton(false)
      }
    })
  })

  return (
    <>
    <div id="up" className="content">
      < Header />
      <Hero/>
      <div className="divader"/>
      <Main/>
      <div className="divader"/>
      <Contact/>
      <div className="divader"/>
      <Footer/>
    </div>
    
      <a  style={{opacity:showButton? 1:0 }} href="#up" className="showbu" >
        <button className="icon-arrow-circle-up"></button>
      </a>

    
    
    </>
  )
}

export default App
