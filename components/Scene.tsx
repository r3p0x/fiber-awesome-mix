'use client'

import React from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import Area from './Area'
import Lights from './lights/Lights'
import Object from './Object'
import { useGlobalState } from '@/context/GlobalStateContext'

export default function Scene() {
  const { state } = useGlobalState()

  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh"
    >
      <axesHelper />
      <PerspectiveCamera position={[8, 8, 8]} makeDefault />
      <OrbitControls enabled={!state.isDragging} />
      <Lights />
      <Area />
      <Object id={1} position={{ x: 1, z: 1 }} type="tree" />
      <Object id={2} position={{ x: 4, z: 4 }} type="tree" />
    </Canvas>
  )
}
