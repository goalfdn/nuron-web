import Link from "next/link";

export default function Privacy() {

  return (
    <>
    <div className="bg-trusty-50">
      <div className="container mx-auto px-4 py-12">
      <h2 className="pb-5">{"Nuron's Privacy Policy"}</h2>
      <p className="text-5">{
        "Protecting your private information is our priority. This Statement of Privacy applies to Nuron, and Gift of a Life Foundation and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Gift of a Life Foundation include www.goalfoundation.us and Nuron. The Nuron application is a health & fitness application. By using the Nuron application, you consent to the data practices described in this statement."
      }</p>
      <h5 className="pt-5 pb-2">Collection of your Personal Information</h5>
      <p className="text-5">{
        "We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future."
      }</p>
      <h5 className="pt-5 pb-2">Sharing Information with Third Parties</h5>
      <p className="text-5">{
        "Nuron does not sell, rent or lease its customer lists to third parties."
      }</p>
      <p className="text-5 py-2">{
        "Nuron may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Nuron, and they are required to maintain the confidentiality of your information."
      }</p>
      <p className="text-5 py-2">{
        "Nuron may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Nuron or the site; (b) protect and defend the rights or property of Nuron; and/or (c) act under exigent circumstances to protect the personal safety of users of Nuron, or the public."
      }</p>
      <h5 className="pt-5 pb-2">Right to Deletion</h5>
      <p className="text-5">{
        "Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:"
      }</p>
      <ul>
        <li className={`ml-12 -indent-12 text-5 before:content-[""] before:inline-block before:bg-checked-box before:bg-contain before:bg-no-repeat before:bg-center before:w-[2rem] before:h-[2rem] before:mr-4 before:align-bottom my-2 sm:my-4`}>
          {"Delete your personal information from our records; and"}
        </li>
        <li>
          {"Direct any service providers to delete your personal information from their records."}
        </li>
      </ul>
      <p className="text-5">{
        "Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:"
      }</p>
      <ul>
        <li>
          {"Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;"}
        </li>
        <li>
          {"Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;Direct any service providers to delete your personal information from their records."}
        </li>
        <li>
          {"Debug to identify and repair errors that impair existing intended functionality;"}
        </li>
        <li>
          {"Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;"}
        </li>
        <li>
          {"Comply with the California Electronic Communications Privacy Act;"}
        </li>
        <li>
          {"Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;"}
        </li>
        <li>
          {"Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;"}
        </li>
        <li>
          {"Comply with an existing legal obligation; or"}
        </li>
        <li>
          {"Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information."}
        </li>
      </ul>
      <h5 className="pt-5 pb-2">Children Under Thirteen</h5>
      <p className="text-5">{
        "Nuron does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this application."
      }</p>
      <h5 className="pt-5 pb-2">E-mail Communications</h5>
      <p className="text-5">{
        "From time to time, Nuron may contact you via email for the purpose of providing announcements, promotional offers, alerts, confirmations, surveys, and/or other general communication. In order to improve our Services, we may receive a notification when you open an email from Nuron or click on a link therein."
      }</p>
      <p className="text-5 py-2">{
        "If you would like to stop receiving marketing or promotional communications via email from Nuron, you may opt out of such communications by following the Unsubscribe link at the bottom of any email communication."
      }</p>
      <h5 className="pt-5 pb-2">Changes to this Statement</h5>
      <p className="text-5">{
        "Nuron reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our application, and/or by updating any privacy information. Your continued use of the application and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy."
      }</p>
      <h5 className="pt-5 pb-2">Contact Information</h5>
      <p className="text-5">{
        "Nuron welcomes your questions or comments regarding this Statement of Privacy. If you believe that Nuron has not adhered to this Statement, please contact Nuron at:"
      }</p>
      <pre className="py-5">{
`Gift of a Life Foundation
6104 Old Fredericksburg Rd, Unit 91505
Austin, Texas 78709`
      }</pre>
      <pre className="pb-5">{
`Email Address:
support@goalfoundation.us`
      }</pre>
      <p className="text-5">{"Effective as of November 14, 2023"}</p>
      </div>
    </div>
    <div className='snap-start'>
      <p className='w-screen text-center text-5 text-serenity py-8'>
        <span>Copyright &copy; 2023</span>
        <span>{' • '}</span>
        <Link href='/' className='hover:underline'>Home</Link>
      </p>
    </div>
    </>
  );
}