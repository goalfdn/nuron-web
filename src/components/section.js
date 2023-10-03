"use client";

import { useEffect, Children, useRef, useState, useCallback } from "react";
import Carousel from "./carousel";

export default function Section({ heading, children, color = 'bg-transparent' }) {

  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [fullWidth, setFullWidth] = useState(0);
  const sectionElement = useRef();

  const handleResize = useCallback(() => {
    if (
      !!sectionElement.current &&
      sectionElement.current.offsetWidth !== fullWidth
    ) {
      console.log('Old dimensions: ', fullWidth, currentOffset);
      console.log('New dimensions: ', sectionElement.current.offsetWidth, Math.floor(currentOffset / fullWidth) * sectionElement.current.offsetWidth)
      setCurrentOffset(
        Math.floor(currentOffset / fullWidth) *
        sectionElement.current.offsetWidth
      );
      setFullWidth(sectionElement.current.offsetWidth);
    }
  }, [currentOffset, fullWidth]);

  const handleMouseScroll = useCallback((event) => {
    if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
      return;
    }
    
    if (!!scrollTimeout) {
      event.preventDefault();
      // console.log('Scrolling...');
      clearTimeout(scrollTimeout);
      let timeout = setTimeout(() => {
        // console.log('Scroll ended!');
        setScrollTimeout(null);
      }, 50);
      setScrollTimeout(timeout);
      return;
    }
    
    let scrollOffset = event.deltaY;

    // console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentOffset}]`);
    setIsScrolling(true);
    
    if (
      (scrollOffset < 0 && currentOffset === 0) ||
      (scrollOffset > 0 && currentOffset === (Children.count(children) - 1) * (-fullWidth))
    ) {
      // console.log('No more horizontal scroll');
      return;
    }

    event.preventDefault();
    clearTimeout(scrollTimeout);
    setScrollTimeout(setTimeout(
      () => {
        // console.log('Scroll ended!');
        setScrollTimeout(null);
      },
      50
    ));
    
    if (scrollOffset < 0) {
      setCurrentOffset(currentOffset + fullWidth);
    } else {
      setCurrentOffset(currentOffset - fullWidth);
    }
  }, [children, currentOffset, fullWidth, scrollTimeout]);

  const handleTouch = useCallback((event) => {
    const xStart = event.touches[0].clientX;
    const yStart = event.touches[0].clientY;
    const xEnd = event.touches[event.touches.length - 1].clientX;
    const yEnd = event.touches[event.touches.length - 1].clientY;
    
    const dy = yEnd - yStart;
    const dx = xEnd - xStart;

    if (Math.abs(dx) >= Math.abs(dy)) {
      return;
    }

    if (!!scrollTimeout) {
      event.preventDefault();
      clearTimeout(scrollTimeout);
      let timeout = setTimeout(() => {
        // console.log('Scroll ended!');
        setScrollTimeout(null);
      }, 50);
      setScrollTimeout(timeout);
      return;
    }

    let scrollOffset = dy;

    // console.log(`Scrolling ${scrollOffset > 0 ? 'DOWN':'UP'} [Offset: ${currentOffset}]`);
    setIsScrolling(true);
    
    if (
      (scrollOffset < 0 && currentOffset === 0) ||
      (scrollOffset > 0 && currentOffset === (Children.count(children) - 1) * (-fullWidth))
    ) {
      // console.log('No more horizontal scroll');
      return;
    }

    event.preventDefault();
    clearTimeout(scrollTimeout);
    setScrollTimeout(setTimeout(
      () => {
        // console.log('Scroll ended!');
        setScrollTimeout(null);
      },
      50
    ));
    
    if (scrollOffset < 0) {
      setCurrentOffset(currentOffset + fullWidth);
    } else {
      setCurrentOffset(currentOffset - fullWidth);
    }
  }, [children, currentOffset, fullWidth, scrollTimeout]);

  useEffect(() => {
    const el = sectionElement.current;

    setFullWidth(el.offsetWidth);
    
    window.addEventListener('resize', handleResize, false);
    el.addEventListener(
      'wheel',
      handleMouseScroll,
      {capture: true, passive:false}
    );
    el.addEventListener(
      'touchmove',
      handleTouch,
      {capture: true, passive:false}
    );

    return () => {
      window.removeEventListener('resize', handleResize, false);
      el.removeEventListener(
        'wheel',
        handleMouseScroll,
        {capture: true, passive:false}
      );
      el.removeEventListener(
        'touchmove',
        handleTouch,
        {capture: true, passive:false}
      );
    };
  }, [handleResize, handleMouseScroll, handleTouch]);

  useEffect(() => {
    
  }, [
    currentOffset,
    children,
    sectionElement,
    fullWidth,
    isScrolling,
    scrollTimeout
  ]);
  
  return (
    <div ref={sectionElement} className={`flex flex-col w-screen h-screen snap-always snap-start ${color}`}>
      {
        (!!heading) &&
        <div className="container mx-auto mt-8 mb-4 px-4">
          <h2 className={(color === 'bg-transparent') ? 'text-trusty-100': ''}>{heading}</h2>
        </div>
      }
      <div className="grow">
        <Carousel offset={currentOffset}>{children}</Carousel>
      </div>
    </div>
  );
}
