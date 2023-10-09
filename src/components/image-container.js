import Image from 'next/image';

export default function ImageContainer({ src, alt  }) {
  return (
    <div className="flex flex-1">
      <div className='flex relative w-full h-full'>
        <Image src={src} alt={alt} style={{objectFit: "contain", objectPosition: "center middle"}} fill />
      </div>
  </div>
  );
}
