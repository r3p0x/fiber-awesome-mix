import React from 'react'
import PointLight from './PointLight'

const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.6} />
      {/* <DirectionalLight /> */}
      <PointLight />
    </group>
  )
}

export default Lights
