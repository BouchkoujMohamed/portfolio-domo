
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react'
import './main.css'
import { myProjects } from './myProje';

export default function Main() {
  
  const [curentActive ,SetCurentActive] =useState("all")
  const [arry,setArry] = useState(myProjects);
  
  const hamdelClick = (catigoryButton) =>{
    SetCurentActive(catigoryButton)
    const newArray = myProjects.filter((item)=>{
      const myitem = item.catigory.find((it)=>{
        if (it===catigoryButton) {
          return it
        }else{

        }
      })
      return myitem 
    })
    setArry(newArray)
  }

  return (
    <main className='main flex'>
      <section className="left-section  flex">

        <button onClick={()=>{
              SetCurentActive("all")
              setArry(myProjects)
              }}className = {curentActive === "all" ?"active": null}>
                AllProjects
          </button>

          <button onClick={()=>{
            hamdelClick('html-css')
          }} className={curentActive ==="html-css"? "active":null}>HTML & CSS
        </button>

        <button onClick={()=>{
          hamdelClick("javascript")}} 
          className={curentActive === "javascript" ? "active":null}>Javascript
        </button>

        <button onClick={()=>{
          hamdelClick("react") 
            }} 
          className={curentActive === "react"?"active":null}>React
        </button>

        <button onClick={()=>{
          hamdelClick("laravel") 
          }}
          className = {curentActive === "laravel"?"active":null}>Laravel</button>

        <button onClick={()=>{
          hamdelClick("Node-Expres")}}
            className={curentActive === "Node-Expres"?"active":null}>Node Expres
          </button>

      </section>
      <section className="right-section flex">
        <AnimatePresence>

        
          {arry.map((item)=>{
            return (
            <motion.article 
            layout
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{type:"spring", damping: 10,stiffness:50}}
            key={item.imgPath} className="card">
              <img src={item.imgPath} alt="" />
              <div className="box">
                <h1 className='title'>{item.projetTitle} </h1>
                <p className='sub-title'>{item.description}
                </p>
                <div className="flex links">
                  <div className="left flex">
                    <div><a href="http://" className='icon-link'></a></div>
                    <div><a href="http://" className='icon-github'></a></div>
                  </div>
                  <a href="http://" className="right flex">
                    <p>more..</p>
                    <div className="icon-arrow-circle-right"/>
                  </a>
                </div>
              </div>
            </motion.article>
            
            )
          })}
        </AnimatePresence>
      </section>
    </main>
  )
}
