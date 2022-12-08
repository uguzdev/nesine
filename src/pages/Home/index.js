import React from 'react';

import BultenList from '../../data/bulten_data.json';
import VirtualEventTable from '../../components/VirtualEventTable/VirtualEventTable';
import useBulten from '../../hooks/Bulten';

function HomePage() {
  const { events } = useBulten(BultenList);

  return <VirtualEventTable events={events} />;
}

export default HomePage;
