import React from 'react'
import Accordian from './components/accordian/Accordian'
import Random from './components/randomColor/Random'
import Rating from './components/StarRating/Rating'
import Slider from './components/ImageSlider/Slider'
import LoadMore from './components/load-more-button/LoadMore'
import QCode from './components/qrGenerator/qCode'
import LightDarkMode from './components/light-dark-mode/LightDarkMode'

const App = () => {
  return (
    <div>
      {/* <Accordian/> */}
      {/* <Random/> */}
      {/* <Rating totalStars={10}/> */}
      {/* <Slider url={"https://picsum.photos/v2/list"} page={5} limit={15}/> */}
      {/* <LoadMore/> */}
      {/* <QCode/> */}
      <LightDarkMode/>
      
    </div>
  )
}

export default App
