import { useLayoutEffect, useRef } from 'react';

function useBasketAnimation() {
  const previousItemCount = useRef(0);
  const betItemsRef = useRef();

  const scrollToBottom = () => {
    betItemsRef.current?.scrollTo({
      top: betItemsRef.current.scrollHeight,
      behavior: 'smooth',
    });
  };

  const addedAnimation = () => {
    if (betItemsRef.current) {
      const addedItems = betItemsRef.current.children;
      const isAddedNewItem = addedItems.length > previousItemCount.value;

      if (isAddedNewItem) {
        scrollToBottom();

        addedItems[addedItems.length - 1].classList.add('newItem');
      }
      previousItemCount.value = addedItems.length;
    }
  };

  useLayoutEffect(() => {
    addedAnimation();
  }, [betItemsRef?.current?.children?.length]);

  return betItemsRef;
}

export default useBasketAnimation;
