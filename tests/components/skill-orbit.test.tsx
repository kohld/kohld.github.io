import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SkillOrbit from '@/app/components/skill-orbit';



describe('SkillOrbit Component', () => {
  it('renders the central core node with Tech Stack text', () => {
    render(<SkillOrbit />);
    expect(screen.getByText(/TECH/i)).toBeInTheDocument();
    expect(screen.getByText(/STACK/i)).toBeInTheDocument();
  });

  it('renders a representative set of skill nodes', () => {
    render(<SkillOrbit />);
    // Check for some core skills
    expect(screen.getByText('PHP')).toBeInTheDocument();
    expect(screen.getByText('Symfony')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();

    // Check for some backend skills
    expect(screen.getByText('MySQL')).toBeInTheDocument();
    expect(screen.getByText('RabbitMQ')).toBeInTheDocument();

    // Check for exploring skills
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });
});
