import Image from "next/image";

export default function Quote({ quote }) {
  return (
    <div className="w-screen h-full relative">
      <Image className="z-0 w-full h-full relative" src={'/' + quote.image + '.webp'} alt={quote.alt} style={{objectFit: "cover", objectPosition: "center middle"}} fill />
      <div className="z-10 w-full h-full bg-trusty-500 bg-opacity-70 backdrop-blur-md">
        <div className="mx-auto h-full container flex flex-col justify-evenly">
          <h4 className="text-serenity text-center leading-relaxed px-4">{quote.title}</h4>
          <div>
            {
              quote.author.split('\n').map((line, index) => (
                <p key={index} className={`text-right px-4 text-5 ${index === 0 ? 'text-trusty-50' : 'text-trusty-200'}`}>
                  {`${index === 0 ? '— ' : ''}${line}`}
                </p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
