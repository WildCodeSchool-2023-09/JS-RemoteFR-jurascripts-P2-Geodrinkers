import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import PropTypes from "prop-types";
import CocktailCard from "../CocktailCard";

export default function IconSuzy({ position }) {
  const iconRef = useRef();
  const [cardCocktail, setCardCocktail] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./public/gltf/suzy.glb", (gltf) => {
      const icon = gltf.scene;

      icon.rotation.y = Math.PI / 2;

      if (iconRef.current) {
        iconRef.current.add(icon);
      }
    });
  }, []);

  useFrame(() => {
    if (iconRef.current) {
      iconRef.current.rotation.y += 0.01;
    }
  });

  const handleClick = () => {
    setCardCocktail(true);
  };

  const hideCard = () => {
    setCardCocktail(false);
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
      {cardCocktail && (
        <Html>
          <CocktailCard cocktailId="12618" onClose={hideCard} />
        </Html>
      )}
    </group>
  );
}

IconSuzy.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};
