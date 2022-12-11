/* eslint-disable import/prefer-default-export */

export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  payload: event,
});

export const removeEvent = (eventId) => ({
  type: 'REMOVE_EVENT',
  payload: eventId,
});

export const updateBetType = (payload) => ({
  type: 'UPDATE_BET_TYPE',
  payload,
});
