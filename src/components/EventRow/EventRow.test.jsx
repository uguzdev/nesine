import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EventRow from './EventRow';
import mockEvent from '../../mock/MockEvent';

describe('BetRow Test', () => {
  const handleSelectBet = jest.fn();

  render(<EventRow event={mockEvent} handleSelectBet={handleSelectBet} />);
  const endMatchButton = screen.getByText(/2.30/i);

  fireEvent.click(endMatchButton);

  const callBackProps = handleSelectBet.mock.lastCall[0];

  it('Callback props object length should be 4', () => {
    expect(Object.keys(callBackProps).length).toBe(4);
  });

  it('eventId should be 2001', () => {
    expect(callBackProps.id).toBe('2001');
  });
});
