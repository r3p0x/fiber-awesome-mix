'use client'

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Area from './Area'
import { Tree } from './Tree'
import { CONFIG } from '@/config'
import React from 'react'

export default function Scene() {
  const [dragging, setDragging] = React.useState(false) // State to track dragging

  const renderTrees = () => {
    const objects = CONFIG.objects.map((object) => {
      return <Tree key={object.id} setDragging={setDragging} />
    })
    return <>{objects}</>
  }

  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative h-svh"
      color="red"
    >
      {/* Ambient light to brighten the entire scene */}
      <ambientLight intensity={0.4} />

      {/* Directional light to simulate sunlight */}
      <directionalLight
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        position={[5, 5, 5]}
        intensity={1.5}
      />

      {/* Point light to illuminate objects from a specific point */}
      <pointLight
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        position={[0, 3, 3]}
        intensity={5}
      />
      <axesHelper />
      <PerspectiveCamera position={[8, 8, 8]} makeDefault />
      {renderTrees()}
      <Area />
      <OrbitControls enabled={!dragging} />
    </Canvas>
  )
}
