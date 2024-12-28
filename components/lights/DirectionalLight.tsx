import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import {
  DirectionalLightHelper,
  DirectionalLight as DirectionalLightType,
} from 'three'

const DirectionalLight = () => {
  const lightRef = useRef<DirectionalLightType>(null)
  const helperRef = useRef<DirectionalLightHelper | null>(null)

  useFrame(() => {
    if (helperRef.current) {
      helperRef.current.update()
    }
  })

  return (
    <>
      <directionalLight
        ref={lightRef}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        position={[5, 10, 5]}
        intensity={1.5}
      />
      {lightRef.current && (
        <primitive
          object={
            helperRef.current || new DirectionalLightHelper(lightRef.current, 1)
          }
          ref={helperRef}
        />
      )}
    </>
  )
}

export default DirectionalLight
