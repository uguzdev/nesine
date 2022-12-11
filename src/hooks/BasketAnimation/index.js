import { useEffect, useRef } from 'react';

function useBasketAnimation(visible) {
  const betItemsRef = useRef();

  const scrollToBottom = () => {
    betItemsRef.current?.scrollTo({
      top: betItemsRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  function observerCallback(mutations) {
    const addedNodes = mutations[0].addedNodes[0];

    if (addedNodes) {
      mutations[0]?.addedNodes[0]?.classList.add('newItem');
      scrollToBottom();
    }
  }

  useEffect(() => {
    const observer = new MutationObserver(observerCallback);

    if (betItemsRef?.current) {
      observer.observe(betItemsRef?.current, {
        childList: true,
      });
    }

    return () => observer.disconnect();
  }, [visible]);

  return betItemsRef;
}

export default useBasketAnimation;
