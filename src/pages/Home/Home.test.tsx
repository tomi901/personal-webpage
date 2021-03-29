import React from 'react';
import { render, screen } from '@testing-library/react';
import Home, { HomeHeader } from '.';

test('Particles exist', () => {
    const header = render(<HomeHeader />);
    const particlesContainers = header.baseElement.getElementsByClassName("particle-container");
    expect(particlesContainers.length).toBeGreaterThan(0);
  
    const particles = particlesContainers[0].getElementsByClassName("particle");
    expect(particles.length).toBeGreaterThan(10);
});
