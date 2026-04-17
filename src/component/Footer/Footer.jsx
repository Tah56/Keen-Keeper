import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
          <div className='py-20 container mx-auto text-center flex flex-col justify-center items-center text-white space-y-2.5'>
        <h2 className='font-medium text-4xl'><span className='font-bold'>KEEN</span>KEEPER</h2>
        <p className='opacity-80'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div className='font-medium text-center space-y-2.5'>
            <h2>social Link</h2>
            <div className='flex gap-5'>
                <ImInstagram/>
                <FaFacebook/>
                <BsTwitterX/>
            </div>
        </div>
            <hr className='text-white/20 w-full mt-10'/>
            <div className='flex justify-between w-full mt-8 text-[#FAFAFA]/50 '>
                <h3>© 2026 KeenKeeper. All rights reserved</h3>
                <div>
                    Privacy Policy           Terms of Service           Cookies
                </div>
            </div>

           
          </div>
        </div>
    );
};

export default Footer;