'use client'

import React from 'react'
import { DoubleSide } from "three"

const Area = () => {
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 0.1]}>
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