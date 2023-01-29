import React from 'react'
import './Top.css'
import Avatar from '@mui/material/Avatar'
import RatingIcon from '../IconItem/Rating/RatingIcon'
import Footer from '../Footer/Footer'
function Top(props) {
  return (
  <div className='Main_container'>
    <div className='top_container'>
        <div className='top_head_container'>
         {props.image}
         <div className='top_middle_container'>
            <div className='left_middle'>
            <h3 className='detail'>{props.desc}
            </h3>
            </div>
            <div className='right_middle'>
                <h3>$3.99</h3>
                <p>$3.99</p>
                </div>
            </div>
            <div className='top_second_middle_container'>
              < div className='left_second_middle'>
             <Avatar  style={{background:"transparent", border:'3px solid red'}}></Avatar>
             <Avatar  style={{background:"transparent", border:'3px solid blue'}}></Avatar>
              </div>
              <div className='right_second_middle'>
             <Avatar style={{background:"transparent", color:'black', border:'1px solid '}}>S</Avatar>
             <Avatar style={{background:"transparent", color:'black', border:'1px solid '}}>L</Avatar>
             <Avatar style={{background:"transparent", color:'black', border:'1px solid '}}>M</Avatar>
             </div>
            </div>
            <div className='top_bottom_container'>
            <div className='left_bottom'>
<RatingIcon/>
            </div>
            <div className='right_bottom'>
                <h3>BUY +</h3>
            </div>
            </div>


        
         

        </div>
    </div>
    <div className='bot_container'>
      <Footer decs2={props.desc2} brand={props.brand}/>
    </div>
    </div>
  )
}

export default Top
