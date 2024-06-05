import React from 'react'
import '../styles/Artboard.css'
import thomasimg from '../assets/pexels-ekaterina-12203460.png'
import thomosInnerImg from '../assets/pexels-anastasia-shuraeva-4406721.png'
import chierDoeImage from '../assets/pexels-genaro-servín-763210.png'
import andriaImage from "../assets/pexels-andrea-piacquadio-3771118.png"
import  ImageFour from "../assets/pexels-pixabay-164455.png"
const Artboard = () => {
  return (
    <>
      <div className='Art-board'>
      <div style={{display:'flex',justifyContent:'center'}}>
        <div className='Artist'> Artists</div>
        <div className='Photographer'>Photographers</div>
      </div>
        <div>
          <div className='art-content'>
              <img  src={thomasimg}/>
              <div className='Inner'>
                 <img className='inner-image' src={thomosInnerImg}/>
                  <div className='inner-info'>
                    <p className='inner-name'>Thomas Edward</p>
                    <p className='inner-username'>@thewildwithyou</p>
                  </div>
              </div>
          </div>
          <div className='art-content'>
              <img  src={chierDoeImage}/>
              <div className='Inner'>
                 <img className='inner-image' src={andriaImage}/>
                  <div className='inner-info'>
                    <p className='inner-name'>Thomas Edward</p>
                    <p className='inner-username'>@thewildwithyou</p>
                  </div>
              </div>
          </div>
          <div className='art-content'>
              <img  src={ImageFour}/>
              <div className='Inner'>
                 <img className='inner-image' src={thomosInnerImg}/>
                  <div className='inner-info'>
                    <p className='inner-name'>Thomas Edward</p>
                    <p className='inner-username'>@thewildwithyou</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Artboard
