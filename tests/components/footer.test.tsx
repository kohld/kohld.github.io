import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer';

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(
      `© ${currentYear} Dennes Kohl. All rights reserved.`,
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders as a footer element with contentinfo role', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer.tagName).toBe('FOOTER');
  });

  it('displays the current year dynamically', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}`))).toBeInTheDocument();
  });

  it('has proper styling classes for backdrop and border', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass(
      'bg-black/80',
      'backdrop-blur-xl',
      'border-t',
      'border-white/10',
    );
  });
});
