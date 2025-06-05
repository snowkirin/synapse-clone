import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from '../button';

describe('Button', () => {
  it('applies solid variant classes', () => {
    const { getByRole } = render(<Button variant="solid">Test</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('bg-blue-600', 'text-white', 'hover:bg-blue-700');
  });
});
