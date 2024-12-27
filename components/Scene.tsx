"use client"

import { Canvas } from "@react-three/fiber"
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import Area from "./Area"
import { Tree } from "./Tree"

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh" color="red">
      <ambientLight />
      <axesHelper />
      <PerspectiveCamera position={[2,2,2]} makeDefault />
      <Tree />
      <Area />
      <OrbitControls />
    </Canvas>
  )
}
