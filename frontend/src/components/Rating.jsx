import React from 'react'
import { BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs';

const Rating = ({value,review}) => {
  return (
    <>
      {
        value >=1 ? <BsStarFill/> : value >= 0.5 ? <BsStarHalf/> : <BsStar/>
      }
      {
        value >=2 ? <BsStarFill/> : value >= 1.5 ? <BsStarHalf/> : <BsStar/>
      }
      {
        value >=3 ? <BsStarFill/> : value >= 2.5 ? <BsStarHalf/> : <BsStar/>
      }
      {
        value >=4 ? <BsStarFill/> : value >= 3.5 ? <BsStarHalf/> : <BsStar/>
      }
      {
        value >=5 ? <BsStarFill/> : value >= 4.5 ? <BsStarHalf/> : <BsStar/>
      }  
      <p>{review && review}</p>  
    </>
  )
}

export default Rating