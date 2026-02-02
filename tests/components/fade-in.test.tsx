import React from 'react';
import { render, screen, act } from '@testing-library/react';
import FadeIn from '@/app/components/fade-in';

describe('FadeIn Component', () => {
  beforeEach(() => {
    // Mock IntersectionObserver
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

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
    // The component wrapper is the div with className
    const textElement = screen.getByText('Test Content');
    // Since textElement is p, parent is the FadeIn div
    expect(textElement.parentElement).toHaveClass('custom-class');
  });

  it('starts hidden (opacity-0)', () => {
    render(
      <FadeIn>
        <p>Test Content</p>
      </FadeIn>
    );
    const container = screen.getByText('Test Content').parentElement;
    expect(container).toHaveClass('opacity-0');
  });
});
