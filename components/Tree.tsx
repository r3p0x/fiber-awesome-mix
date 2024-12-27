import { CONFIG } from '@/config'
import { useDrag } from '@use-gesture/react'
import { useState } from 'react'
import { Vector3 } from 'three'

const SCALE = 0.75

type Props = {
  setDragging: (isDragging: boolean) => void
  defaultPosition: {
    x: number
    z: number
  }
}

export const Tree = (props: Props) => {
  const { setDragging, defaultPosition } = props

  const [position, setPosition] = useState<Vector3>(
    new Vector3(defaultPosition.x, 1, defaultPosition.z)
  ) // Initial position [x, y, z]

  // Use the useDrag hook
  const bind = useDrag(({ offset: [x, z], down }) => {
    setPosition(new Vector3(x / 10, 1, z / 10)) // Update position based on drag offset
    setDragging(down)
  })

  return (
    // @ts-ignore
    <group {...bind()} scale={[SCALE, SCALE, SCALE]} position={position}>
      {/* Tree Trunk */}
      <mesh castShadow>
        <cylinderGeometry args={[0.2, 0.3, 3, 32]} />
        {/* Adjusted trunk for a rounder look */}
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Leaves - Middle layer */}
      <mesh castShadow position={[0, 2, 0]}>
        <sphereGeometry args={[1.8, 16, 16]} /> {/* Smaller, but still round */}
        <meshStandardMaterial color="green" />
      </mesh>
    </group>
  )
}
