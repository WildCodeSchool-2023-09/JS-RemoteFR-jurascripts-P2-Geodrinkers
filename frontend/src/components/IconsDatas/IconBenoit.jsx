/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function IconBenoit(props) {
  const iconRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./src/assets/gltf/benoit.glb", (gltf) => {
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

  return (
    <group scale={2.8} dispose={null} position={props.position}>
      <mesh
        ref={iconRef}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      />
    </group>
  );
}
