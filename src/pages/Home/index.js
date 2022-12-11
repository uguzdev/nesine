import React, { useContext, useState } from 'react';

import BultenList from '../../data/bulten_data.json';
import VirtualEventTable from '../../components/VirtualEventTable/VirtualEventTable';
import useBulten from '../../hooks/Bulten';
import Basket from '../../components/Basket/Basket';
import { BasketContext } from '../../store/Basket';
import {
  addEvent,
  removeEvent,
  updateBetType,
} from '../../store/Basket/actions';

function HomePage() {
  const { events } = useBulten(BultenList);
  const [isBasketVisible, setIsBasketVisible] = useState(false);

  const { state: basketItems, dispatch } = useContext(BasketContext);

  const handleSelectBet = (event) => {
    const isAddedBet = basketItems.find((bet) => bet.id === event.id);

    if (!isAddedBet) {
      dispatch(addEvent(event));
    } else if (event.betTypeId === isAddedBet.betTypeId) {
      dispatch(removeEvent(event.id));
    } else {
      dispatch(updateBetType(event));
    }
  };

  return (
    <>
      <VirtualEventTable
        events={events}
        selectedBets={basketItems}
        handleSelectBet={handleSelectBet}
      />
      <Basket
        visible={isBasketVisible}
        handleToggleBasket={() => setIsBasketVisible(!isBasketVisible)}
        events={basketItems}
      />
    </>
  );
}

export default HomePage;
