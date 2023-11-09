import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import PropTypes from "prop-types";

export default function IconJordan({ position }) {
  const iconRef = useRef();
  const [cardCocktail, setCardCocktail] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./src/assets/gltf/jordan.glb", (gltf) => {
      const icon = gltf.scene;

      icon.rotation.y = Math.PI / 2;

      if (iconRef.current) {
        iconRef.current.add(icon);
      }
    });
  });

  useFrame(() => {
    if (iconRef) {
      iconRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setCardCocktail(!cardCocktail);
  };

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <group scale={2.8} dispose={null} position={position}>
      <mesh
        ref={iconRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
    </group>
  );
}
IconJordan.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
