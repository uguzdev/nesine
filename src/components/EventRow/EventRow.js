import React, { memo } from 'react';
import './EventRow.scss';
import Constant from './Constant';

function EventRowHeader({ id, date, leagueName }) {
  return (
    <div className="eventRowHeader">
      <div>
        {`${id} ${date}`} <br />
        {leagueName}
      </div>
      {Constant.betTypes.map((column) => (
        <div key={column.id}>{column.name}</div>
      ))}
    </div>
  );
}

function BetButton({ onClick, betRate, isSelected }) {
  return (
    <button
      onClick={onClick && onClick}
      className={`betButton ${isSelected ? 'selected' : ''}`}
      type="button"
    >
      {betRate}
    </button>
  );
}

function EventRowContent({
  eventId,
  matchName,
  betTypes,
  handleSelectBet,
  selectedBetId,
}) {
  return (
    <div className="eventRowContent">
      <div className="eventRowContentColumn">
        <span>{matchName}</span>
      </div>
      {Constant.betTypes.map((column) => {
        const betRate = betTypes[column.categoryId].OC[column.id]?.O;
        return (
          <div
            key={`${eventId}-${column.id}`}
            className="eventRowContentColumn"
          >
            {betRate && (
              <BetButton
                betRate={betRate}
                isSelected={column.id === selectedBetId}
                onClick={() =>
                  handleSelectBet &&
                  handleSelectBet({
                    id: eventId,
                    betTypeId: column.id,
                    betRate,
                    eventName: matchName,
                  })
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function EventRow({ event, handleSelectBet, selectedBetId, style }) {
  const { LN, N, C, D, OCG } = event;
  return (
    <div className="eventRow" style={style}>
      <div className="eventRowWrapper">
        <EventRowHeader id={C} date={D} leagueName={LN} />
        <EventRowContent
          eventId={C}
          selectedBetId={selectedBetId}
          handleSelectBet={handleSelectBet}
          betTypes={OCG}
          matchName={N}
        />
      </div>
    </div>
  );
}

export default memo(EventRow);
