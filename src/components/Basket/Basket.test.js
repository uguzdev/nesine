import React from 'react';
import { render, screen } from '@testing-library/react';
import Basket from './Basket';
import mockBasketItems from '../../mock/MockBasketItems';

describe('Basket Test', () => {
  it('Basket should be show as summary in initial', () => {
    render(<Basket events={mockBasketItems} />);
    const summaryButton = screen.getByRole('button');

    expect(summaryButton.className).toBe('betBasketSummaryButton');
  });

  it('Added items count should be 2', () => {
    render(<Basket events={mockBasketItems} visible />);
    const addedItems = screen.getAllByText(/match/i);

    expect(addedItems.length).toBe(2);
  });

  it('totalRate should be 4.5', () => {
    render(<Basket events={mockBasketItems} visible />);
    const basketTotalRate = screen.getByText(/4.5/i);

    expect(basketTotalRate).toBeInTheDocument();
  });
});
