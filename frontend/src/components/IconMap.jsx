import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PropTypes from "prop-types";

export default function IconMap({ name, position, onClick }) {
  const iconRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(`/gltf/${name.toLowerCase()}.glb`, (gltf) => {
      const icon = gltf.scene;
      icon.rotation.y = Math.PI / 2;

      if (iconRef.current) {
        iconRef.current.add(icon);
      }
    });
  }, [name]);

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.01;
    }
  });

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <group
      ref={iconRef}
      scale={3.5}
      position={position}
      onClick={() => onClick(name)}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    />
  );
}

IconMap.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};
