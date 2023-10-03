
export default function USP({ usp }) {
  return (
    <div className="mx-auto h-full container flex flex-col">
      <div className="px-4 pb-8 flex-1 grow flex flex-col items-center justify-center">
        <p className="text-center center max-w-2xl mx-auto text-2">
          <span className="line-through text-trusty-500">
            <span className="text-trusty-400">{usp.them}</span>
          </span>
        </p>
        <p className="text-trusty-500 text-center pt-8 pb-4 text-1">{usp.us}</p>
      </div>
      <h5 className="pb-14 px-4 text-5">{usp.and}</h5>
    </div>
  );
}