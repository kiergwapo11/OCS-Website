import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'

const COLORS = ['#E8A0A8', '#D46A7A', '#B83D4F']

function Blob({ color, position, scale = 1 }) {
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8} floatingRange={[-0.3, 0.3]}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} />
      <directionalLight position={[-3, 2, 2]} intensity={0.6} />
      <Blob color={COLORS[0]} position={[-1.8, 0.2, -1.5]} scale={0.7} />
      <Blob color={COLORS[1]} position={[1.5, -0.3, -1.2]} scale={0.85} />
      <Blob color={COLORS[2]} position={[0, 1, -1.8]} scale={0.55} />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-brand-cream" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
