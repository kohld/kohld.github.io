import { render, screen } from '@testing-library/react';
import Contact from '@/app/components/contact';

describe('Contact Component', () => {
  it('renders the main heading', () => {
    render(<Contact />);
    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument();
  });

  it('renders the email link with the correct href', () => {
    render(<Contact />);
    const emailLink = screen.getByRole('link', { name: /send email/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:dennes.kohl@gmail.com');
  });

  it('renders the GitHub link with the correct href and target', () => {
    render(<Contact />);
    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/kohld');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });
});
