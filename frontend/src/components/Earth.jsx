/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-useless-fragment */
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import earthTexture from "../assets/img/earth.jpg";

function Earth() {
  const texture = useLoader(THREE.TextureLoader, earthTexture);
  return (
    <>
      <group>
        <mesh>
          <sphereGeometry args={[15, 64, 64]} />
          <meshStandardMaterial map={texture} />
        </mesh>
      </group>
    </>
  );
}

export default function EarthCanvas() {
  return (
    <div className="space-ctn">
      <Canvas camera={{ fov: 60, near: 0.1, far: 500, position: [0, 20, 65] }}>
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
        <Stars />
        <Earth />
        <ambientLight intensity={1.5} />
        <Preload all />
      </Canvas>
    </div>
  );
}
