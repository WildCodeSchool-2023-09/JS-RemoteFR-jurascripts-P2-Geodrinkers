import { useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";
import earthTexture from "../assets/img/earth.jpg";
import IconPaul from "./IconsDatas/IconPaul";
import IconBenoit from "./IconsDatas/IconBenoit";
import IconJL from "./IconsDatas/IconJL";
import IconAlexandre from "./IconsDatas/IconAlexandre";
import IconAlexis from "./IconsDatas/IconAlexis";
import IconAlhassane from "./IconsDatas/IconAlhassane";
import IconCedric from "./IconsDatas/IconCedric";
import IconCharles from "./IconsDatas/IconCharles";
import IconChristopher from "./IconsDatas/IconChristopher";
import IconJordan from "./IconsDatas/IconJordan";
import IconKevin from "./IconsDatas/IconKevin";
import IconPras from "./IconsDatas/IconPras";
import IconSandrine from "./IconsDatas/IconSandrine";
import IconXavier from "./IconsDatas/IconXavier";
import IconCaly from "./IconsDatas/IconCaly";
import IconMaxence from "./IconsDatas/IconMaxence";
import IconNelson from "./IconsDatas/IconNelson";
import IconSuzy from "./IconsDatas/IconSuzy";
import IconVal from "./IconsDatas/IconVal";
import IconDidier from "./IconsDatas/IconDidier";
import IconFred from "./IconsDatas/IconFred";

function Earth() {
  const texture = useLoader(THREE.TextureLoader, earthTexture);

  const calculatePositionPinMap = (radius, lat, lon) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return [x, y, z];
  };

  return (
    <group>
      <mesh>
        <sphereGeometry args={[15, 64, 64]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <IconPaul position={calculatePositionPinMap(15, 36.2048, 138.2529)} />
      <IconBenoit
        position={calculatePositionPinMap(15, -21.162455, 55.47192)}
      />
      <IconJL position={calculatePositionPinMap(15, 45.485087, -73.49067)} />
      <IconAlexandre
        position={calculatePositionPinMap(15, 41.116771, -7.758623)}
      />
      <IconAlexis position={calculatePositionPinMap(15, 25.7617, -80.1918)} />
      <IconAlhassane
        position={calculatePositionPinMap(15, -4.263359, 15.242885)}
      />
      <IconCedric position={calculatePositionPinMap(15, 60.390928, 5.326156)} />
      <IconCharles
        position={calculatePositionPinMap(15, 45.320434, 11.048833)}
      />
      <IconChristopher
        position={calculatePositionPinMap(15.05, 52.3555, -1.1743)}
      />
      <IconJordan
        position={calculatePositionPinMap(15.05, 48.780897, 32.2847)}
      />
      <IconKevin position={calculatePositionPinMap(15, 35.8617, 104.1954)} />
      <IconPras position={calculatePositionPinMap(15, 20.5937, 78.9629)} />
      <IconSandrine
        position={calculatePositionPinMap(15.05, 46.603354, 1.888334)}
      />
      <IconXavier
        position={calculatePositionPinMap(15, 36.166041, -115.153014)}
      />
      <IconCaly position={calculatePositionPinMap(15, 38.0918, -3.078231)} />
      <IconMaxence
        position={calculatePositionPinMap(15, 16.1922065, -61.27238249)}
      />
      <IconNelson
        position={calculatePositionPinMap(15, -8.759616, -63.931938)}
      />
      <IconSuzy position={calculatePositionPinMap(15, -33.867487, 151.20699)} />
      <IconVal
        position={calculatePositionPinMap(15, 35.901695, 127.73588949)}
      />
      <IconDidier
        position={calculatePositionPinMap(15, 37.5999937, 14.0153557)}
      />
      <IconFred position={calculatePositionPinMap(15, 50.06371, 14.399147)} />
    </group>
  );
}

function useResizePlanet() {
  const { size } = useThree();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(size.width < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size.width]);

  return isSmallScreen;
}

function PlanetModel() {
  const isSmallScreen = useResizePlanet();

  return (
    <group scale={isSmallScreen ? [1, 1, 1] : [2, 2, 2]}>
      <Earth />
    </group>
  );
}

function EarthCanvas() {
  return (
    <div className="space-ctn">
      <Canvas camera={{ fov: 75, near: 0.1, far: 500, position: [0, 20, 65] }}>
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
        <Stars />
        <PlanetModel />
        <ambientLight intensity={1.5} />
        <Preload all />
      </Canvas>
    </div>
  );
}

export default EarthCanvas;
