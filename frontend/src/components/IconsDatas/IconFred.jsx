/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html } from "@react-three/drei";
import cardsData from "../../datas/CardsData";

export default function IconFred(props) {
  const iconRef = useRef();
  const [cardCocktail, setCardCocktail] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load("./src/assets/gltf/fred.glb", (gltf) => {
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
    setCardCocktail(true);
  };

  const hideCard = () => {
    setCardCocktail(!cardCocktail);
  };

  return (
    <group scale={2.8} dispose={null} position={props.position}>
      <mesh
        ref={iconRef}
        onClick={handleClick}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      />
      {cardCocktail && (
        <Html>
          <div style={{ pointerEvents: "auto", cursor: "pointer" }}>
            <div className="card">
              <div className="svg-ctn">
                <svg
                  onClick={hideCard}
                  width="24px"
                  height="24px"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="84"
                    stroke="#FFF"
                    strokeWidth="18"
                  />
                  <path
                    d="M142.89 72.1208L115.015 99.9994L142.89 127.877C147.037 132.025 147.037 138.744 142.89 142.892C140.819 144.963 138.102 146 135.388 146C132.668 146 129.952 144.965 127.882 142.892L100 115.011L72.1207 142.891C70.0493 144.963 67.3328 146 64.6156 146C61.8992 146 59.1846 144.965 57.1113 142.891C52.965 138.745 52.965 132.026 57.1113 127.876L84.986 99.9991L57.1098 72.1208C52.9634 67.9745 52.9634 61.2538 57.1098 57.1074C61.2553 52.9642 67.972 52.9642 72.1191 57.1074L99.9999 84.9859L127.878 57.1074C132.026 52.9642 138.744 52.9642 142.889 57.1074C147.037 61.2538 147.037 67.9745 142.89 72.1208Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="card-header">
                <div className="img-ctn">
                  <img src={cardsData[0].picture} alt={cardsData[0].name} />
                </div>
              </div>
              <h1 className="title">{cardsData[0].title}</h1>
              <div className="description">{cardsData[0].description}</div>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}
