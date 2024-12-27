import { useGlobalState } from '@/context/GlobalStateContext'
import React from 'react'

const Toolbar = () => {
  const { state, setState } = useGlobalState()

  return (
    <div className="toolbar">
      <div className="control">
        <p>Length</p>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, length: prev.length - 1 }))
          }
        >
          -
        </button>
        <span>{state.length}</span>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, length: prev.length + 1 }))
          }
        >
          +
        </button>
      </div>

      <div className="control">
        <p>Width</p>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, width: prev.width - 1 }))
          }
        >
          -
        </button>
        <span>{state.width}</span>
        <button
          onClick={() =>
            setState((prev) => ({ ...prev, width: prev.width + 1 }))
          }
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Toolbar
