"use client";

import Hero from '@/components/hero';
import Section from '@/components/section';
import Quote from '@/components/quote';
import USP from '@/components/usp';
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import { core_features, designed_for, quotes, usp } from '@/app/constants';
import ImageContainer from '@/components/image-container';
import ChapterWall from '@/components/chapter-wall';
// import ImageContainer from '@/components/image-container';

export default function Home() {
  const primaryScrollActionRef = useRef();
  const secondaryScrollActionRef = useRef();

  const [designedForIndex, setDesignedForIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setDesignedForIndex((designedForIndex + 1) % designed_for.length), 2500);

    return () => clearInterval(interval);
  }, [designedForIndex]);
  
  return (
    <>
      <Head>
        <title>nuron</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="rewrite your story" key="desc" />
        <meta property="og:title" content="Feel better. Win quicker. Harness the power of Nuron." />
        <meta
          property="og:description"
          content="Nuron is an A.I. powered platform that drives lasting behavior change using science, technology and personal experiences."
        />
        <meta
          property="og:image"
          content="https://opengraphweb.s3.amazonaws.com/OG-Graphic.png"
        />
      </Head>
      <div className="flex h-screen-adaptive overflow-y-scroll snap-mandatory snap-y supports-[height:100dvh]:min-h-[100dvh] flex-col items-center justify-between">
        <Hero primaryScrollActionRef={primaryScrollActionRef} secondaryScrollActionRef={secondaryScrollActionRef} />
        <div id='after-hero' ref={secondaryScrollActionRef} className='fullScreenSection flex flex-col bg-trusty-50'>
          <div className='mx-auto h-screen-adaptive container pt-8 pb-8 px-4 flex flex-col'>
            <div>
              <h3 className='text-xl md:text-3xl lg:text-4xl'>the next step in app evolution</h3>
              <h2 className='pt-1 text-2xl md:text-4xl lg:text-5xl'>is a self-empowerment revolution.</h2>
            </div>
            <div className='flex flex-1 flex-col md:flex-row'>
              <div className='md:flex-1 md:flex md:flex-col md:items-center'>
                <div className='mt-4 mb-8 md:my-auto'>
                  <p className='text-5 pb-4 md:pr-4'>
                    {'We live in an era where technology can be used to track all aspects of our lives.'}
                  </p>
                  <p className='text-5 md:pt-4'>
                    {'What if we could use this data to monitor our health, wealth and happiness, then leverage the power of science and technology to live our best lives?'}
                  </p>
                </div>
              </div>
              <div className='flex md:flex-1 grow'>
                <ImageContainer src='/spiral-of-success.webp' alt='upward spiral shows how guided action, measured results and a transformed mindset create a positive cycle of self-empowerment' />
              </div>
            </div>
          </div>
        </div>
        {/* <div className='fullScreenSection flex flex-col bg-trusty-50'>
          <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between items-start'>
            <div>
              <h3>envision the big picture</h3>
              <h2 className='pt-1'>live in the now.</h2>
            </div>
            <div>
              <p className='text-5 pb-4'>
                {'Write the chapters of your story, keep your targets in sight and reflect on your journey.'}
              </p>
              <p className='text-5 pb-4'>
                {'Then, focus on your actions, results, feelings and thoughts in the moment.'}
              </p>
              <p className='text-5'>
                {"Let Nuron make sense of it all and show you how the bigger picture evolves– so you never lose track of what's important."}
              </p>
            </div>
          </div>
        </div> */}
        <div className='fullScreenSection flex flex-col bg-trusty-100'>
          <div className='h-screen-adaptive flex flex-col justify-between items-start'>
            <div className='mx-auto container pt-8 pb-4 px-4'>
              <h3>designed for</h3>
              {
                designedForIndex >= 0 &&
                <div className='inline'><div key={designedForIndex} className='textAppear w-0'><h2>{designed_for[designedForIndex]}</h2></div></div>
              }
            </div>
            <div className='w-screen overflow-hidden flex flex-1'>
              <ChapterWall />
            </div>
            <div className='mx-auto container pt-4 pb-8 px-4'>
              <p className='text-5 pb-4'>{"Nuron is your gateway to unleashing the collective potential of advanced AI, statistics, and psychology for transformative change."}</p>
              <p className='text-5 pb-4'>{"Say goodbye to those persistent, stubborn areas in your life where you've been craving change. It's time to break those distressing patterns and build fulfilling, rewarding ones."}</p>
              <p className='text-5'>{"Nuron is your companion on this journey, every step of the way."}</p>
            </div>
          </div>
        </div>
        <div className='fullScreenSection relative bg-trusty-50 text-center'>
          <div className='sticky h-screen-adaptive bg-trusty-50'><div className='mx-auto py-8 w-full bg-trusty-50 z-20'><h2>the nuron way</h2></div></div>
          <div className='fullScreenSubSectionWrapper absolute top-0 bottom-0 left-0 right-0 z-10'>
          {
            usp.map((item, index) => (
              <USP key={index} usp={item} />
            ))
          }
          </div>
        </div>
        {/* <div className='fullScreenSection flex flex-col bg-trusty-100'>
          <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
            <h2 className='text-trusty-500'>stack achievements...</h2>
            <div>
              <p className='text-trusty-500 !font-light text-2 text-left md:text-center'>{"Your outcomes are beyond your control."}</p>
              <p className='text-trusty-400 !font-medium text-1 text-right md:text-center pt-3'>{"Your efforts aren't."}</p>
            </div>
            <div>
              <p className='text-text-black !font-bold pb-1 text-left text-5'>{'Work smarter, win quicker.'}</p>
              <p className='text-text-black text-left text-5'>{'Gain crystal-clear insights into how efficiently your daily actions drive your progress towards your goals.'}</p>
            </div>
          </div>
        </div>
          <Section color='bg-trusty-400'>
            <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
              <h2 className='text-trusty-50 text-right'>...hack fulfillment</h2>
            <div>
              <p className='text-trusty-200 !font-light text-2 text-left md:text-center'>{"Your emotions are beyond your control."}</p>
              <p className='text-trusty-100 !font-medium text-1 text-right md:text-center pt-3'>{"Your mindset isn't."}</p>
            </div>
            <div>
              <p className='text-trusty-50 !font-bold pb-1 text-left text-5'>{'Think brighter, feel better.'}</p>
              <p className='text-trusty-50 text-left text-5'>{'Discover effective strategies to reshape your thinking and proactively act toward a happier, more positive mindset.'}</p>
            </div>
            </div>
          </Section> */}
        {/* </div>
        <div> */}
        {/* <Section color='bg-trusty-100'>
          <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
            <h2 className='text-trusty-500'>driven by intuition...</h2>
            <ul className='h-full flex flex-col justify-center items-center'>
              <li className='my-3'><p className='text-trusty-400 text-center text-1'>Your highest goals</p></li>
              <li className='my-3'><p className='text-trusty-400 text-center text-2'>Your greatest values</p></li>
              <li className='my-3'><p className='text-trusty-400 text-center text-3'>Your deepest thoughts</p></li>
              <li className='my-3'><p className='text-trusty-400 text-center text-4'>Your strongest emotions</p></li>
            </ul>
          </div>
          <div className='w-screen h-full bg-trusty-400'>
            <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
              <h2 className='text-right text-trusty-50'>...backed by evidence</h2>
              <ul className='h-full flex flex-col justify-center items-center'>
                <li className='my-3'><p className='text-trusty-200 text-center text-4'>MCII for Goal Achievement</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-3'>DSM-5 Self-Reporting Measures</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-2'>Schwartz&apos;s Theory of Basic Human Values</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-1'>Leading Cognitive-Behavioral Principles</p></li>
              </ul>
            </div>
          </div>
        </Section> */}
        {/* </div>
        <div>
        </div> */}
        {/* <Section>
          <div className='mx-auto h-full px-4 container'>
            <h2 className='text-trusty-100 mt-10'>a brighter future awaits...</h2>
            <div className='h-full flex flex-col'>
              <p className='mt-4 text-4 !font-light !leading-relaxed text-trusty-300'>
                We know <span className='text-serenity'>you know</span> better than anyone what that looks like <span className='text-serenity'>for you</span>. You, and only <span className='text-serenity'>you can make it happen</span>{". With Nuron, you've got all the tools to help "}<span className='text-serenity'>get you there</span>.
              </p>
              <div className='text-3 mt-14'>
                <p className='text-4 text-trusty-300 !font-normal'>
                  The only question that remains is...
                </p>
                <p className='text-1 text-trusty-100'>
                  <span className='text-serenity'>are you ready</span> to act towards it?
                </p>
              </div>
              <div className='w-full flex flex-1 flex-row flex-wrap items-center align-middle'>
                <button className="text-5 pt-1 pb-2 px-7 mr-8 rounded-md bg-trusty-300 hover:cursor-pointer hover:bg-serenity text-trusty-500 !font-medium max-w-fit">
                  {"Yes"}
                </button>
                <a className="hover:cursor-pointer hover:text-serenity hover:!font-medium leading-relaxed underline-offset-4 decoration-serenity text-5 text-trusty-100 !font-normal">
                  {"Abso-freaking-lutely!"}
                </a>
              </div>
            </div>
          </div>
        </Section> */}
        <div>
        <Section color='bg-trusty-200'>
          <div ref={primaryScrollActionRef} className='px-4 container h-full mx-auto flex flex-col'>
            <p className='text-4 sm:text-3 !font-medium text-trusty-400 mt-8'>{"A fusion of science, technology and personal journeys..."}</p>
            <p className='text-3 sm:text-2 !font-normal text-trusty-500 text-right py-4'>{"Nuron launches on all major platforms in Spring 2024"}</p>
            <div className='flex flex-1 flex-col justify-center items-center'>
              <ul>
                {
                  core_features.map((feature, index) => (
                    <li key={`cf-${index}`} className={`ml-12 -indent-12 text-5 before:content-[""] before:inline-block before:bg-checked-box before:bg-contain before:bg-no-repeat before:bg-center before:w-[2rem] before:h-[2rem] before:mr-4 before:align-bottom my-2 sm:my-4 ${index > 3 ? 'hidden sm:block' : ''}`}>
                      {feature}
                    </li>
                  ))
                }
              </ul>
              <p className='text-5 w-full text-right pt-2 sm:pt-4'>...and more</p>
            </div>
            <div className='flex flex-col items-center justify-center mb-8 mt-2'>
              <div>
                <p className='uppercase !font-black italic mx-2 text-red-700'>Exclusive Access!</p>
              </div>
              <a href='https://www.zeffy.com/en-US/ticketing/8b1b7d66-54f1-447d-b916-81f6589be09c'>
                <div className='my-2 text-5 pt-1 pb-2 px-7 rounded-md bg-trusty-400 hover:cursor-pointer hover:bg-trusty-500 text-trusty-50 !font-medium max-w-fit'>
                  Download Early Preview
                </div>
              </a>
              <p className='pt-2'>Try Risk-Free for 90 days</p>
            </div>
          </div>
        </Section>
        </div>
        {/* <div id='pricing' ref={primaryScrollActionRef} className='snap-proximity snap-start w-screen py-8 bg-trusty-50'>
          <div className='container mx-auto flex flex-col'>
            <h2 className='text-trusty-500 mb-8 px-4'>the early bird...</h2>
            <div className='snap-start snap-proximity flex flex-row flex-wrap-reverse md:flex-wrap'>
              {
                pricing.map((section, index) => (
                  <div key={`pr-${index}`} className='snap-proximity snap-start flex w-screen md:flex-1 h-full flex-col justify-center items-center align-middle'>
                    <div className={`mx-4 px-4 py-7 my-8 md:min-w-[400px] ${index === 0 ? '':'rounded-md border-trusty-500 border-2 bg-trusty-100'}`}>
                      <h4 className={`text-2 text-trusty-400 text-center !font-medium`}>{section.title}</h4>
                      <p className='text-4 !font-normal mb-4 text-center'>
                        {
                          section.description.split('*').map((text, tIndex) => (
                            <span
                              key={`sp-${index}-${tIndex}`}
                              className={`${tIndex === 1 ? '!font-black text-trusty-400' : ''}`}
                            >
                              {text}
                            </span>
                          ))
                        }
                      </p>
                      <hr className={`${index === 1 ? 'border-trusty-500' : 'border-trusty-400'} mb-7`} />
                      <div className='w-full flex flex-col justify-center items-center'>
                        <p className='text-5 !font-bold line-through text-trusty-400 text-center'>
                          <span className='text-trusty-300'>{`Value: ${section.value}`}</span>
                        </p>
                        <p className='text-1 text-trusty-400 text-center mb-7'>{section.price}</p>
                      </div>
                      {
                          section.action === "Secure Your Spot" ?
                          <a href="https://www.zeffy.com/en-US/ticketing/495a7967-462e-456a-bbdf-d5b1215eb306">
                              <button className="w-full rounded-md px-4 pt-2 pb-3 mb-8 text-5 bg-trusty-400 text-trusty-100">
                                  {section.action}
                              </button>
                          </a>
                          :
                          section.action === "Download Now" ?
                          <a href="https://www.zeffy.com/en-US/ticketing/1c84d313-fe17-4047-95cd-9a2c2522ec8f">
                              <button className="w-full rounded-md px-4 pt-2 pb-3 mb-8 text-5 bg-trusty-400 text-trusty-100">
                                  {section.action}
                              </button>
                          </a>
                          :
                          <button className="w-full rounded-md px-4 pt-2 pb-3 mb-8 text-5 bg-trusty-400 text-trusty-100">
                              {section.action}
                          </button>
                      }
                      <ul>
                      {
                        section.features.map((feature, fIndex) => (
                          <li key={`core-ft-${index}-${fIndex}`} className='ml-10 -indent-10 text-5 before:content-[""] before:inline-block before:bg-checked-box before:bg-contain before:bg-no-repeat before:bg-center before:w-[1.5rem] before:h-[1.5rem] before:mr-4 before:align-bottom my-4'>
                            {feature}
                          </li>
                        ))
                      }
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div> */}
        {/* <div className='snap-mandatory snap-start w-screen bg-trusty-200'>
          <div className='px-4 container mx-auto'>
            <h2>in the meantime...</h2>
            <p>{"We break down essential concepts from neuroscience research into actionable tips. Each tip is a small lifestyle change, expressed in a short sentence, that has been found to make a big impact in enriching one's life."}</p>
            <p>{"You may already know some, many are ones you wouldn't normally expect to make such a difference."}</p>
            <h3>Hack of the Week</h3>
            <div>
              <p>{"Chewing your food thoroughly improves memory and cognitive function due to increased blood flow and oxygen to the brain."}</p>
            </div>
            <p>{"Receive next week's Hack, along with sources, details and tips to Do-It-Yourself."}</p>
            <form>
              <button type='submit'>{'Count Me In!'}</button>
            </form>
          </div>
        </div> */}
        {/* <div>
        <Section>
          {
            quotes.map((quote, index) => (
              <Quote key={`quote-${index}`} quote={quote} />
            ))
          }
        </Section>
        </div> */}
        <div className='snap-start'>
          <p className='w-screen text-center text-5 text-serenity py-8'>
            <span>Copyright &copy; 2023</span>
            <span>{' • '}</span>
            <a href='/privacy-policy.pdf' target='_blank' className='hover:underline'>Privacy Policy</a>
          </p>
        </div>
      </div>
    </>
  );
}
