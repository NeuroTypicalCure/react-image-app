import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function Plane(props) {
  // This reference will give us direct access to the mesh
  const src = `http://localhost:5000/metMuseum/img/${props.item.primaryImage}`;
  const texture_1 = useLoader(TextureLoader, src);
  const ref = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    ref.current.position.x += -0.01;
    ref.current.rotation.y += 4 * (Math.sin(ref.current.position.x) / 4000);
  });

  return (
    <mesh
      position={props.position}
      rotation={props.rotation}
      ref={ref}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <planeGeometry args={[4, 4, 4]} attach="geometry" />
      <meshStandardMaterial map={texture_1} attach="material" />
    </mesh>
  )
}

export default function Canvas3D(props) {
  console.log(props.items);
  return (
    <Canvas>
      <ambientLight intensity={0.04} />
      <spotLight position={[10, 10, 30]} angle={0.15} penumbra={1} intensity={0.40}/>
      <pointLight position={[0, 0, 0]} />
      <Suspense fallback={null}>
        {props.items&&
            props.items.map((item,index) => {
                return <Plane key={item.primaryImage} position={[5*index, 0, 0.5]} rotation={[-0.01, 0, 0]} item={item}/>
            })
        }
      </Suspense>
    </Canvas>
  )
}