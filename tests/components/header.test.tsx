import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/app/components/header';

// Mock scrollIntoView since it's not implemented in JSDOM
window.HTMLElement.prototype.scrollIntoView = jest.fn();

describe('Header Component', () => {
  it('renders desktop navigation links', () => {
    render(<Header />);
    // Check for the navigation landmark
    expect(
      screen.getByRole('navigation', { name: /main navigation/i }),
    ).toBeInTheDocument();

    // Check for the links by their accessible name (aria-label)
    expect(
      screen.getByRole('link', { name: /navigate to home/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /navigate to about/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /navigate to projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /navigate to contact/i }),
    ).toBeInTheDocument();
  });

  it('toggles the mobile navigation menu on click', () => {
    render(<Header />);
    const mobileMenuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });

    // Initially, the mobile menu should not be visible
    expect(
      screen.queryByRole('navigation', { name: /mobile navigation/i }),
    ).not.toBeInTheDocument();
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');

    // Click the button to open the menu
    fireEvent.click(mobileMenuButton);

    // Now, the mobile menu should be visible
    expect(
      screen.getByRole('navigation', { name: /mobile navigation/i }),
    ).toBeInTheDocument();
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'true');

    // Click again to close the menu
    fireEvent.click(mobileMenuButton);

    // The menu should be hidden again
    expect(
      screen.queryByRole('navigation', { name: /mobile navigation/i }),
    ).not.toBeInTheDocument();
    expect(mobileMenuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
