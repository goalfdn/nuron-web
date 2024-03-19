import Script from "next/script";
import { useEffect, useState } from "react";

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

export default function Home() {
  
  const [positioningIndex, setPositioningIndex] = useState(0);

  useEffect(() => {
    setPositioningIndex(Math.round(Math.random()));
  }, []);

  const makeGoldAndBold = (text) =>
    <p className="text-5 my-2">
    {
      text.split(' and ').map((subtext, index) =>
      <>
        <span>{subtext}</span>
        {
          index !== text.split(' and ').length - 1 &&
          <span className="gold-and-bold">{' and '}</span>
        }
      </>)
    }
    </p>
  
  return (
    <>
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
      <div className="h-screen v-screen bg-wp-a bg-cover">
          <div className="container flex m-auto h-screen">
            <div className="flex flex-col align-middle justify-center m-7">
              <h1>{positioning[positioningIndex].title}</h1>
              <h2>{positioning[positioningIndex].subtitle}</h2>
              {makeGoldAndBold(positioning[positioningIndex].p1)}
              {makeGoldAndBold(p2)}
              {makeGoldAndBold(p3)}
            </div>
          </div>
      </div>
    </>
  );
}
