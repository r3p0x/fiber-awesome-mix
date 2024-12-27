'use client'

import { useGlobalState } from '@/context/GlobalStateContext'
import React from 'react'
import { DoubleSide } from 'three'

const Area = () => {
  const { state } = useGlobalState()

  return (
    <mesh
      receiveShadow
      position={[0, -0.2, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={[state.length, state.width, 0.2]}
    >
      {/*
        The thing that gives the mesh its shape
        In this case the shape is a flat plane
      */}
      <boxGeometry />
      {/*
        The material gives a mesh its texture or look.
        In this case, it is just a uniform green
      */}
      <meshStandardMaterial color="green" side={DoubleSide} />
    </mesh>
  )
}

export default Area
