'use client'

import Infos from '@/components/ui/Infos'
import Toolbar from '@/components/ui/Toolbar'
import { useGlobalState } from '@/context/GlobalStateContext'
import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false })

export default function Home() {
  const { state } = useGlobalState()

  return (
    <main className="h-full">
      <Scene />
      <Toolbar />
      {state.selected && <Infos />}
    </main>
  )
}
