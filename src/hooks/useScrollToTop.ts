import { useState, useRef } from "react";

export function useScrollToTop() {
  const [scrollToTopButton, setScrollToTopButtonVisible] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToTop = () => {
    listRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const onListScroll = () => {
    if (listRef.current) setScrollTop(listRef.current.scrollTop);
    if (scrollTop > 1250) setScrollToTopButtonVisible(true);
    else setScrollToTopButtonVisible(false);
  };

  return {
    listRef,
    onListScroll,
    scrollToTop,
    scrollToTopButton,
  };
};