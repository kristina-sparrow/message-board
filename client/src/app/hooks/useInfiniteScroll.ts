import { useState, useCallback, useEffect, useRef } from "react";

export default function useInfiniteScroll() {
  const [skip, setSkip] = useState(0);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleObserver = useCallback((entries: any) => {
    const [target] = entries;
    if (target.isIntersecting) {
      setSkip((a) => a + 10);
    }
  }, []);

  useEffect(() => {
    const option: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleObserver, option);

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return { loadMoreRef, skip };
}
