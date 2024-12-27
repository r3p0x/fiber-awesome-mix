const SCALE = 0.5

export const Tree = () => {
    return (
      <group scale={[SCALE, SCALE, SCALE]} position={[0, 1.5 * SCALE, 0]}>

        {/* Tree Trunk */}
        <mesh castShadow>
            <cylinderGeometry args={[0.2, 0.3, 3, 32]} /> {/* Adjusted trunk for a rounder look */}
            <meshStandardMaterial color="brown" />
        </mesh>

        {/* Leaves - Middle layer */}
        <mesh castShadow position={[0, 2, 0]}>
            <sphereGeometry args={[1.8, 16, 16]} /> {/* Smaller, but still round */}
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    );
};