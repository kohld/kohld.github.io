import React from 'react';
import { render, screen } from '@testing-library/react';
import FadeIn from '@/app/components/fade-in';

// Mock framer-motion to avoid animation complexity in tests
jest.mock('motion/react', () => ({
  motion: {
    div: ({ children, className, ...props }: any) => (
      <div className={className} data-testid="fade-in-wrapper" {...props}>
        {children}
      </div>
    ),
  },
  Variants: {},
}));

describe('FadeIn Component', () => {
  it('renders children correctly', () => {
    render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    render(
      <FadeIn className="custom-class">
        <p>Test Content</p>
      </FadeIn>,
    );
    const wrapper = screen.getByTestId('fade-in-wrapper');
    expect(wrapper).toHaveClass('custom-class');
  });

  it('renders without className when not provided', () => {
    render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>,
    );
    const wrapper = screen.getByTestId('fade-in-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('renders multiple children correctly', () => {
    render(
      <FadeIn>
        <h1>Title</h1>
        <p>Description</p>
      </FadeIn>,
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
