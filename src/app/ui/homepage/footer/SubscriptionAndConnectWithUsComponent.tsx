import React from 'react';
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

interface FooterSectionProps {
  email: string;
  // Optionally, add props for dynamic social media links
}

const SubscriptionConnectWithUsAndEmailComponent : React.FC<FooterSectionProps> = ({ email }) => {
  return (
    <div className="col-span-10 sm:col-span-4 md:col-span-5 lg:col-span-3 grid grid-cols-4 gap-4">
      <div className="col-span-4 lg:col-span-2 grid grid-cols-2 border-2 border-[#1360e2] p-2 rounded-xl h-fit gap-4">
        <div className="col-span-2 flex justify-end">
          <Link href={""}>
            <GoArrowUpRight className="text-[#1360e2] size-6" />
          </Link>
        </div>

        <div className="col-span-2 flex justify-start flex-wrap">
          <p>subscription</p>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-2 grid grid-cols-2  border-2 border-[#1360e2] p-2 rounded-xl h-fit gap-4">
        <div className="col-span-2 flex justify-center">
          Connect with Us
        </div>

        <div className="col-span-4 lg:col-span-2 flex justify-center gap-4 flex-wrap">
          <Link href={""}>
            <FaInstagram className="text-[#1360e2] size-6" />
          </Link>
          <Link href={""}>
            <FaFacebook className="text-[#1360e2] size-6" />
          </Link>
          <Link href={""}>
            <FaTwitter className="text-[#1360e2] size-6" />
          </Link>
          <Link href={""}>
            <FaYoutube className="text-[#1360e2] size-6" />
          </Link>
        </div>
      </div>
      <div className="col-span-4 flex justify-center text-2xl">
        {email}
      </div>
    </div>
  );
};

export default SubscriptionConnectWithUsAndEmailComponent