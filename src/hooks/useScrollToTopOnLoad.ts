import { useEffect } from "react";

export function useScrollToTopOnLoad() {
  useEffect(() => document.onload = () => window.scrollTo(0, 0));
};