import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";
import ReactGA from "react-ga4";

const positioning = [
  {
    title: 'Goodbye, chaos!',
    subtitle: 'Your shortcut to a hassle-free life.',
    p1: 'Balancing your work, errands, family, social life and your well-being can be stressful. We get it. That\'s why we built the Nuron app.'
  },
  {
    title: 'Don\'t compromise.',
    subtitle: 'You can have it all, minus the burnout.',
    p1: 'Feeling overwhelmed, balancing work, family and your well-being? Let the Nuron app simplify things for you.'
  }
];

const p2 = 'With Nuron, you can get things done and master your emotional well-being. Your tools? A customizable daily planner, wellness tracker, and your own life coach, A.I.D.E.N.!';
const p3 = 'A.I.D.E.N. doesn\'t just organize your life; it gets you. As you turn plans to action and track your wellness, A.I.D.E.N. identifies patterns and creates personalized solutions so you can reach your goals faster and feel great while you\'re at it.'

export default function Home({ positioningIndex, hapiKey, gaKey }) {
  const [showEmail, setShowEmail] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState(false);
  const [email, setEmail] = useState('');

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

  const submitEmail = async (e) => {
    e.preventDefault();
    if (!!email && email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+/)) {
      // submit email to hubspot
      
      try {
        await fetch('/api/notify', {
          method: 'POST',
          body: JSON.stringify({ email, hapiKey, positioningIndex }),
          headers: new Headers({
            "Content-Type": "application/json",
            "Accept": "application/json"
          })
        });
        setSubmittedEmail(true);
      } catch (e) {
        alert('Failed to submit email. Please try again.');
        console.error(e);
      }
    } else {
      alert('Invalid email.');
    }
  }

  const showForm = () => {
    setShowEmail(true);
    ReactGA.event({
      category: 'CTA',
      action: 'Click',
      label: 'Sign Me Up Button clicked'
    });
  };

  const makeGoldAndBold = (text) =>
    <p className="text-5 my-2">
    {
      text.split(' and ').map((subtext, index) =>
      <span key={index}>
        <span>{subtext}</span>
        {
          index !== text.split(' and ').length - 1 &&
          <span className="gold-and-bold">{' and '}</span>
        }
      </span>)
    }
    </p>
  
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
      <div className={`h-screen v-screen bg-center bg-cover ${positioningIndex === 0 ? 'bg-wp-a' : 'bg-wp-b'}`}>
        <div className="container flex m-auto h-screen px-2 lg:px-0 flex-col justify-between">
          <div className="flex flex-row justify-between m-2">
            <Image src={'/logo.png'} alt="nuron logo" height={36} width={88} />
          </div>
          <div className="flex flex-col items-start justify-center m-2">
            <h1>{positioning[positioningIndex].title}</h1>
            <h2 className="pt-1">{positioning[positioningIndex].subtitle}</h2>
            {makeGoldAndBold(positioning[positioningIndex].p1)}
            {makeGoldAndBold(p2)}
            {makeGoldAndBold(p3)}
            {
              submittedEmail ?
              <p className="text-5 py-4"><span className="gold-and-bold">Thank you</span> for signing up for email notifications. <span className="gold-and-bold">Stay tuned</span> for updates.</p> :
              !showEmail ?
              <button className="btn" onClick={showForm}>
                {'SIGN ME UP!'}
              </button> :
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-4">
                  <PlatformButton type="apple" />
                  <PlatformButton type="android" />
                  <PlatformButton type="windows" />
                  <PlatformButton type="macos" />
                  <p className="text-sm font-sans font-black text-trusty-100">{'COMING SOON'}</p>
                </div>
                <form className="flex flex-row" action="#" onSubmit={submitEmail}>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-[250px] pt-1 pb-2 px-2 rounded-md mr-1 border-0 mt-4 font-sans text-trusty-500"
                    placeholder="Type email here for updates"
                    />
                  <button className="btn" type="submit">
                    {'✓'}
                  </button>
                </form>
              </div>
            }
          </div>
          <div className="flex items-center justify-center">
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

function PlatformButton({ type }) {
  return (
    <div
      className="mx-2 bg-center bg-contain bg-no-repeat aspect-square h-5"
      style={{ backgroundImage: `url("/${type}.webp")` }}
    />
  );
}
