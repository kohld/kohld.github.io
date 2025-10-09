import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '@/app/components/about';

describe('About Component', () => {
  it('renders the main headings', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { name: /about me/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /skills/i }),
    ).toBeInTheDocument();
  });

  it('renders the skill sections', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { name: /backend engineering/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /currently exploring/i }),
    ).toBeInTheDocument();
  });

  it('renders individual skills', () => {
    render(<About />);
    // Check for a skill from the first block
    expect(screen.getByText('Symfony')).toBeInTheDocument();
    // Check for a skill from the second block
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });
});
