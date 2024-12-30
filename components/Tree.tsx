import { useRef, useState } from 'react'
import { Vector3 } from 'three'

import { Select } from '@react-three/postprocessing'
import { useDrag } from '@use-gesture/react'
import { useGlobalState } from '@/context/GlobalStateContext'

const SCALE = 0.75

type Props = {
  number: number
  defaultPosition: {
    x: number
    z: number
  }
}

export const Tree = (props: Props) => {
  const { defaultPosition, number } = props
  const { setState, state } = useGlobalState()
  const [hover, setHover] = useState(false)
  const ref = useRef()

  const [position, setPosition] = useState<Vector3>(
    new Vector3(defaultPosition.x, 1, defaultPosition.z)
  )

  const bind = useDrag(({ offset: [x, z], down }) => {
    setPosition(new Vector3(x / 10, 1, z / 10))
    setState({ ...state, isDragging: down })
  })

  const isSelected = state.selected === number

  return (
    <Select enabled={isSelected || hover}>
      <group
        // @ts-ignore
        ref={ref}
        {...props}
        {...bind()}
        onPointerEnter={() => {
          setHover(true)
        }}
        onPointerOut={() => {
          setHover(false)
        }}
        onClick={() => {
          setState({ ...state, selected: state.selected ? null : number })
        }}
        scale={[SCALE, SCALE, SCALE]}
        position={position}
      >
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.3, 3, 32]} />
          <meshStandardMaterial color="brown" />
        </mesh>

        <mesh castShadow position={[0, 2, 0]}>
          <sphereGeometry args={[1.8, 16, 16]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </Select>
  )
}
