import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import devlAnimation from '../../animation/dev.json'
import './hero.css'

export default function Hero() {
  return (
    <section className='hero flex'>
      <div className="left-section  "> 
        <div className="parent-avatar flex">
          <motion.img 
            initial={{transform:"scale(0)"}}
            animate={{transform:"scale(1)"}}
            transition={{damping:5 , type:"spring" , stiffness :100 }}
            src="./me.png" alt=""
            className='avatar'
            />
          <div className='icon-verified'></div>
        </div>
        <motion.h1 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:3}}
        
        className='title'>
          softwer design , full stack Devloper
        </motion.h1>
        <p className='sub-title'>
        i'm mohame bouchkouj my age is 23 yers old full stack developer i proficient in a wide range of programming languages, frameworks, and technologies used in web development. On the front-end side, im is skilled in HTML, CSS, and JavaScript, which im use to create the visual and interactive elements of websites or web applications. am is knowledgeable about front-end frameworks and libraries such as React.js,  which i leverage to build dynamic and responsive user interfaces.
          </p>
          <div className="icons flex">
            <div className="icon icon-facebook"></div>
            <div className="icon icon-twitter"></div>
            <div className="icon icon-instagram"></div>
            <div className="icon icon-github"></div>
            <div className="icon icon-linkedin2"></div>
            <div className="icon"></div>
          </div>
      </div>


      <div className="right-section animation ">
        <Lottie loop={true} animationData={devlAnimation} 
        className="dev"/></div>
    </section>
  )
}
