import React, { createContext, useMemo, useReducer } from 'react';
import basketReducer from './reducer';

const initialBasketContext = [];
export const BasketContext = createContext(initialBasketContext);

function BasketStore({ children }) {
  const [state, dispatch] = useReducer(basketReducer, initialBasketContext);

  const stateAndDispatch = useMemo(
    () => ({ state, dispatch }),
    [state, dispatch],
  );

  return (
    <BasketContext.Provider value={stateAndDispatch}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketStore;
