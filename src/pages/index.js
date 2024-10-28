import ImageContainer from "@/components/image-container";
import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const positioning = [
  {
    title: 'Feel understood,',
    subtitle: 'not just responded to',
    p1: `Got something weighing on your mind? Want to talk about it without judgement? Want to work through life's challenges with a thoughtful and understanding expert?`
  },
  {
    title: 'Discover clarity,',
    subtitle: 'not just answers',
    p1: 'Looking to unlock your potential? Ready to tackle obstacles with guidance tailored just for you? Need a supportive partner to help navigate your thoughts and aspirations?'
  }
];

const p2 = 'Nuron is for you.';

export default function Home({ positioningIndex, hapiKey, gaKey }) {

  useEffect(() => {
    ReactGA.initialize(gaKey); 
    ReactGA.send({
      hitType: "pageview",
      page: `/${positioningIndex === 0 ? 'a' : 'b'}`,
      title: "Page View For Position"
    });
    ReactGA.event({
      category: "Positioning",
      action: "Show",
      label: `Positioning Option ${positioningIndex === 0 ? 'A' : 'B'}`,
      value: positioningIndex,
      nonInteraction: true,
    });
  }, [gaKey, positioningIndex]);

  const iOSClicked = () => {
    ReactGA.event({
      category: 'CTA',
      action: 'Click',
      label: 'Download iOS clicked'
    });
  };

  const androidClicked = () => {
    ReactGA.event({
      category: 'CTA',
      action: 'Click',
      label: 'Download Android clicked'
    });
  };
  
  return (
    <>
    <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-16NFZ82FW7" 
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-16NFZ82FW7');
        `}
      </Script>
      {/* Hotjar Tracking Code for https://www.thenuronway.com */}
      <Script id='hotjar'>
      {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3899589,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}
      </Script>
      <div className={`h-screen bg-center bg-cover ${positioningIndex === 0 ? 'bg-wp-a' : 'bg-wp-b'}`}>
        <div className="container flex m-auto h-full px-2 flex-col justify-between">
          <div className="flex flex-row justify-between m-2">
            <Image src={'/logo.png'} alt="nuron logo" height={36} width={88} />
          </div>
          <div className="flex flex-col items-start justify-center m-2">
            <h1>{positioning[positioningIndex].title}</h1>
            <h2 className="pt-1">{positioning[positioningIndex].subtitle}</h2>
            <p className="text-5 my-2">{positioning[positioningIndex].p1}</p>
            <p className="text-5 my-2 !text-trusty-200 !font-medium">{p2}</p>
            <div className="flex flex-row justify-start items-stretch mt-7 h-12 w-full">
              <div className="flex aspect-ios mr-4 hover:cursor-pointer" onClick={iOSClicked}>
                <ImageContainer src={'/app-store.svg'} alt="Download on iOS App Store" />
              </div>
              <div className="flex aspect-android hover:cursor-pointer" onClick={androidClicked}>
                <ImageContainer src={'/play-store.png'} alt="Get it on Google Play" />
              </div>
            </div>
            <div class="mt-7">
              <a href='https://chataiden.com/' class='text-5 font-bold !text-serenity-shade hover:!text-serenity'>
                <span class="underline underline-offset-4">or sign up on our website</span><span>{' ›'}</span>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center pt-7">
            <p className="text-footer mb-2">{'Copyright © Nuroverse 2024'}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Pass data to the page via props
  return { props: {
    positioningIndex: Math.round(Math.random()),
    hapiKey: process.env.HAPIKEY,
    gaKey: process.env.GAKEY
  }};
}
