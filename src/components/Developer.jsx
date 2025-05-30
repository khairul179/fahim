import React, { useEffect, useRef, useMemo, Suspense } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  // Safely load FBX animations
  const idle = useFBX('/models/animations/idle.fbx');
  const salute = useFBX('/models/animations/salute.fbx');
  const clapping = useFBX('/models/animations/clapping.fbx');
  const victory = useFBX('/models/animations/victory.fbx');

  const animations = useMemo(() => {
    const rename = (clip, name) => {
      if (clip && clip.animations && clip.animations[0]) {
        clip.animations[0].name = name;
        return clip.animations[0];
      }
    };
    return [
      rename(idle, 'idle'),
      rename(salute, 'salute'),
      rename(clapping, 'clapping'),
      rename(victory, 'victory'),
    ].filter(Boolean);
  }, [idle, salute, clapping, victory]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions?.[animationName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [actions, animationName]);

  return <primitive ref={group} object={clone} {...props} />;
};

// Preload models
useGLTF.preload('/models/animations/developer.glb');
useFBX.preload('/models/animations/idle.fbx');
useFBX.preload('/models/animations/salute.fbx');
useFBX.preload('/models/animations/clapping.fbx');
useFBX.preload('/models/animations/victory.fbx');

export default Developer;
