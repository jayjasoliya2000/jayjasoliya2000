import React from 'react'
import image from './image.jpg'


export default function Resume() {
  return (
    <img src={image} alt='resume' style={{width: "50%", height: "50%", marginLeft : 350}} />
  )
}
