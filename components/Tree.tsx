import { Select } from '@react-three/postprocessing'
import { useDrag } from '@use-gesture/react'
import { useRef, useState } from 'react'
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

  const ref = useRef()
  const [hovered, hover] = useState<boolean | null>(null)

  const [position, setPosition] = useState<Vector3>(
    new Vector3(defaultPosition.x, 1, defaultPosition.z)
  ) // Initial position [x, y, z]

  // Use the useDrag hook
  const bind = useDrag(({ offset: [x, z], down }) => {
    setPosition(new Vector3(x / 10, 1, z / 10)) // Update position based on drag offset
    setDragging(down)
    if (down) {
      hover(true)
    } else {
      hover(false)
    }
  })

  return (
    // @ts-ignore
    <Select enabled={hovered}>
      <group
        // @ts-ignore
        ref={ref}
        {...props}
        {...bind()}
        scale={[SCALE, SCALE, SCALE]}
        position={position}
      >
        {/* Tree Trunk */}
        <mesh
          // onPointerOver={() => hover(true)}
          // onPointerOut={() => hover(false)}
          castShadow
        >
          <cylinderGeometry args={[0.2, 0.3, 3, 32]} />
          {/* Adjusted trunk for a rounder look */}
          <meshStandardMaterial color="brown" />
        </mesh>

        {/* Leaves - Middle layer */}
        <mesh
          castShadow
          position={[0, 2, 0]}
          // onPointerOver={() => hover(true)}
          // onPointerOut={() => hover(false)}
        >
          <sphereGeometry args={[1.8, 16, 16]} />{' '}
          {/* Smaller, but still round */}
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </Select>
  )
}
