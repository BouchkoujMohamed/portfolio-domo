
import { useEffect } from 'react';
import { useState } from 'react'
import './Header.css'
export default function Header() {
  const [showModul , setShowModul]=useState(false);
  const [ithem , setIthem] = useState(localStorage.getItem("currentMod") ?? "dark");

  useEffect(()=>{
    if(ithem === "light"){
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }else{
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    }


    

  },[ithem])
  return (
    <header className='flex'>
      <button className='icon-menu menu' onClick={()=>{
        setShowModul(true)
      }} />
      <div/>
      <nav>
        <ul className='flex'>
          <li><a href="">about</a></li>
          <li><a href="">articles</a></li>
          <li><a href="">projects</a></li>
          <li><a href="">speaking</a></li>
          <li><a href="">contact</a></li>
        </ul>
      </nav>
      <button onClick={()=>{
          localStorage.setItem('currentMod' ,ithem==="dark"?"light":"dark")
          setIthem(localStorage.getItem('currentMod'))
          }
        }>
        
        {ithem ==="dark"?( <span className='icon-moon-o' ></span>):( <span className='icon-brightness-up' onClick={()=>{
        }
      }></span>)}



      </button>
      {showModul &&(
        <div className="fixed">
        <ul className='modul'>
          <li>
            <button className='icon-clear' onClick={()=>{
              setShowModul(false)
            }} />
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">articles</a>
          </li>
          <li>
            <a href="">projects</a>
          </li>
          <li>
            <a href="">speaking</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
      )}
      
    </header>
  )
}
