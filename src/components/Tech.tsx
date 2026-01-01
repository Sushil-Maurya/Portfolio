import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, View } from "@react-three/drei";

import { Ball } from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <Canvas
          className='w-full h-full fixed top-0 left-0 z-10'
          eventSource={document.getElementById("root")!}
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <View.Port />
          <Preload all />
        </Canvas>,
        document.body
      )}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name} title={technology.name}>
            <View className='w-full h-full'>
              <Suspense fallback={null}>
                <Ball imgUrl={technology.icon} />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </View>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
