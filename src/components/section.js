"use client";

import { useEffect, Children, useRef, useState, useCallback } from "react";
import Carousel from "./carousel";
import { useWidth } from "@/util/useWidth";

export default function Section({ heading, children, color = 'bg-transparent' }) {

  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const sectionElement = useRef();
  const sectionWidth = useWidth(sectionElement);

  const handleMouseScroll = useCallback((event) => {
    if (!!scrollTimeout) {
      event.preventDefault();
      clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => {
        setScrollTimeout(null);
      }, 50));
      return;
    }
    
    let scrollOffset = event.deltaY;
    if (event.deltaY === 0 || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
      scrollOffset = event.deltaX;
    }
    
    if (
      (scrollOffset < 0 && currentPageIndex === 0) ||
      (scrollOffset > 0 && currentPageIndex === Children.count(children) - 1)
    ) {
      // console.log('No more horizontal scroll');
      clearTimeout(scrollTimeout);
      setScrollTimeout(null);

      if (scrollOffset === event.deltaX && scrollOffset !== event.deltaY) {
        event.preventDefault();
      }

      return;
    }

    event.preventDefault();

    if (!scrollTimeout) {
      // console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentPageIndex}]`);

      if (scrollOffset < 0) {
        setCurrentPageIndex(currentPageIndex - 1);
      } else {
        setCurrentPageIndex(currentPageIndex + 1);
      }
    }
    setScrollTimeout(setTimeout(() => {
      setScrollTimeout(null);
    }, 50));
  }, [
    children,
    currentPageIndex,
    scrollTimeout
  ]);

  const handleTouch = useCallback((event) => {
    const xEnd = event.touches[0].clientX;
    const yEnd = event.touches[0].clientY;
    
    const dy = yEnd - touchStartY;
    const dx = xEnd - touchStartX;

    if (!!scrollTimeout) {
      event.preventDefault();
      clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => {
        setScrollTimeout(null);
      }, 250));
      return;
    }
    
    let scrollOffset = -dy;
    if (dy === 0 || Math.abs(dx) >= Math.abs(dy)) {
      scrollOffset = -dx;
    }
    
    if (
      (scrollOffset < 0 && currentPageIndex === 0) ||
      (scrollOffset > 0 && currentPageIndex === Children.count(children) - 1)
    ) {
      console.log('No more horizontal scroll');
      clearTimeout(scrollTimeout);
      setScrollTimeout(null);
      event.stopImmediatePropagation();
      return;
    }

    event.preventDefault();

    if (!scrollTimeout) {
      console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentPageIndex}]`);

      if (scrollOffset < 0) {
        setCurrentPageIndex(currentPageIndex - 1);
      } else {
        setCurrentPageIndex(currentPageIndex + 1);
      }
    }
    setScrollTimeout(setTimeout(() => {
      setScrollTimeout(null);
    }, 250));
  }, [
    children,
    currentPageIndex,
    scrollTimeout,
    touchStartX,
    touchStartY
  ]);

  useEffect(() => {
    const el = sectionElement.current;
    
    const handleTouchStart = (event) => {
      setTouchStartX(event.touches[0].clientX);
      setTouchStartY(event.touches[0].clientY);
    };
    
    el.addEventListener(
      'wheel',
      handleMouseScroll,
      {capture: false, passive:false}
    );
    window.addEventListener(
      'touchstart',
      handleTouchStart,
      {capture: false, passive:false}
    );
    el.addEventListener(
      'touchmove',
      handleTouch,
      {capture: false, passive:false}
    );

    return () => {
      el.removeEventListener(
        'wheel',
        handleMouseScroll,
        {capture: false, passive:false}
      );
      window.removeEventListener(
        'touchstart',
        handleTouchStart,
        {capture: false, passive:false}
      );
      el.removeEventListener(
        'touchmove',
        handleTouch,
        {capture: false, passive:false}
      );
    };
  }, [sectionElement, handleMouseScroll, handleTouch]);
  
  return (
    <div ref={sectionElement} className={`flex flex-col w-screen h-screen supports-[height:100dvh]:h-[100dvh] snap-always snap-start ${color}`}>
      {
        (!!heading) &&
        <div className="container mx-auto mt-8 mb-4 px-4">
          <h2 className={(color === 'bg-transparent') ? 'text-trusty-50': ''}>{heading}</h2>
        </div>
      }
      <div className="grow">
        <Carousel offset={currentPageIndex * -sectionWidth}>{children}</Carousel>
      </div>
    </div>
  );
}
