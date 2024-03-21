import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', async () => {
  test('renders a basic button', async () => {
    render(<Button>Click Me</Button>);
    expect(
      screen.getByRole('button', { name: 'Click Me' }),
    ).toBeInTheDocument();
  });
});
