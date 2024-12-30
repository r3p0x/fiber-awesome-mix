import React from 'react'
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing'
import { Tree } from './Tree'
import { useGlobalState } from '@/context/GlobalStateContext'

interface Props {
  id: number
  position: {
    x: number
    z: number
  }
  type: 'tree'
}

const Object = (props: Props) => {
  const { id, position, type } = props
  const { state } = useGlobalState()

  const isSelected = state.selected === id

  const renderObject = {
    tree: <Tree number={id} defaultPosition={position} />,
  }

  return (
    <Selection>
      <EffectComposer multisampling={8} autoClear={false}>
        <Outline
          blur
          // @ts-ignore
          visibleEdgeColor={isSelected ? 'blue' : 'white'}
          edgeStrength={100}
          width={5000}
        />
        {renderObject[type]}
      </EffectComposer>
    </Selection>
  )
}

export default Object
