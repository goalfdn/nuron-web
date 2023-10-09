import { useState, useEffect, useCallback } from 'react';


export const useWidth = (elementRef) => {
  const [fullWidth, setFullWidth] = useState(0);

  const handleResize = useCallback(() => {
    if (
      !!elementRef.current &&
      elementRef.current.offsetWidth !== fullWidth
    ) {
      // console.log('Old dimensions: ', fullWidth);
      // console.log('New dimensions: ', elementRef.current.offsetWidth)
      setFullWidth(elementRef.current.offsetWidth);
    }
  }, [elementRef, fullWidth]);

  useEffect(() => {
    const el = elementRef.current;
    setFullWidth(el.offsetWidth);
    
    window.addEventListener('resize', handleResize, false);

    return () => {
      window.removeEventListener('resize', handleResize, false);
    };
  }, [elementRef, handleResize]);

  return fullWidth;
}
