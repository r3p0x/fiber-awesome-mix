import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { PointLight as PointLightType, PointLightHelper } from 'three'

const PointLight = () => {
  const lightRef = useRef<PointLightType>(null)
  const helperRef = useRef<PointLightHelper | null>(null)

  useFrame(() => {
    if (helperRef.current) {
      helperRef.current.update()
    }
  })

  return (
    <>
      <pointLight
        ref={lightRef}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        position={[0, 10, 0]}
        intensity={100}
      />
      {lightRef.current && (
        <primitive
          object={
            helperRef.current || new PointLightHelper(lightRef.current, 1)
          }
          ref={helperRef}
        />
      )}
    </>
  )
}

export default PointLight
