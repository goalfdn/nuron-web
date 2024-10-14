import Link from "next/link";

export default function Contact() {

  return (
    <div className="flex flex-col container mx-auto px-4 pt-12 min-h-screen">
      <div className="flex flex-col flex-1">
        <h1 className="pb-5">Contact Us</h1>
        <p className="text-5 my-2">
          We will be updating this page with more information soon.
        </p>
        <p className="text-5 my-2">
          In the meantime, for any questions or concerns, please email us at <a className="text-serenity" href="mailto:support@nuroverse.co">support@nuroverse.co</a>
        </p>
      </div>
      <div className='flex flex-col justify-center items-center snap-start'>
        <p className='w-screen text-center text-5 text-serenity py-8'>
          <span>Copyright &copy; 2024</span>
          <span>{' • '}</span>
          <Link href='/' className='hover:underline'>Home</Link>
        </p>
      </div>
    </div>
  );
}