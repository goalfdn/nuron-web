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
      <div className='w-full h-screen-adaptive flex flex-col'>
        {/* <h1 className="text-center pt-8">nuron</h1>
        <h3 className="text-center text-trusty-100">
          rewrite <span className="text-serenity">•</span> your <span className="text-serenity">•</span> story
        </h3> */}
        <div className='h-36 flex pt-8 pb-4'>
          <ImageContainer src={'/title.webp'} alt={'logo: nuron, rewrite your story'} />
        </div>
        <div className='flex flex-1 mx-2'>
          <div className='hidden md:flex md:flex-1'>
            <ImageContainer src='/hero.webp' alt='various screens of app shown on iPhone, iPad and laptop' />
          </div>
          <div className='flex flex-1 md:hidden'>
            <ImageContainer src='/hero-narrow.webp' alt='various screens of app shown on iPhone, iPad and laptop' />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          <PlatformButton type="apple" />
          <PlatformButton type="android" />
          <PlatformButton type="windows" />
          <PlatformButton type="macos" />
        </div>
        <div className="flex flex-row mt-7 mb-2 space-x-8 justify-center items-center align-middle">
          <button
            className="text-5 pt-1 pb-2 px-7 rounded-md bg-trusty-200 hover:cursor-pointer hover:bg-serenity text-trusty-500 !font-medium max-w-fit"
            onClick={() => primaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
          >
            {"Start Today"}
          </button>
        </div>
        <div className='mx-auto'>
          <p
            className="hover:cursor-pointer text-trusty-100 hover:text-serenity hover:!font-bold leading-relaxed underline-offset-4 decoration-serenity text-sm uppercase !font-medium translate-y-2"
            onClick={() => secondaryScrollActionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})}
          >
            {"About Nuron"}
          </p>
          <p className="text-serenity text-center font-emoji text-xl pb-2">{"▾"}</p>
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
