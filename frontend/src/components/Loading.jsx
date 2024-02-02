import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Loading() {
  useEffect(() => {
    if (inView) alert("Load more!!");
  }, []);
  const [ref, inView] = useInView();
  return <span ref={ref} className="loading loading-dots loading-lg"></span>;
}
