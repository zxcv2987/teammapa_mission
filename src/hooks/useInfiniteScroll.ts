import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

export default function useInfiniteScroll({
  onIntersect,
}: {
  onIntersect: () => void;
}) {
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      onIntersect();
    }
  }, [inView, onIntersect]);

  return {ref, inView};
}
