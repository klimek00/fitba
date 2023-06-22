import React from 'react';
import {SiFacebook, SiGithub, SiInstagram, SiTiktok} from 'react-icons/si'

export default function Footer() {
  return (
    <>
      <section className='text-center text-xl bg-neutral-600 text-white font-sans'>
        <div className="flex border-b border-neutral-200 p-4 lg:justify-center">

          <div className="flex justify-center">
            <a href='#' className='mr-6'>
              <SiFacebook/>
            </a>
            <a href='#' className='mr-6'>
              <SiGithub/>
            </a>
            <a href='#' className='mr-6'>
              <SiInstagram/>
            </a>
            <a href='#' className='mr-6'>
              <SiTiktok/>
            </a>
          </div>
        </div>
      <div className="bg-neutral-600 text-center p-2">
        <a className="font-semibold">Fitba.</a> 2023 Copyright
      </div>
      </section>
      </>
  );
}