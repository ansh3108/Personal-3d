import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

import planeScene from '../assets/3d/plane.glb';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const action = actions['Take 001'];
    if (action) {
      if (isRotating) action.play();
      else action.stop();
    }
    return () => action?.stop(); 
  }, [isRotating, actions]);

  return (
    <mesh ref={ref} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
