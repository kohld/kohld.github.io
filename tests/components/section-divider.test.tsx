import { render, screen } from '@testing-library/react';
import SectionDivider from '@/app/components/section-divider';

describe('SectionDivider', () => {
  it('renders without crashing and is hidden from accessibility tree', () => {
    render(<SectionDivider />);
    const divider = screen.getByTestId('section-divider');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveAttribute('aria-hidden', 'true');
  });
});
