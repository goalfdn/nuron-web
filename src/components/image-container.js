'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ImageContainer({ src, alt  }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="flex flex-1">
      <div className='flex relative w-full h-full'>
        <Image className={`transition ease-in duration-700 ${loaded ? 'opacity-1' : 'opacity-0'}`} onLoadingComplete={() => setLoaded(true)} src={src} alt={alt} style={{objectFit: "contain", objectPosition: "center middle"}} fill />
      </div>
  </div>
  );
}
