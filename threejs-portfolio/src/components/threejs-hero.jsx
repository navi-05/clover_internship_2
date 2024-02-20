// src/components/ThreejsHero.js

import React, { useEffect } from 'react';
import * as THREE from 'three';

const ThreejsHero = () => {
  useEffect(() => {
    // Set up Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('hero-section').appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xfff });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // Call the animate function
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="hero-section" style={{ height: '100vh' }} />;
};

export default ThreejsHero;
