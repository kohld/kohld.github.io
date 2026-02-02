import { render, screen, fireEvent, within } from '@testing-library/react';
import Projects from '@/app/components/projects';

describe('Projects Component', () => {
  it('renders the main heading and initial projects', () => {
    render(<Projects />);
    expect(
      screen.getByRole('heading', {
        name: /completed & contributed projects/i,
      }),
    ).toBeInTheDocument();

    // Scope the search for the "All" button to the filter group
    const filterGroup = screen.getByRole('group', {
      name: /filter projects by technology/i,
    });
    const allButton = within(filterGroup).getByRole('button', { name: /all/i });
    expect(allButton).toHaveAttribute('aria-pressed', 'true');

    expect(screen.getByRole('heading', { name: /bghm/i })).toBeInTheDocument();

    // Use the accessible name for the "Show All" button
    expect(
      screen.getByRole('button', { name: /show all projects/i }),
    ).toBeInTheDocument();
  });

  it('filters projects when a technology button is clicked', () => {
    render(<Projects />);

    const yiiButton = screen.getByRole('button', { name: /yii 2/i });
    fireEvent.click(yiiButton);

    expect(yiiButton).toHaveAttribute('aria-pressed', 'true');
    expect(
      screen.getByRole('heading', { name: /nfon ag/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /bghm/i }),
    ).not.toBeInTheDocument();
  });

  it('toggles between showing all and fewer projects', () => {
    render(<Projects />);
    // Find by accessible name
    const showAllButton = screen.getByRole('button', {
      name: /show all projects/i,
    });
    fireEvent.click(showAllButton);

    // Find by new accessible name
    const showLessButton = screen.getByRole('button', {
      name: /show fewer projects/i,
    });
    expect(showLessButton).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /zdftivi/i }),
    ).toBeInTheDocument();

    fireEvent.click(showLessButton);

    // Check that it has reverted
    expect(
      screen.getByRole('button', { name: /show all projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: /zdftivi/i }),
    ).not.toBeInTheDocument();
  });
});
