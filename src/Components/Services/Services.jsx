import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from "framer-motion";
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { type: 'spring' ,duration: 1}
  return (
    <div className='services' id='Services'>
      {/* left side */}
      <div className="awesome">
        <span style = {{color: darkMode?'white':''}}>My Awesome</span>
        <span>services</span>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br />
        Amet nobis rerum quia.</span>
        <button className='button s-button'>Download CV</button>
        <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div 
        whileInView={{left:'24rem'}}
        initial={{ left: '35rem' }}
        transition={transition}
        style={{left:'24rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading={'Design'}
            detail = {"Figma ,Sketch, Photoshop, Adobe, Adobe xd"}
            />
        </motion.div>
        {/* second card */}
        <motion.div 
        whileInView={{left:'4rem'}}
        initial={{ left: '-10rem' }}
        transition={transition}
        style={{top:'12rem', left:'4rem'}}>
            <Card
                emoji={Glasses}
                heading={'Developer'}
                detail={'Html, Css, JavaScript, React, Sketch, Photoshop, Adobe'}
            />
        </motion.div>
        {/* 3rd card */}
        <motion.div 
        whileInView={{left:'22rem'}}
        initial={{ left: '35rem' }}
        transition={transition}
        style={{top:'19rem', left:'22rem'}}>
            <Card
                emoji={Humble}
                heading={'UI/UX'}
                detail= {'Lorem ipsum dolor sit amet consectetur Rahul kumar  '}
            />
        </motion.div>
        <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
      </div>
    </div>
  )
}

export default Services
