"use client";

import { useEffect, Children, useRef, useState, useCallback } from "react";
import Carousel from "./carousel";

export default function Section({ heading, children, color = 'bg-transparent' }) {

  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);
  const sectionElement = useRef();

  const handleResize = useCallback(() => {
    if (
      !!sectionElement.current &&
      sectionElement.current.offsetWidth !== fullWidth
    ) {
      // console.log('Old dimensions: ', fullWidth, currentOffset);
      // console.log('New dimensions: ', sectionElement.current.offsetWidth, Math.floor(currentOffset / fullWidth) * sectionElement.current.offsetWidth)
      setCurrentOffset(
        Math.floor(currentOffset / fullWidth) *
        sectionElement.current.offsetWidth
      );
      setFullWidth(sectionElement.current.offsetWidth);
    }
  }, [currentOffset, fullWidth]);

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
    
    if (
      (scrollOffset < 0 && currentOffset === 0) ||
      (scrollOffset > 0 && currentOffset === (Children.count(children) - 1) * (-fullWidth))
    ) {
      // console.log('No more horizontal scroll');
      return;
    }

    event.preventDefault();

    if (!scrollTimeout) {
      // console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentOffset}]`);

      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        return;
      }
      if (scrollOffset < 0) {
        setCurrentOffset(currentOffset + fullWidth);
      } else {
        setCurrentOffset(currentOffset - fullWidth);
      }
    }
    setScrollTimeout(setTimeout(() => {
      setScrollTimeout(null);
    }, 50));
  }, [
    children,
    currentOffset,
    fullWidth,
    scrollTimeout
  ]);

  const handleTouch = useCallback((event) => {
    console.log('touched');
    const xEnd = event.touches[event.touches.length - 1].clientX;
    const yEnd = event.touches[event.touches.length - 1].clientY;
    
    const dy = yEnd - touchStartY;
    const dx = xEnd - touchStartX;
    console.log(event.changedTouches);
    console.log(`X: ${dx}, Y: ${dy}`);

    if (!!scrollTimeout) {
      event.preventDefault();
      clearTimeout(scrollTimeout);
      setScrollTimeout(setTimeout(() => {
        setScrollTimeout(null);
      }, 250));
      return;
    }
    
    let scrollOffset = -dy;
    
    if (
      (scrollOffset < 0 && currentOffset === 0) ||
      (scrollOffset > 0 && currentOffset === (Children.count(children) - 1) * (-fullWidth))
    ) {
      console.log('No more horizontal scroll');
      return;
    }

    event.preventDefault();

    if (!scrollTimeout) {
      console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentOffset}]`);

      if (scrollOffset < 0) {
        setCurrentOffset(currentOffset + fullWidth);
      } else {
        setCurrentOffset(currentOffset - fullWidth);
      }
    }
    setScrollTimeout(setTimeout(() => {
      setScrollTimeout(null);
    }, 250));
  }, [
    children,
    currentOffset,
    fullWidth,
    scrollTimeout,
    touchStartX,
    touchStartY
  ]);

  useEffect(() => {
    const el = sectionElement.current;

    setFullWidth(el.offsetWidth);

    const handleTouchStart = (event) => {
      setTouchStartX(event.touches[0].clientX);
      setTouchStartY(event.touches[0].clientY);
    };
    
    window.addEventListener('resize', handleResize, false);
    el.addEventListener(
      'wheel',
      handleMouseScroll,
      {capture: false, passive:false}
    );
    el.addEventListener(
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
      window.removeEventListener('resize', handleResize, false);
      el.removeEventListener(
        'wheel',
        handleMouseScroll,
        {capture: false, passive:false}
      );
      el.removeEventListener(
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
  }, [
    sectionElement,
    handleResize,
    handleMouseScroll,
    handleTouch
  ]);
  
  return (
    <div ref={sectionElement} className={`flex flex-col w-screen h-screen snap-always snap-start ${color}`}>
      {
        (!!heading) &&
        <div className="container mx-auto mt-8 mb-4 px-4">
          <h2 className={(color === 'bg-transparent') ? 'text-trusty-50': ''}>{heading}</h2>
        </div>
      }
      <div className="grow">
        <Carousel offset={currentOffset}>{children}</Carousel>
      </div>
    </div>
  );
}
