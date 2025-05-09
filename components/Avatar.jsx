import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Avatar(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/sai.glb");
  const { animations } = useFBX("animation/wave.fbx");
  const { animations: happy_idle } = useFBX("animation/happy.fbx");

  if (animations.length > 0) {
    animations[0].name = "Wave";
    happy_idle[0].name = "Happy";
  }

  const { actions } = useAnimations(animations, group);
  const { actions: happyActions } = useAnimations(happy_idle, group);

  useEffect(() => {
    if (actions["Wave"] && happyActions["Happy"]) {
      actions["Wave"].reset().play();
      actions["Wave"].setLoop(THREE.LoopOnce, 1);

      // Create a transition near the end of the wave animation
      const mixer = actions["Wave"].getMixer();
      const handleAnimationFinished = (e) => {
        if (e.action === actions["Wave"]) {
          happyActions["Happy"].reset().fadeIn(0.5).play();
          happyActions["Happy"].setLoop(THREE.LoopRepeat, Infinity);
          actions["Wave"].fadeOut(0.5);
        }
      };

      mixer.addEventListener("finished", handleAnimationFinished);

      return () => {
        mixer.removeEventListener("finished", handleAnimationFinished);
      };
    }
  }, [actions, happyActions]);

  const handleClick = () => {
    // Reset and play the wave animation
    if (actions["Wave"]) {
      // Stop happy animation if it's playing
      if (happyActions["Happy"] && happyActions["Happy"].isRunning()) {
        happyActions["Happy"].fadeOut(0.5);
      }

      actions["Wave"].reset().play();
      actions["Wave"].setLoop(THREE.LoopOnce, 1);
    }
  };

  return (
    <group
      onClick={handleClick}
      {...props}
      ref={group}
      dispose={null}
      userData={{ clickable: true }}
    >
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sai.glb");
