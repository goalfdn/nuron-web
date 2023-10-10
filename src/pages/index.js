"use client";

import Hero from '@/components/hero';
import Section from '@/components/section';
import Quote from '@/components/quote';
import USP from '@/components/usp';
import { useRef } from 'react';
import Head from 'next/head';

const usp = [
  {
    us: "Choose your adventure.",
    and: "No one knows you better than you! Explore different routes, and we'll illuminate their effectiveness for you.",
    them: "Stick to our method for success. We're the experts, trust our research over other researched methods!"
  },
  {
    us: "Your well-being, your rules.",
    and: "Take the wheel, no cookie-cutter fixes here! Explore options as you please, and we'll empower you to spot even the tiniest shifts early on— so you can level up your decisions like a true pro!",
    them: "Follow our rules, and we promise happiness. We're the experts, trust us!"
  },
  {
    us: "Crafted your plan? Fantastic!",
    and: "Let's anticipate challenges and equip you for success. Unexpected hurdle? We've got your back with gentle nudges and proven techniques to conquer it. Stuck? Let's explore a new strategy together. Feeling lost? We've got a treasure trove of ideas waiting for you!",
    them: "Do as we say, follow our steps, and success is guaranteed. Trust us, if it's not working, that's on you! We've got the proven formula."
  }
];

const quotes = [
  {
    title: "“Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.”",
    author: "Lao Tzu (6th Century B.C.)\n— Mahatma Gandhi (18th Century)",
    image: "tzu"
  },
  {
    title: "“Human behavior flows from three main sources: desire, emotion, and knowledge.”",
    author: "Plato (3rd Century B.C)\nCentral figure in history of Philosophy",
    image: "plato"
  },
  {
    title: "“What is necessary to change a person is to change his awareness of himself.”",
    author: "Abraham Maslow\nCentral figure in development of Psychology",
    image: "psych"
  },
  {
    title: "“If everyone could learn that what is right for me does not make it right for anyone else, the world would be a much happier place.”",
    author: "William Glasser\nWorld-renowned psychiatrist & author",
    image: "neuronbg"
  },
  {
    title: "“Life is hard. Life is difficult. Life is going to punch you in the gut. But when you change your attitude, you change your behavior. When your behavior changes, so do your results.”",
    author: "Will Hurd\nEx-C.I.A. & U.S. 2024 Presidential Candidate",
    image: "cia"
  },
  {
    title: "“It's not hard to make decisions once you know what your values are.”",
    author: "Roy E. Disney\nCreator of Walt Disney",
    image: "imagination"
  },
  {
    title: "“Success is not the key to happiness. Happiness is the key to success.”",
    author: "Albert Schweitzer\ntheologian, organist, musicologist, writer, humanitarian, philosopher, physician\n...and Nobel Peace prize winner",
    image: "keys"
  },
  {
    title: "“We can't control the wind, but we can always adjust the sails.”",
    author: "Panda Express\nfortune cookie",
    image: "panda"
  }
];

const core_features = [
  'Pursue as many high-level goals as you desire',
  'Measure and visualize your progress with endless personalized metrics',
  'Uncover meaningful connections between your actions, emotions and outcomes',
  '24x7 Chat with A.I.D.E.N– your personalized, AI-powered coach',
  'Comprehensive health and emotion tracking',
  'Efficient task and habit management',
  'Integrated journaling to reflect on your journey'
];

const pricing = [
  {
    title: "Pre-release Trial",
    description: "limitless tools for personal growth",
    value: "$63",
    price: "FREE",
    action: "Secure Your Spot",
    features: [
      'Unrestricted access to all features for one month after public release',
      'Extend your access for free by referring friends (up to three months!)',
      'Gift up to three friends with a one-month all-access pass',
      'Enjoy continued access to free version forever'
    ]
  },
  {
    title: "Founders' Edition",
    description: "rewrite *our story* as we grow together",
    value: "$108",
    price: "$25",
    action: "Download Now",
    features: [
      'Unrestricted access to all features for one year after public release',
      'Get a sneak peek with our preview version and propose customizations',
      'Tailor our tools to align perfectly with your preferences',
      "We'll make adjustments to fit your needs before the official launch"
    ]
  }
];

export default function Home() {
  const primaryScrollActionRef = useRef();
  const secondaryScrollActionRef = useRef();
  
  return (
    <>
      <Head>
        <title>nuron</title>
        <meta name="description" content="rewrite your story" key="desc" />
        <meta property="og:title" content="Win quicker and feel better today with Nuron" />
        <meta
          property="og:description"
          content="Nuron is an A.I. powered platform that fuses science, technology and personal experiences to drive lasting behavior change for greater achievement and fulfillment in life."
        />
        {/* <meta
          property="og:image"
          content="https://opengraphweb.s3.amazonaws.com/og-home%401x.png"
        /> */}
      </Head>
      <div className="flex h-screen overflow-y-scroll snap-mandatory snap-y supports-[height:100dvh]:min-h-[100dvh] flex-col items-center justify-between">
        <Hero primaryScrollActionRef={primaryScrollActionRef} secondaryScrollActionRef={secondaryScrollActionRef} />
        <div ref={secondaryScrollActionRef}>
          <Section color='bg-trusty-200'>
            <div id='after-hero' className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
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
            <div className='w-screen h-full bg-trusty-400'>
              <div className='mx-auto h-full container pt-8 pb-14 px-4 flex flex-col justify-between'>
                <h2 className='text-trusty-100 text-right'>...hack fulfillment</h2>
              <div>
                <p className='text-trusty-300 !font-light text-2 text-left md:text-center'>{"Your emotions are beyond your control."}</p>
                <p className='text-trusty-100 !font-medium text-1 text-right md:text-center pt-3'>{"Your mindset isn't."}</p>
              </div>
              <div>
                <p className='text-trusty-200 !font-bold pb-1 text-left text-5'>{'Think brighter, feel better.'}</p>
                <p className='text-trusty-200 text-left text-5'>{'Discover effective strategies to reshape your thinking and proactively act toward a happier, more positive mindset.'}</p>
              </div>
              </div>
            </div>
          </Section>
        </div>
        <div>
        <Section color='bg-trusty-100'>
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
              <h2 className='text-right text-trusty-100'>...backed by evidence</h2>
              <ul className='h-full flex flex-col justify-center items-center'>
                <li className='my-3'><p className='text-trusty-200 text-center text-4'>MCII for Goal Achievement</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-3'>DSM-5 Self-Reporting Measures</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-2'>Schwartz&apos;s Theory of Basic Human Values</p></li>
                <li className='my-3'><p className='text-trusty-200 text-center text-1'>Leading Cognitive-Behavioral Principles</p></li>
              </ul>
            </div>
          </div>
        </Section>
        </div>
        <div>
        <Section heading="the nuron way..." color='bg-trusty-200 text-center'>
          {
            usp.map((item, index) => (
              <USP key={index} usp={item} />
            ))
          }
        </Section>
        </div>
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
        <Section color='bg-trusty-300'>
          <div className='px-4 container h-full mx-auto flex flex-col'>
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
          </div>
        </Section>
        </div>
        <div id='pricing' ref={primaryScrollActionRef} className='snap-proximity snap-start w-screen py-8 bg-trusty-100'>
          <div className='container mx-auto flex flex-col'>
            <h2 className='text-trusty-500 mb-8 px-4'>the early bird...</h2>
            <div className='snap-start snap-proximity flex flex-row flex-wrap-reverse md:flex-wrap'>
              {
                pricing.map((section, index) => (
                  <div key={`pr-${index}`} className='snap-proximity snap-start flex w-screen md:flex-1 h-full flex-col justify-center items-center align-middle'>
                    <div className={`mx-4 px-4 py-7 my-8 md:min-w-[400px] ${index === 0 ? '':'rounded-md border-trusty-500 border-2 bg-trusty-200'}`}>
                      <h4 className={`text-2 ${index === 1 ? 'text-trusty-500': 'text-trusty-400'} text-center !font-medium`}>{section.title}</h4>
                      <p className='text-4 !font-normal mb-4 text-center'>
                        {
                          section.description.split('*').map((text, tIndex) => (
                            <span
                              key={`sp-${index}-${tIndex}`}
                              className={`${tIndex === 1 ? '!font-bold text-trusty-400' : ''}`}
                            >
                              {text}
                            </span>
                          ))
                        }
                      </p>
                      <hr className={`${index === 1 ? 'border-trusty-500' : 'border-trusty-400'} mb-7`} />
                      <div className='w-full flex flex-col justify-center items-center'>
                        <p className='text-5 !font-bold line-through text-trusty-500 text-center'>
                          <span className='text-trusty-400'>{`Value: ${section.value}`}</span>
                        </p>
                        <p className='text-1 text-trusty-500 text-center mb-7'>{section.price}</p>
                      </div>
                      <button className={`w-full rounded-md px-4 pt-2 pb-3 mb-8 text-5 ${index === 1 ? 'bg-trusty-500 text-trusty-200':'bg-trusty-400 text-trusty-100'}`}>
                        {section.action}
                      </button>
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
        </div>
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
        <div>
        <Section>
          {
            quotes.map((quote, index) => (
              <Quote key={`quote-${index}`} quote={quote} />
            ))
          }
        </Section>
        </div>
        <div>
          <p className='w-screen text-center text-5 text-serenity py-8'>Copyright &copy; 2023</p>
        </div>
      </div>
    </>
  );
}
