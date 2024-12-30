import { CONFIG } from '@/config'
import { useGlobalState } from '@/context/GlobalStateContext'
import React from 'react'

const Infos = () => {
  const { state } = useGlobalState()
  const selectedObject = CONFIG.objects.find(
    (object) => object.id === state.selected
  )
  return (
    <div className="infos">
      <p>Infos</p>
      <p>{selectedObject?.id}</p>
      <p>{selectedObject?.type}</p>
    </div>
  )
}

export default Infos
