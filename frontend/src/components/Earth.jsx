import { useState } from "react";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import earthTexture from "../../public/img/earth.jpg";
import iconData from "../datas/dataGen";
import IconMap from "./IconMap";
import Modal from "./Modal";

const calculatePositionPinMap = (radius, lat, lon) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return [x, y, z];
};

function Earth() {
  const texture = useLoader(THREE.TextureLoader, earthTexture);

  return (
    <mesh>
      <sphereGeometry args={[15, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function EarthCanvas() {
  const [selectIcon, setSelectIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setSelectIcon(iconName);
  };

  const handleModalClose = () => {
    setSelectIcon(null);
  };

  return (
    <div className="space-ctn">
      <Canvas camera={{ fov: 40, near: 0.1, far: 500, position: [0, 20, 65] }}>
        <Stars />
        <Earth />
        {iconData.map(({ name, coordinates }) => (
          <IconMap
            key={name}
            name={name}
            position={calculatePositionPinMap(15, ...coordinates)}
            onClick={() => handleIconClick(name)}
          />
        ))}
        <OrbitControls autoRotate autoRotateSpeed={0.3} />
        <ambientLight intensity={1.5} />
        <Preload all />
      </Canvas>
      {selectIcon && (
        <Modal selectIcon={selectIcon} onClose={handleModalClose} />
      )}
    </div>
  );
}
