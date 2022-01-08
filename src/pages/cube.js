import React, { useEffect } from 'react';
import Cube from 'src/components/Cube';

export default function CubePage() {
  useEffect(() => {
    document.querySelector('h3').style.backgroundColor = 'rgba(255, 254, 31) !important';
    console.log(document.querySelector('h3').style.backgroundColor);
  }, [])
  return (
    <>
      <title>CSS Cube</title>
      <Cube />
    </>
  )
}