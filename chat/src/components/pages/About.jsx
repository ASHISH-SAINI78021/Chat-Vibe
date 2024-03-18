import React from 'react'
import Layout2 from '../Layout/Layout2'
import { useTypewriter , Cursor} from 'react-simple-typewriter'
import useAbout from '../../hooks/useAbout'


const About = () => {
  const {about1} = useAbout();
  const {about2} = useAbout();
  const [text1] = useTypewriter({
    words: [about1],
    loop: 1 , 
    typeSpeed: 0,
  });
  const [text2] = useTypewriter({
    words: [about2],
    loop: 1 , 
    typeSpeed: 0,
    delaySpeed: 3000
  });
  return (
    <Layout2>
      <div className='about'>
      <h1 style={{marginBottom: "2rem"}}>Welcome to ChatVibe!</h1>
      <h6 style={{marginBottom: "2rem"}}>{text1} <Cursor cursorColor='white' /><span>
      <br /><br />
      <h2>Why ChatVibe?</h2>
      <h6>{text2}<Cursor cursorColor='white' /></h6>
      
      </span></h6>
      
      </div>
      
     
    </Layout2>
  )
}

export default About
