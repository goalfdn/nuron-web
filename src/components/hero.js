'use client';

import { useRef } from 'react';
// import { useWidth } from "@/util/useWidth";
import ImageContainer from './image-container';
import Section from './section';

export default function Hero({ primaryScrollActionRef, secondaryScrollActionRef }) {
  const sectionElement = useRef();
  // const sectionWidth = useWidth(sectionElement);
  
  return (
    <div ref={sectionElement} className='snap-start snap-always fullScreenSection'>
      <div className='w-full h-screen flex flex-col'>
        <h1 className="text-center pt-8">nuron</h1>
        <h3 className="text-center text-trusty-100">
          rewrite <span className="text-serenity">•</span> your <span className="text-serenity">•</span> story
        </h3>
        <div className='flex flex-1'>
          <div className='hidden md:flex md:flex-1'>
            <ImageContainer src='/hero.webp' alt='various screens of app shown on iPhone, iPad and laptop' />
          </div>
          <div className='flex flex-1 md:hidden'>
            <ImageContainer src='/hero-narrow.webp' alt='various screens of app shown on iPhone, iPad and laptop' />
          </div>
        </div>
        <div className="flex flex-row my-4 space-x-8 justify-center items-center align-middle">
          <div className="flex flex-row justify-center items-center">
            <PlatformButton type="apple" />
            <PlatformButton type="android" />
          </div>
          <button
            className="text-5 pt-1 pb-2 px-7 rounded-md bg-trusty-200 hover:cursor-pointer hover:bg-serenity text-trusty-500 !font-medium max-w-fit"
            onClick={() => primaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
          >
            {"Start Today!"}
          </button>
          <div className="flex flex-row justify-center items-center">
            <PlatformButton type="windows" />
            <PlatformButton type="macos" />
          </div>
        </div>
        <div className='mx-auto pt-4'>
          <span
            className="hover:cursor-pointer text-trusty-100 hover:text-serenity hover:!font-bold leading-relaxed underline-offset-4 decoration-serenity text-sm uppercase !font-medium"
            onClick={() => secondaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
          >
            {"About Nuron"}
          </span>
          <p className="text-serenity text-center font-emoji text-xl pb-4">{"▾"}</p>
        </div>
      </div>
    </div>
  );
}

function PlatformButton({ type }) {
  return (
    <div
      className="mx-4 bg-center bg-contain bg-no-repeat aspect-square h-5"
      style={{ backgroundImage: `url("/${type}.webp")` }}
    />
  );
}
