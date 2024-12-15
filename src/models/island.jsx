import { useEffect, useRef } from 'react'
import { FacemeshEyeDefaults, useGLTF } from '@react-three/drei'
import { a } from '@react-spring/three'
import { useThree } from '@react-three/fiber'

const Island = ({ isRotating, setIsRotating, ...props}) => {
  const islandRef = useRef()


  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF('/assets/3d/island.glb')

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropogation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? 
    event.touches[0].clientX 
    : event.clientX;

    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropogation();
    e.preventDefault();
    setIsRotating(false);

    const clientX = event.touches ? 
    event.touches[0].clientX 
    : event.clientX;

    const delta = (clientX - lastX.current) / viewport.width;

    islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    lastX.current = clientX;
    rotationSpeed.current = delta * 0.01 * Math.PI;
  }
  
  const handlePointerMove = (e) => {
    e.stopPropogation();
    e.preventDefault();
    setIsRotating(true);

    if(isRotating) {
      handlePointerUp(e);
    }
  }

  useEffect(() => {

  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}

export default Island
