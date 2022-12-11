import React, { memo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import BetRow from '../EventRow/EventRow';
import './VirtualEventTable.scss';

function VirtualEventTable({
  events,
  handleSelectBet,
  selectedBets,
  height,
  width,
}) {
  const parentRef = React.useRef();

  const rowVirtualizer = useVirtualizer({
    count: events.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80,
  });

  return (
    <div
      ref={parentRef}
      style={{ height: height || '100vh', width: width || '100%' }}
      className="virtualEventTable"
    >
      <div
        className="virtualEventTableWrapper"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((event) => (
          <BetRow
            key={event.key}
            style={{
              height: `${event.size}px`,
              transform: `translateY(${event.start}px)`,
            }}
            handleSelectBet={handleSelectBet}
            selectedBetId={
              selectedBets?.find((bet) => bet.id === events[event.index].C)
                ?.betTypeId || null
            }
            event={events[event.index]}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(VirtualEventTable);
