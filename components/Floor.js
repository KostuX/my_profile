import React from "react";

function Floor(props) {
  return (
    <mesh {...props} recieveShadow>

      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;