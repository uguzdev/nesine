import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import EventRow from './EventRow';
import mockEvent from '../../mock/MockEvent';

describe('BetRow Test', () => {
  const handleSelectBet = jest.fn();

  render(<EventRow event={mockEvent} handleSelectBet={handleSelectBet} />);
  const endMatchButton = screen.getByText(/2.30/i);

  fireEvent.click(endMatchButton);

  const callBackProps = handleSelectBet.mock.lastCall;

  it('Callback props length should be 3', () => {
    expect(callBackProps.length).toBe(3);
  });

  it('eventId should be 2001', () => {
    expect(callBackProps[0]).toBe('2001');
  });
});
