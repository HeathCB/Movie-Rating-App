
import React from 'react'
import { FaStar } from "react-icons/fa"

//reusable component for rating things, 1-5 scale of starts etc. 
const Stars = ( { count } ) => {
 
    const starCounter = () => {
        
      if( Number( count ) === 1 ){
          return ( <FaStar/> )
      }else if( Number( count ) === 2 ){
          return <div><FaStar/><FaStar/></div>
      }else if( Number( count ) === 3 ){
          return <div><FaStar/><FaStar/><FaStar/></div>
      }else if( Number( count ) === 4 ){
          return <div><FaStar/><FaStar/><FaStar/><FaStar/></div>
      }else if( Number( count ) === 5 ){
          return <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
      }
    }
    
    return (
        <div>
            { starCounter() }
            
        </div> 
    )
}

export default Stars;