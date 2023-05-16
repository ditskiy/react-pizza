import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingPizza() {
  return (
    <ContentLoader 
    className='pizza-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="139" cy="138" r="138" /> 
    <rect x="1" y="284" rx="2" ry="2" width="280" height="25" /> 
    <rect x="1" y="320" rx="9" ry="9" width="280" height="82" /> 
    <rect x="2" y="430" rx="2" ry="2" width="88" height="27" /> 
    <rect x="125" y="410" rx="26" ry="26" width="151" height="44" />
  </ContentLoader>
  )
}

export default LoadingPizza;