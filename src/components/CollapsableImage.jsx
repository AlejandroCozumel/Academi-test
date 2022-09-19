import React from 'react'
import proCase from "../images/zac-pro-case.jpg"
import proCaseInside from "../images/zac-pro-inside.png"

const Hero = () => {
  return (
    <bg-white>
      <header>IIIII</header>
      <css-pro>
        <css-title>
          Mac Pro
        </css-title>
        <css-case cursor>
          <img src={proCase} alt="mac pro case"  />
        </css-case>
        <css-inside>
          <img src={proCaseInside} alt="mac pro inside" />
        </css-inside>
      </css-pro>
    </bg-white>
  )
}

export default Hero