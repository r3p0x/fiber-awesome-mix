'use client'

import { useGlobalState } from '@/context/GlobalStateContext'
import React from 'react'
import { DoubleSide } from 'three'

const Area = () => {
  const { state } = useGlobalState()

  return (
    <group>
      <mesh
        receiveShadow
        position={[0, -0.2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[state.length, state.width, 0.2]}
      >
        <boxGeometry />
        <meshStandardMaterial color="green" side={DoubleSide} />
      </mesh>
      <mesh
        position={[0, -0.4, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[state.length, state.width, 0.2]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <mesh
        position={[0, -0.8, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[state.length, state.width, 0.6]}
      >
        <boxGeometry />
        <meshStandardMaterial color="#5C4033" side={DoubleSide} />
      </mesh>
    </group>
  )
}

export default Area
