"use client";

import { Children } from "react";

export default function Carousel({ children, offset }) {

  return (
    <div className="w-screen h-full overflow-hidden">
      <div
        className="flex flex-nowrap flex-row h-full transition-all ease-in-out duration-[500ms]"
        style={{ transform: `translateX(${offset}px)` }}
      >
      {
        Children.map(children, (child, index) => (
          <div
            key={index}
            className="w-screen h-full flex-none snap-start"
          >
            {child}
          </div>
        ))
      }
      </div>
    </div>
  );
}
