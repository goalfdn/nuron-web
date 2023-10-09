'use client';

import { useEffect, useState, useRef } from 'react';
import { useWidth } from "@/util/useWidth";
import ImageContainer from './image-container';

export default function Hero({ primaryScrollActionRef, secondaryScrollActionRef }) {
  const sectionElement = useRef();
  const sectionWidth = useWidth(sectionElement);
  
  return (
    <div ref={sectionElement} className="h-screen w-screen snap-always snap-start flex flex-col">
      <h1 className="text-center pt-8">nuron</h1>
      <h3 className="text-center text-trusty-100">
        rewrite <span className="text-serenity">•</span> your <span className="text-serenity">•</span> story
      </h3>
      <div className='flex flex-1'>
        {
          sectionWidth > 0 && sectionWidth >= 1024 &&
          <ImageContainer src='/hero.png' alt='various screens of app shown on iPhone, iPad and laptop' />
        }
        {
          sectionWidth > 0 && sectionWidth < 1024 &&
          <ImageContainer src='/hero-narrow.png' alt='various screens of app shown on iPhone, iPad and laptop' />
        }
      </div>
      <div className="flex flex-row my-4 space-x-8 justify-center items-center align-middle">
        <button
          className="text-5 pt-1 pb-2 px-7 rounded-md bg-trusty-100 hover:cursor-pointer hover:bg-serenity text-trusty-500 !font-medium max-w-fit"
          onClick={() => primaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
        >
          {"I'm Ready!"}
        </button>
        <a
          className="hover:cursor-pointer hover:text-serenity hover:!font-medium leading-relaxed underline-offset-4 decoration-serenity text-5 text-trusty-100 !font-normal"
          onClick={() => secondaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
        >
          {"Tell Me More"}
        </a>
      </div>
      <p className="text-trusty-300 text-center pb-8">{"Founders' Edition available Oct. 23"}</p>
      {/* <div className="flex flex-row justify-center mt-4">
        <PlatformButton type="apple" />
        <PlatformButton type="android" />
        <PlatformButton type="windows" />
        <PlatformButton type="linux" />
      </div> */}
    </div>
  );
}

function PlatformButton({ type }) {
  return (
    <div
      className="mx-4 bg-center bg-contain bg-no-repeat aspect-square h-5"
      style={{ backgroundImage: `url("/${type}.png")` }}
    />
  );
}
