
import { useState, useEffect } from "react"

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY})
      setPosition({ x: clientX, y: clientY})
    }

    if (enabled) {
      console.log('pointer move', handleMove)
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: '0.8',
      pointerEvents: 'none',
      left: -25,
      top: -25,
      width: 50,
      height: 50,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}></div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </>
  )
}


function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
