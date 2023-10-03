
export default function Quote({ quote }) {
  return (
    <div
      className="bg-cover bg-center w-screen h-full"
      style={{ backgroundImage: `url('/${quote.image}')` }}
    >
      <div className="w-full h-full bg-trusty-500 bg-opacity-70 backdrop-blur-md">
        <div className="mx-auto h-full container flex flex-col justify-evenly">
          <h4 className="text-serenity text-center leading-relaxed px-4">{quote.title}</h4>
          <div>
            {
              quote.author.split('\n').map((line, index) => (
                <p key={index} className={`text-right px-4 text-5 ${index === 0 ? 'text-trusty-100' : 'text-trusty-300'}`}>
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
