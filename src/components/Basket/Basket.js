import React, { memo, useMemo } from 'react';
import useBasketAnimation from '../../hooks/BasketAnimation';
import './Basket.scss';

function BasketHeader({ handleToggleBasket }) {
  return (
    <div className="betBasketHeader">
      <button
        onClick={handleToggleBasket && handleToggleBasket}
        type="button"
        className="closeButton"
      >
        Kapat
      </button>
    </div>
  );
}
function BasketItem({ eventId, eventName, betRate }) {
  return (
    <div className="betItem">
      <div className="leftSection">
        <span>{eventId}</span>
      </div>
      <div className="rightSection">
        <span>{eventName}</span>
        <span>Oran:{betRate}</span>
      </div>
    </div>
  );
}

function Basket({ events, visible, handleToggleBasket }) {
  const totalRate = useMemo(
    () =>
      events
        .map((item) => item.betRate)
        .reduce((total, item) => Number(total) * Number(item), 1)
        .toFixed(2),
    [events],
  );

  const betItemsRef = useBasketAnimation();

  return visible ? (
    <div className="betBasket">
      <BasketHeader handleToggleBasket={handleToggleBasket} />
      <div className="betBasketWrapper">
        <div className="basketItems" ref={betItemsRef}>
          {events.map((item) => (
            <BasketItem
              key={item.id}
              eventName={item.eventName}
              betRate={item.betRate}
              eventId={item.id}
            />
          ))}
        </div>

        <div className="basketTotal">
          <span>Toplam Oran:</span>
          <br />
          <span>{totalRate}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="betBasketSummaryWrapper">
      <button
        type="button"
        className="betBasketSummaryButton"
        onClick={handleToggleBasket && handleToggleBasket}
      >
        Toplam Oran: {totalRate}
      </button>
    </div>
  );
}

export default memo(Basket);
