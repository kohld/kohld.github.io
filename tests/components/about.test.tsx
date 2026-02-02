import { render, screen } from '@testing-library/react';
import About from '@/app/components/about';

describe('About Component', () => {
  it('renders the main heading and description', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { name: /about me/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/passionate software engineer/i),
    ).toBeInTheDocument();
  });
});
