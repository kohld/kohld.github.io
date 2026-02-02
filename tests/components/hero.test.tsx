import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/app/components/hero';

// Mock scrollIntoView since it's not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Hero Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main heading', () => {
    render(<Hero />);
    expect(
      screen.getByRole('heading', { level: 1, name: /hi, i'm dennes kohl/i }),
    ).toBeInTheDocument();
  });

  it('renders the tagline description', () => {
    render(<Hero />);
    expect(
      screen.getByText(/software engineer & backend developer/i),
    ).toBeInTheDocument();
  });

  it('renders the main call-to-action buttons', () => {
    render(<Hero />);
    // Test by the accessible name provided by aria-label
    expect(
      screen.getByRole('button', { name: /navigate to contact section/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /navigate to projects section/i }),
    ).toBeInTheDocument();
  });

  it('scrolls to contact section when "Get In Touch" button is clicked', () => {
    // Create a mock element
    const mockElement = document.createElement('div');
    mockElement.id = 'contact';
    document.body.appendChild(mockElement);

    render(<Hero />);
    const contactButton = screen.getByRole('button', {
      name: /navigate to contact section/i,
    });

    fireEvent.click(contactButton);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it('scrolls to projects section when "View Projects" button is clicked', () => {
    // Create a mock element
    const mockElement = document.createElement('div');
    mockElement.id = 'projects';
    document.body.appendChild(mockElement);

    render(<Hero />);
    const projectsButton = screen.getByRole('button', {
      name: /navigate to projects section/i,
    });

    fireEvent.click(projectsButton);

    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
    });

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it('renders particles container with correct attributes', () => {
    render(<Hero />);
    const particlesContainer = document.getElementById('particles-container');
    expect(particlesContainer).toBeInTheDocument();
    expect(particlesContainer).toHaveAttribute('aria-hidden', 'true');
  });

  it('creates particles on mount', () => {
    render(<Hero />);
    const particlesContainer = document.getElementById('particles-container');

    // Wait for useEffect to run
    expect(particlesContainer?.children.length).toBeGreaterThan(0);
  });
});
