import { useMemo } from 'react';

function useBulten(bulten) {
  const events = useMemo(
    () => Object.keys(bulten.Events).map((event) => bulten.Events[event]),
    [bulten],
  );

  return { events };
}

export default useBulten;
