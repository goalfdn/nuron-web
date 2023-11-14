'use client';

import { chapters } from "@/app/constants";
import { useCallback, useEffect, useRef, useState } from "react";

export default function ChapterWall() {

  return (
    <div className="overflow-x-visible">
      <ChapterWallRow />
      <ChapterWallRow initialOffset={250} />
      <ChapterWallRow initialOffset={444} />
    </div>
  );
}

function ChapterWallRow({ initialOffset = 0 }) {
  const getNextRandom = () => {
    let nextTenItems = [];
  
    for (let i = 0; i < 10; i += 1) {
      const randomCategory = Math.floor(Math.random() * chapters.length);
      const selectedCategory = chapters[randomCategory];
  
      const randomItem = Math.floor(Math.random() * selectedCategory.items.length);
      nextTenItems.push(selectedCategory.items[randomItem]);
    }
  
    return nextTenItems;
  };

  const [xOffset, setXOffset] = useState(initialOffset);
  const [scrollInterval, setScrollInterval] = useState(null);
  const [items, setItems] = useState(getNextRandom());

  const edgeDetectionRef = useRef();

  const handleScrollOnVisibilityChange = useCallback(() => {
    if (document.visibilityState === "visible" && !scrollInterval) {
      console.log('visible and no scroll!');
      setXOffset(xOffset + 40);
    } else if (document.visibilityState === "hidden") {
      console.log('hidden! stop scroll');
      clearInterval(scrollInterval);
      setScrollInterval(null);
    }
  }, [scrollInterval, xOffset]);

  useEffect(() => {
    let interval = setInterval(() => setXOffset(xOffset + 40), 1000);
    setScrollInterval(interval);

    return () => clearInterval(interval);
  }, [xOffset]);

  useEffect(() => {
    let visibilityChange;
    if (typeof document.msHidden !== "undefined") {
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      visibilityChange = "webkitvisibilitychange";
    } else {
      visibilityChange = "visibilitychange";
    }
    //^different browsers^

    document.addEventListener(visibilityChange, handleScrollOnVisibilityChange, false);

    return () => document.removeEventListener(visibilityChange, handleScrollOnVisibilityChange);
  }, [handleScrollOnVisibilityChange]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const isIntersecting = entries[0]?.isIntersecting ?? false;
      if (isIntersecting) {
        setItems([...items, ...getNextRandom()]);
        console.log('intersect!');
      }
    });
    
    if (edgeDetectionRef.current !== null) {
      intersectionObserver.disconnect();
      intersectionObserver.observe(edgeDetectionRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    }
  }, [items]);

  return (
    <div
      className={`flex flex-row flex-nowrap overflow-x-visible transition duration-1000 ease-linear`}
      style={{ transform: `translateX(${-xOffset}px)` }}
    >
      {items.map((item, index) => (index === items.length - 1) ? 
        <div key={index} ref={edgeDetectionRef}><ChapterWallItem label={item} /></div> :
        <ChapterWallItem key={index} label={item} />)}
    </div>
  );
}

function ChapterWallItem({ label }) {

  return (
    <div className="bg-trusty-50 m-2 border-trusty-300 border-[1px] border-solid rounded-full px-4 py-2">
      <p className="whitespace-pre">
        <span className="font-emoji text-lg">{label.slice(0, label.indexOf(' '))}</span>
        <span className="text-5 text-trusty-500 !font-bold uppercase">{label.slice(label.indexOf(' '))}</span>
      </p>
    </div>
  );
}
