'use client'

import { CONFIG } from '@/config'
import React, { createContext, useContext, useState, ReactNode } from 'react'

// Define the shape of your state
interface State {
  length: number
  width: number
}

// Create the context
const GlobalStateContext = createContext<
  | { state: State; setState: React.Dispatch<React.SetStateAction<State>> }
  | undefined
>(undefined)

// Create the provider component
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<State>({
    length: CONFIG.area.length,
    width: CONFIG.area.width,
  })

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

// Custom hook to use the GlobalStateContext
export const useGlobalState = () => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider')
  }
  return context
}
